// 계산식) 적정체중 = (본인신장-100)*0.9
// 변수명 예) userHeight, userWeight, normal_w
// prompt 현재키, 몸무게 입력받기
// DOM객체 변수 생성하기
// =============================
let userHeight = window.prompt('당신의 현재 키는?')
let userweight = window.prompt('당신의 현재 몸무게는?')
let normal_w = (userHeight-100)*0.9
let result = userweight - normal_w

const H = document.getElementsByClassName('height')[0]
const W = document.getElementsByClassName('weight')[0]
const N = document.getElementsByClassName('normal')[0]
const NW = document.getElementsByClassName('weight2')[0]

console.log(userHeight, userweight, normal_w, result)
console.log(H, W, N, NW)

H.innerHTML = userHeight + 'cm'
W.innerHTML = userweight + 'kg'
N.innerHTML = normal_w + 'kg'
NW.innerHTML = (`-${result}kg`)
