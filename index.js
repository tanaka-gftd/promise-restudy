'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること

/* 
  Promiseの結果をコールバック関数に渡す際には、thenを挟む必要がある。
  async関数を実行してreturnされた値を、別の関数で使用する際も、thenで挟む必要がある。
*/

//async/await文で記述した場合の例１
async function main() {
  const a = await getA();
  const b = await getB();
  const c = await getC();
}
main().then(num => {  //(num)とせずに、numとするだけでも問題ないらしい
  console.log(num);
});

//async/await文で記述した場合の例２(例１をコメントアウトしないと、undefinedになる)
getA().then(async a => {  
  const b = await getB();
  const c = await getC();
  console.log(a * b * c);
});

//Promiseチェーンの場合の例１
getA().then(a => {  
  return getB().then(b =>{
    return getC().then(c => {
      console.log(a*b*c);
    });
  });
});

//Promiseチェーンの場合の例２
getA().then(a => {  
    return getB().then(b => {
      return a * b;
    });
  }).then(result => {
    getC().then(c => {
      console.log(result * c);
    });
});

//Promise.allの場合
//Promise.allの場合は、複数のPromiseの解決が同時に開始されるので、早く終わる
Promise.all([getA(), getB(), getC()]).then(results => {
  console.log(results[0] * results[1] * results[2]);
});