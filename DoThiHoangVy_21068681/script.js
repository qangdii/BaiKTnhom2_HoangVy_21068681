/*BÀI 1*/
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

/*BÀI 2*/
setInterval(() => {
    let hourspan = document.getElementById("hour")
let minutesspan = document.getElementById("minutes")
let seccondspan = document.getElementById("seccond")
let AM = document.getElementById("AM")
const date = new Date()
hourspan.innerHTML = date.getHours() % 12
minutesspan.innerHTML = date.getMinutes()
seccondspan.innerHTML = date.getSeconds()
if(date.getHours()>12){
    AM.innerHTML = "AM"
}else{
    AM.innerHTML = "PM"
}
}, 1000);


/*BAIF3*/
const date = new Date()
function submit(){
    let name = document.getElementById("name");
    let nameValue = name.value;
    let text = document.getElementById("message");
    let textValue = text.values;
    let hourtext= date
    let hourString = hourtext.toString()
    let div = document.createElement("div")
    div.style.marginTop = "10px"
    div.style.fontSize = "30px"
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    let node =document.createTextNode(nameValue)
    let node2 = document.createTextNode(textValue)  
    let node3 = document.createTextNode(hourString)
    div.appendChild(node)
    div2.appendChild(node2)
    div3.appendChild(node3)
    let element = document.getElementById("comment-section");
    element.appendChild(div)
    element.appendChild(div2)
    element.appendChild(div3)
}
