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


