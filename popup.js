

function msg(){ 
   document.getElementById('screen').value+=this.id;
}  
function root(){ 
   document.getElementById('screen').value=this.id;
}  
function evaluate(){ 
   a = document.getElementById("screen").value;
   document.getElementById("screen").value = eval(a);
} 

function roo(){ 
   document.getElementById("screen").value = (Math.sqrt(eval(document.getElementById("screen").value)));
} 
function Clear(){ 
   document.getElementById("screen").value = Math.floor((document.getElementById("screen").value)/10);
} 
function AllClear(){ 
   document.getElementById("screen").value = "";
} 
document.getElementById("+").addEventListener("click",msg);
document.getElementById("-").addEventListener("click",msg);
document.getElementById("*").addEventListener("click",msg);
document.getElementById("/").addEventListener("click",msg);
document.getElementById("0").addEventListener("click",msg);
document.getElementById("1").addEventListener("click",msg);
document.getElementById("2").addEventListener("click",msg);
document.getElementById("3").addEventListener("click",msg);
document.getElementById("4").addEventListener("click",msg);
document.getElementById("5").addEventListener("click",msg);
document.getElementById("6").addEventListener("click",msg);
document.getElementById("7").addEventListener("click",msg);
document.getElementById("8").addEventListener("click",msg);
document.getElementById("9").addEventListener("click",msg);
document.getElementById(".").addEventListener("click",msg);
document.getElementById("%").addEventListener("click",msg);
document.getElementById('=').addEventListener("click",evaluate);
document.getElementById("root").addEventListener("click",roo);
document.getElementById("C").addEventListener("click",Clear);
document.getElementById("AC").addEventListener("click",AllClear);


