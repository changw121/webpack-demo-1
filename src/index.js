// import x from './x.js'
// console.log(x)
import png from './assets/1.png'
console.log(png)

//给模板中添加img标签
const div = document.getElementById('app')
console.log(div)
div.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import("./lazy")
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log("懒加载出错啦")
    })
}
div.appendChild(button)