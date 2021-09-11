const items = {
    foo: {num: 2},
    bar: {num: -1},
    buz: {num: null},
    qux: {},
    quux: null
}

const paramslist = []

//pythonでいうemulate関数でkeyとvalueを分ける
for (const [_, value] of Object.entries(items)) {
    // valueのなかで実数のものを弾き出す
    if (value != null && value.num != null) {
        //該当するものをpushする
        paramslist.push(value)
    }
}

console.log(paramslist)