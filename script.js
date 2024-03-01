const first_para = document.querySelector('.first-para')
const img1 = document.querySelector('.plus1')
const second_para = document.querySelector('.second-para')
const img2 = document.querySelector('.plus2')
const third_para = document.querySelector('.third-para')
const img3 = document.querySelector('.plus3')
function click1(){
    if(first_para.style.display === "none" ){
        first_para.style.display="block"
        img1.setAttribute('src',"./assets/images/icon-minus.svg")
    }
    else{
        first_para.style.display="none"
        img1.setAttribute('src',"./assets/images/icon-plus.svg")
    }
}

function click2(){
    if(second_para.style.display === "none" ){
        second_para.style.display="block"
        img2.setAttribute('src',"./assets/images/icon-minus.svg")
    }
    else{
        second_para.style.display="none"
        img2.setAttribute('src',"./assets/images/icon-plus.svg")
    }
}

function click3(){
    if(third_para.style.display === "none" ){
        third_para.style.display="block"
        img3.setAttribute('src',"./assets/images/icon-minus.svg")
    }
    else{
        third_para.style.display="none"
        img3.setAttribute('src',"./assets/images/icon-plus.svg")
    }
}
img1.addEventListener('click',click1);
img2.addEventListener('click',click2);
img3.addEventListener('click',click3);