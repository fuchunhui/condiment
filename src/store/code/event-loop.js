/**
 * 宏任务与微任务之间的执行顺序(同步任务 -> 微任务 -> 宏任务)
 * 整段js代码就是第一个大的宏任务，事件循环是由这第一个宏任务开始，然后分出微任务、宏任务
 * 
 * 很有名的银行例子，很不错的案例，帮助理解。
 * 银行柜台前排着一条队伍，都是存钱的人，存钱属于宏任务，这条队伍就是宏任务队列，当一个‘宏大爷’被叫到了自己的号码，就上前去--被处理，处理存钱业务时，‘宏大爷’突然想给自己的存款办个微理财(微任务)，那么银行职员就将他的需求添加到自己的微任务队列，大爷就不用再排队了，直接在存钱宏任务进行完后就处理衍生出来的微任务理财，办理财时大爷又说办个信用卡，那就又排到微任务队列里。但要是在此次存钱时‘宏大爷’说他还要存钱，且是他老伴要存钱，也是宏任务，但不好意思，需要取号到宏任务队列的后面排队（这里就是在宏任务进行时产生微任务和宏任务的处理方式）。
 * 
 */

const loop1 = () => {
  setTimeout(function () { // 宏任务1
    console.log('1');
  });

  new Promise(function (resolve) { // 同步任务1
    console.log('2');
    resolve();
  }).then(function () { // 微任务1
    console.log('3');
  });

  console.log('4'); // 同2

  setTimeout(function () { // 宏2
    console.log('5'); // 宏2的同1
    new Promise(function (resolve) { // 宏2的同2
      console.log('6');
      new Promise(function (resolve) { // 宏2的同3
        console.log('x1');
        resolve();
      }).then(function () { // 宏2的微1
        console.log('X2');
      });
      console.log('x666'); // 宏2的同4
      setTimeout(function () { // 宏2的宏任务，宏4
        console.log('X3');
        new Promise(function (resolve) { // 宏4 同1
          console.log('X4');
          resolve();
        }).then(function () { // 宏4 微1
          console.log('X5');
        });
      });
      resolve();
    }).then(function () { // 宏2的微2
      console.log('7');
    });
  });

  setTimeout(function () { // 宏3
    console.log('8');
  });
};

loop1(); // 2 4 3 1 5 6 x1 x666 x2 7 8 x3 x4 x5
