const input=document.getElementById("input")
document.getElementById("btn").addEventListener("click",()=>{
   check();
})
function check(){
    const enteredtext=input.value;
    const text=enteredtext.toLowerCase();
    if(text==text.split("").reverse().join("")){
        alert(enteredtext+" is a Palindrome")
    }else{
        alert(enteredtext+" is not a Palindrome")
    }
}