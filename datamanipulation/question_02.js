const items = [
  { foo: 1 },
  { bar: 2 },
  { foo: -2 },
  { foo: 3, bar: 4 },
  { neko: 1, mamushi: 1 },
];

const result = (items) => {
  const temp = [];
  // オブジェクトをバラバラにする
  items.forEach((value) => {
    for (const [key, item] of Object.entries(value)) {
      temp.push({ [key]: item });
    }
  });

  const result = temp.reduce((res, obj) => {
    for (key in obj) {
      // 同じものがあるかどうかを判定
      //　trueの場合、加算し、falseの場合は新しくobjectを追加する
      key in res ? (res[key] += obj[key]) : (res[key] = obj[key]);
    }
    return res;
  }, {});

  console.log(result);
};

result(items);
