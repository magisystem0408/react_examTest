const items = [{foo: 1}, {bar: 2}, {foo: -2}, {foo: 3, bar: 4}, {neko: 1, mamushi: 1}];

// const item ={foo:{num:2},bar:{num: -1},buz:{num:null},quux:null}



//
//
// const keyWordsList = []
//
// //ここでそれぞれのdictからkeyを全てkeyWordsListに格納する
// const keywords = items.map(((value) => {
//     // それぞれのsetの内容のkey情報を配列で格納する
//     let keys = Object.keys(value)
//     for (i = 0; i <= keys.length - 1; i++) {
//         keyWordsList.push(keys[i])
//     }
// }))
//
// //ここでkeywordの重複を削除する
// const keyword = keyWordsList.filter(((value, index, self) => {
//     return self.indexOf(value) === index
// }))
//
// // console.log(keyword)
//
//
// var value = "this_is_value"
// var property_name = "this_is_key"
//
// // console.log(a)
// test ={}
// test = items.map(((value, index) => {
//     let keys = Object.keys(value)
//     let values = Object.values(value)
//     for (i = 0; i <= keys.length - 1; i++) {
//         // a.push(lists)
//         let key = keys[i]
//         let value = values[i]
//         console.log("#################")
//         console.log(key, value)
//     }
// }))
//
// console.log(test)
//
// //ここにfunctionを生成する


// const map = items.map((value, index, array) => {
//     // console.log(value[keyword[2]])
//     // for (i = 0; i <= keyword.length; i++) {
//     //     if (value[keyword[i]] == !undefined) {
//     //         console.log(value[keyword[i]]);
//     //     }
//     // }
//
//     for (i=0;i<=keyword.length;i++){
//         console.log("検索ワード：",keyword[i])
//         console.log(value[keyword[i]]);
//     }
//
//     console.log("ーーーーーーーーー")
//     // console.log(value.hasOwnProperty('neko'))
// })


const mamushi =new Object()

// キーワードを確認して
// 計算してから最後にobjextにappendする

items.reduce((sum,i) =>{
    // for (const iKey in i) {
    //     console.log(iKey)
    // }
    // console.log(i)
    for (const [key, neko] of Object.entries(i)) {
        console.log(key.toString(),neko)
    }
    // console.log(i)
},0)

console.log(mamushi)
// console.log("############")
let neko= "foo"
let arara =Object.create(null)
Object.defineProperty(arara,neko.toString(),{value:123})
console.log(arara.mamushi)