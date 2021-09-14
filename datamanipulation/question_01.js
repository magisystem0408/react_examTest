const items = {
  foo: { num: 2 },
  bar: { num: -1 },
  buz: { num: null },
  qux: {},
  quux: null,
};

const result = (items) => {
  const paramsList = [];
  // pythonでいうemulate関数でkeyとvalueを分ける
  for (const [_, value] of Object.entries(items)) {
    // valueのなかで実数のものを弾き出す
    if (value != null && value.num != null) {
      //該当するものをpushする
      paramsList.push(value);
    }
  }
  console.log(paramsList);
};

result(items);
