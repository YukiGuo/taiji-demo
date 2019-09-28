let html = document.querySelector('#html')
let style = document.querySelector('#style')
let str = `
/*大家好，我是一个前端新人，请多指教。
接下来我要动态演示我做一个八卦图的过程*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgb(0,0,0)
}
/*八卦是阴阳形成的一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,5,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*然后再加两个小球*/
#div1::before {
    width:150px;
    height:150px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);
    border-radius:50%;
}
#div1::after{
    width:150px;
    height:150px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
`

str2 = ''

let n = 0
console.log('1')
let step = () => {
    if (n >= str.length) { return }
    setTimeout(() => {
        if (str[n] === "\n") {
            str2 += "<br>"
        }
        else if (str[n] === " ") {
            str2 += " &nbsp;"
        }
        else {
            str2 += str[n]
        }
        //两个条件的话以下代码为简写
        // str2 += (str[n] === "\n") ? "<br>" : str[n]
        html.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        n = n + 1
        step()
    }, 1)
}

step()
win

// setInterval(() => {
//     if (n > str.length) { return }
//     html.innerHTML = str.substr(0, n)
//     n = n + 1
//     console.log(n)
// }, 300);
// setInterval 会一直进行下去