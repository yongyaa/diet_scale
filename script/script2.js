// 원세데이터(논리형 데이터 true(1), false(0))
let a = false
let b = 1
console.log(a==b)
// 원시데이터(null(빈), undefined(정의되지않음))
let c = 10 // 선언O 대입O
let d // 선언O 대입X
c = null // 값이 대입된 후 특정상황에 따라서 값을 제거할 경우
console.log(c) // null
console.log(d) // undefined
// ===========================================================
let e = 10
let f = '0'
console.log(e+f)
// 산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*6
let num4 = 90/3
let num5 = 5%3
console.log(num1, num2, num3, num4, num5)
// ===============================================================
let box1 = 1
box1 += 10
console.log(box1) // 11
// ===========================================================
let box2 = 0
box2 = box2+10 // box2 += 10
console.log(box2) // 10
box2 = box2-5 // box2 -= 5
console.log(box2) // 5
box2 = box2*2 // box2 *= 2
console.log(box2) // 10
box2 += '살 입니다'
// window.alert(box2)
// ==============================================================
let box3 = 10
console.log(box3)
let box4 = box3++
console.log(box4, box3)