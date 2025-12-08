// const body=document.getElementsByTagName('body')[0]
const body=document.body
body.style.backgroundColor="red"
document.getElementById("green").addEventListener('click',()=>{
   setColor('green')
})
document.getElementById('blue').addEventListener('click',()=>{
    setColor('blue')
})
document.getElementById('red').addEventListener('click',()=>{
    setColor('red')
})
document.getElementById('orange').addEventListener('click',()=>{
    setColor('orange')
})
function setColor(name){
    body.style.backgroundColor=name
}
