n1=document.getElementById('n1');
n2=document.getElementById('n2');
repElm=document.getElementById('reponse')
scoreElm=document.getElementById('score');
H3Score=document.getElementById('H3Score');

num1=Math.ceil(Math.random()*10);
num2=Math.ceil(Math.random()*10);


n1.innerHTML=num1;
n2.innerHTML=num2;



var score;

if(localStorage.length!=0){
    score=localStorage.getItem("score");
}else score=0;

scoreElm.innerHTML=score;   


// *********** la fonction vérifier
function verifier(){
    rep=repElm.value;
    if(rep!=''){
        if(rep==num1*num2)    score++;
        else score--;

        localStorage.setItem("score",score)
        scoreElm.innerHTML=score;  
        
        setTimeout(()=>{
            window.location.reload();
        },200)
    }
}

if(score<=0) H3Score.style.color='red';
else H3Score.style.color='green';




function initialiserScore(){
    score=0;
    localStorage.setItem("score",score);
    scoreElm.innerHTML=score;  

}
