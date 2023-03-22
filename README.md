# diet_scale
<h1>다이어트 체중계</h1>
<p>당신의 키대비한 평균 몸무게를 알아보고 반성하세요.</p>
<p>몸무게 계산식) (본인 신장)-100)*0.9 = 평균 몸무게</p>
---

`let userHeight = window.prompt('당신의 현재 키는?')`
`let userweight = window.prompt('당신의 현재 몸무게는?')`
`let normal_w = (userHeight-100)*0.9`
`let result = userweight - normal_w`
---
`const H = document.getElementsByClassName('height')[0]`
`const W = document.getElementsByClassName('weight')[0]`
`const N = document.getElementsByClassName('normal')[0]`
`const NW = document.getElementsByClassName('weight2')[0]`
---
`console.log(userHeight, userweight, normal_w, result)`
`console.log(H, W, N, NW)`
---
`H.innerHTML = userHeight + 'cm'`
`W.innerHTML = userweight + 'kg'`
`N.innerHTML = normal_w + 'kg'`
`NW.innerHTML = (`-${result}kg`)`
