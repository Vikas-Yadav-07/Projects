// Selectors

const button = document.querySelector('button');
const txtArea = document.querySelector('textarea');
const checkBtn = document.querySelector('.check-btn');
const xBtn = document.querySelector('.x-btn');
const section3 = document.querySelector('.section3');
const section2 = document.querySelector('.section2');
i=0;






//  EventListeners
button.addEventListener('click',hideshow);
xBtn.addEventListener('click',hideshow);
xBtn.addEventListener('mouseover',colorfn);
xBtn.addEventListener('mouseout',colorout);
checkBtn.addEventListener('click',addNote);











// functions
function hideshow(){
    if(section3.style.display=='none'){
        section3.style.display='block';
    }else{
        section3.style.display='none';
    }
}

function colorfn(){
    txtArea.style.outline="4px solid red"
}
function colorout(){
    txtArea.style.outline="none";
}


function addNote(){
    if(txtArea.value==""){
        alert("Please Enter Your Note...")
    }
    else{
    const node1 = document.createElement('div');
    node1.classList.add("note-item");
    node1.style.margin = random_margin();
    node1.style.transform = rendom_angle();
    node1.style.background = random_color();
    node1.addEventListener('mouseover',function(){
        node1.style.transform='scale(1.2)';
    });
    node1.addEventListener('mouseout',function(){
        node1.style.transform='scale(1)';
        node1.style.transform = rendom_angle();


    });
    node1.addEventListener('dblclick',function(){
        node1.remove();
    });
    const nodediv = document.createElement('div');
    nodediv.classList.add('note-txt');
    nodediv.innerText=txtArea.value;

    const delbtn = document.createElement('button');
    delbtn.classList.add("note-del");
    delbtn.innerHTML="<i class='fa-solid fa-trash'></i>"
    node1.appendChild(nodediv);
    node1.appendChild(delbtn);
    section2.appendChild(node1);
    section3.style.display='none';
    txtArea.value = "";
    
    delbtn.addEventListener('click',function(){
        node1.remove();
    });

    }
   
}



function rendom_angle(){
    const getangle= ["rotate(-10deg)","rotate(10deg)","rotate(-5deg)","rotate(20deg)"]
    return getangle[Math.floor(Math.random()*getangle.length)];
    
 }

 function random_margin(){
     const getmargin = ["20px","10px","-2px","11px"]
     return getmargin[Math.floor(Math.random()*getmargin.length)];
 }

 function random_color(){
     
     const  getcolor = ["#CCCC99","#A6BDE0","brown","#CCCCCC"];
     if(i==(getcolor.length-1)){
         i=0
     }
     else{i++}
     return   getcolor[i];
     
 }