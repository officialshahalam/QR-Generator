const qrCode=document.querySelector("[qrCode]");
const inputBox=document.querySelector("input[type=text]");
console.log(inputBox);
function generate(){
    if(inputBox.value){
        qrCode.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`;
    }
    else{
        alert("please give some text or url");
    }
}