let input = document.getElementById('input')
let btn = document.getElementById('btn')
let div = document.getElementById('div')

btn.addEventListener('click', ()=>{
    localStorage.setItem('divni_Texti', input.value)
    Getdata()
})

function Getdata() {
    div.innerHTML = localStorage.getItem('divni_Texti')
}
Getdata()

input.style.borderRadius = '30px'
input.style.height = '30px'
btn.style.height = '30px'
input.style.width = '220px'
btn.style.width = '120px'
btn.style.borderRadius = '10px'
btn.style.backgroundColor = 'green'
btn.style.color = 'white'
div.style.backgroundColor = 'red'
div.style.color = 'white'
div.style.width = '300px'
div.style.height = '100px'
div.style.fontSize = '60px'
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'
div.style.borderRadius = '10px'

