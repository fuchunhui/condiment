import {Database, SqlJsStatic, QueryExecResult} from 'sql.js';
const initSqlJs = require('sql.js'); // eslint-disable-line

import axios from 'axios'; // TODO 临时引用，需要整理，统一

class Singleton {
  private static instance: Singleton;
  public db: Database | undefined;
  _state = false;

  private constructor() {
    this._state = false;
  }

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  getState() {
    return this._state;
  }
}

const DEFAULT_PATH = './db';

export default {
  getPath(path = DEFAULT_PATH): string {
    // TODO 需要解决 个人使用数据库，与网络使用数据库的问题，同时，是否有必要拆分出两个?
    // 或者 考虑做一个数据的管理页面，基础的配置，使用。
    return `${path}/sql.db`; 
  },
  async initDB(): Promise<Database> {
    const sqlPromise = initSqlJs({
      locateFile: (file: string) => `/wasm/${file}`
    }).then((SqlJs: SqlJsStatic) => {
      return Promise.resolve(SqlJs);
    }).catch((err: Error) => {
      console.error(err);
    });

    const dbPromise = axios({
      url: this.getPath(),
      method: 'get',
      responseType: 'arraybuffer'
    }).then(res => Promise.resolve(res.data));

    const [SqlJs, buffer] = await Promise.all([sqlPromise, dbPromise]);
    const db = new SqlJs.Database(new Uint8Array(buffer));
    Singleton.getInstance().db = db;
    console.log('new db: ', db.db); // TODO test数据
  
    return Promise.resolve(db);
  },
  getDB(): Database {
    return Singleton.getInstance().db as Database;
  },
  testDB(): void {
    const s1 = Singleton.getInstance();
    console.log('test', s1.db);
  },
  initial(): void {
    const db = this.getDB();

    // TODO 数据库设计
    // 定义必备的基础建表语句结构
    // 如 表不存在时候，则创建
    // CREATE TABLE IF NOT EXISTS employees(uid integer primary key,uname varchar(20),mobile varchar(20))

    // const sqlstr1 = 'CREATE TABLE employees (a int, b char);';
    // db.run(sqlstr1);
    const contents = db.exec("SELECT * FROM employees");
    console.log('employees: ------->', {...contents});

    // Execute some sql
    let sqlstr = 'CREATE TABLE hello (a int, b char);';
    sqlstr += 'INSERT INTO hello VALUES (0, "hello");';
    sqlstr += 'INSERT INTO hello VALUES (1, "world");';
    db.run(sqlstr); // Run the query without returning anything

    const res = db.exec('SELECT * FROM hello');
    console.log('hello table: ', res);

    return;
    /*
      [
        {columns:['a','b'], values:[[0,'hello'],[1,'world']]}
      ]
    */

    // Prepare an sql statement
    const stmt = db.prepare('SELECT * FROM hello WHERE a=:aval AND b=:bval');

    // Bind values to the parameters and fetch the results of the query
    const result = stmt.getAsObject({':aval': 1, ':bval': 'world'});
    console.log('result: ', result); // Will print {a:1, b:'world'}

    // Bind other values
    stmt.bind([0, 'hello']);
    while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']
    // free the memory used by the statement
    stmt.free();
    // You can not use your statement anymore once it has been freed.
    // But not freeing your statements causes memory leaks. You don't want that.

    // You can also use JavaScript functions inside your SQL code
    // Create the js function you need
    function add(a: any, b: any) {
      return a + b; // eslint-disable-line
    }
    // Specifies the SQL function's name, the number of it's arguments, and the js function to use
    db.create_function("add_js", add);
    // Run a query in which the function is used
    db.run("INSERT INTO hello VALUES (add_js(7, 3), add_js('Hello ', 'world'));"); // Inserts 10 and 'Hello world'

    // Export the database to an Uint8Array containing the SQLite database file
    // const binaryArray = db.export();
    
    const res2 = db.exec('SELECT * FROM hello');
    console.log('hello table: ', res2);

    db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 0, 222]);

    // Prepare a statement
    const stmt1 = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
    stmt1.getAsObject({
      $start: 1,
      $end: 1
    }); // {col1:1, col2:111}

    // Bind new values
    stmt1.bind({$start: 1, $end: 2});
    while (stmt1.step()) {
      const row = stmt1.getAsObject();
      console.log('Here is a row: ' + JSON.stringify(row));
    }
  },
  ready(): boolean {
    return Boolean(Singleton.getInstance().db);
  },
  queryAllTables(): QueryExecResult[] {
    const content: QueryExecResult[] = this.getDB().exec('SELECT name, sql FROM sqlite_master');
    return content;
  },
  createTable(): void {
    // 建表
    // 点击按钮后，再首次执行建表操作
    // 查询取值
    // 插入数据
    const contents = this.getDB().exec("SELECT * FROM employees");
    console.log({...contents});
  },
  hasTable(name: string): boolean {
    const sql = `SELECT count(*) FROM sqlite_master WHERE type='table' AND name='${name}'`;
    const {values}: QueryExecResult  = this.getDB().exec(sql)[0];
    return values[0][0] === 1;
  },
  queryTable(name: string): QueryExecResult[] { // TODO 暂时定义返回QueryExecResult，实际上需要解析出结果
    console.log('query table name: ', name);
    return [];
  }
};
