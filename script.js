let logic1 = !true /* False */
console.log(logic1)

let logic2 = !false /* True */
console.log(logic2)

let logic3 = !!false /* False */ 
console.log(logic3)

let logic4 = !!true /* True */
console.log(logic4)

let logic5 = !1 /* False */
console.log(logic5)

let logic6 = !!1 /* True */
console.log(logic6)

let logic7 = !0 /* True */
console.log(logic7)

let logic8 = !!0 /* False */
console.log(logic8)

let logic9 = !!"" /* False */
console.log(logic9)

let x = 5

let y = 9

let logic10 = x<10 && x!==5

console.log(logic10) /* False */



let a = 10
let b ="a"
let logic12 = b ==="b" || a >= 10

console.log(logic12) /* True */


let c =3
let d =8
let logic13 = !(c == "3" || c === d) && !(d !== 8 && x <= d)
console.log(logic13) /* False */


let str = ""
let msg = "haha!"
let eBonito = "false"
let operador_14 = !((str || msg) && eBonito) 
console.log(operador_14) /* False */