const txt=document.querySelector('.input input');
checkBtn=document.querySelector('.input button');
infotxt=document.querySelector('.info-text');
let filterInput;
checkBtn.addEventListener(("click"),function () {
    let reverseinput=filterInput.split("").reverse().join("");
    // console.log(reverseinput);
    infotxt.style.display="block";
    if(filterInput!=reverseinput){
       return infotxt.innerHTML=`no! it is not  a palindrome`;
    }
    else{
        return infotxt.innerHTML=`yes it is a palindrome`
    }
})
txt.addEventListener("keyup",()=>{
     filterInput=txt.value.toLowerCase().replace(/[^A-Z0-9]/ig,"")
    // console.log(txt.value);
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");

})