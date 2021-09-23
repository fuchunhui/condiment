
enum FieldType {
  INT = 'INT',
  LONG = 'BIGINT',
  DOUBLE = 'DOUBLE',
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  STRING = 'VARCHAR',
  TEXT = 'TEXT',
  MULTIVALUE = 'MULTIVALUE',
}

// v1
const VALID_TYPE_MAP = {
  [FieldType.INT]: [FieldType.INT],
  [FieldType.LONG]: [FieldType.LONG, FieldType.INT],
  [FieldType.DOUBLE]: [FieldType.INT, FieldType.DOUBLE, FieldType.LONG],
  [FieldType.DATE]: [FieldType.DATE],
  [FieldType.DATETIME]: [FieldType.DATETIME, FieldType.DATE],
  [FieldType.STRING]: [FieldType.STRING],
  [FieldType.TEXT]: [FieldType.TEXT, FieldType.STRING],
  [FieldType.MULTIVALUE]: [FieldType.MULTIVALUE],
};

/**
* 校验字段类型
*/
function checkType(dbType: FieldType, mdmType: FieldType): void {
  if (VALID_TYPE_MAP[dbType].includes(mdmType)) {
    console.log('one ok');
    return;
  }
  console.error('checkType error.');
}

// v2
const VALID_TYPE_MAP2: {
  [key: string]: string[]
} = {
  [FieldType.LONG]: [FieldType.INT],
  [FieldType.DOUBLE]: [FieldType.DOUBLE, FieldType.LONG],
  [FieldType.DATETIME]: [FieldType.DATE],
  [FieldType.TEXT]: [FieldType.STRING],
};

/**
* 校验字段类型
*/
function checkType2(dbType: FieldType, mdmType: FieldType): void {
  if (dbType === mdmType
    || dbType === FieldType.STRING
    || VALID_TYPE_MAP2[dbType]?.includes(mdmType)) {
    console.log('two ok');
    return;
  }
  
  console.error('checkType2 error.');
}

interface Valid_Type {
  [key: string]: string[]
}

const ALL: string[] = Object.keys(FieldType);

const VALID_TYPE_MAP3: Valid_Type = {
  [FieldType.STRING]: ALL,
  [FieldType.LONG]: [FieldType.INT],
  [FieldType.DOUBLE]: [FieldType.DOUBLE, FieldType.LONG],
  [FieldType.DATETIME]: [FieldType.DATE],
  [FieldType.TEXT]: [FieldType.STRING],
};

function checkType3(dbType: FieldType, mdmType: FieldType): void {
  if (dbType === mdmType || VALID_TYPE_MAP3[dbType]?.includes(mdmType)) {
    console.log('three ok');
    return;
  }
  
  console.error('checkType3 error.');
}

function main(): void {
  console.log('run');
  checkType(FieldType.LONG, FieldType.INT);
  checkType2(FieldType.LONG, FieldType.DOUBLE);
  checkType3(FieldType.DATETIME, FieldType.DATE);
}

export default main;
