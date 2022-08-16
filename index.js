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

//参考：async/await文で記述した場合
//値を取得し、それらの積を返す関数を定義
/* async function main() {
  //個々の値を取得
  const a = await getA();
  const b = await getB();
  const c = await getC();

  //取得した値の積をreturn
  return a * b * c;
}
//解決されたPromiseを受け取り、thenでコールバック関数に渡す
main().then((num) => {
  console.log(num);  //受け取った値を表示
}); */


getA().then((a) => {
  return getB().then((b) =>{
    return getC().then((c) => {
      console.log(a*b*c);
    });
  });
});