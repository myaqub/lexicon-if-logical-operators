let price =55;

let vat = price*12/100;

let delivery =40;
let  total = price+vat;

const allergy= "free";

let payment="Swish visa and master";

const status= "Not available" ;

const tracking="not available";


let profession;

let  age=window.prompt("Enter your age group");

//let myid=window.prompt(" Show you ID ");

let prohibted=document.getElementById("prohib");


if (age.trim() === "") {

    alert(" field is emty") ;
    prohibted.textContent=" field is empty ";
}

if(  age>=18 && age<=22) {

    alert(" you are just allowed to buy 1 cigerat ") ;


    prohibted.textContent=" you are just allowed to buy 1 cigerat ";


}
if (age>22) {

   alert("welcome you can order any time") ;

   prohibted.textContent=" welcome ";
}

if (age>0 && age<18){

alert(" You are Under the age");
prohibted.textContent=" you do not allowed to buy ";

}

else{

    alert(" fresh page");
    prohibted.textContent=" unkown error ";
}

    



  



