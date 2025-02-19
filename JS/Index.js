function CalcSub1() {
    let strvalor1 = document.getElementById("producto1").value;
    let strcant1 = document.getElementById("cantidad1").value;

    if (strvalor1 === "" || strcant1 === "") {


    } else {
        let a = parseInt(strvalor1);
        let b = parseInt(strcant1);
        let subtotal = a * b;
        document.getElementById("subtotal1").value = subtotal.toFixed(2);;
    }
}
function CalcSub2() {
    let strvalor1 = document.getElementById("producto2").value;
    let strcant1 = document.getElementById("cantidad2").value;

    if (strvalor1 === "" || strcant1 === "") {

    } else {
        let a = parseInt(strvalor1);
        let b = parseInt(strcant1);
        let subtotal = a * b;
        document.getElementById("subtotal2").value = subtotal.toFixed(2);;
    }
}
function CalcSub3() {
    let strvalor1 = document.getElementById("producto3").value;
    let strcant1 = document.getElementById("cantidad3").value;

    if (strvalor1 === "" || strcant1 === "") {

    } else {
        let a = parseInt(strvalor1);
        let b = parseInt(strcant1);
        let subtotal = a * b;
        document.getElementById("subtotal3").value = subtotal.toFixed(2);;
    }
}
function CalcSub4() {
    let strvalor1 = document.getElementById("producto4").value;
    let strcant1 = document.getElementById("cantidad4").value;

    if (strvalor1 === "" || strcant1 === "") {

            
    } else {
        let a = parseInt(strvalor1);
        let b = parseInt(strcant1);
        let subtotal = a * b;
        document.getElementById("subtotal4").value = subtotal.toFixed(2);;
    }
}
function CalcSub5() {
    let strvalor1 = document.getElementById("producto5").value;
    let strcant1 = document.getElementById("cantidad5").value;

    if (strvalor1 === "" || strcant1 === "") {

    } else {
        let a = parseInt(strvalor1);
        let b = parseInt(strcant1);
        let subtotal = a * b;
        document.getElementById("subtotal5").value = subtotal.toFixed(2);;
    }
}

function calcular(){
    
    let strSub1=document.getElementById("subtotal1").value;
    let strSub2=document.getElementById("subtotal2").value;
    let strSub3=document.getElementById("subtotal3").value;
    let strSub4=document.getElementById("subtotal4").value;
    let strSub5=document.getElementById("subtotal5").value;
    if (strSub1 === "" || strSub2 === "" || strSub3==="" || strSub4==="" || strSub5===""){
        swal.fire({
            title: "Despensa Familiar",
            text: "Los campos no deben estar vacios.",
            icon: "error",
            button: "Aceptar",
            dangerMode: true,
          });


    }else {
        let sub1=parseFloat(strSub1);
        let sub2=parseFloat(strSub2);
        let sub3=parseFloat(strSub3);
        let sub4=parseFloat(strSub4);
        let sub5=parseFloat(strSub5);
        let total=(sub1+sub2+sub3+sub4+sub5);
        if (total<1000){
            document.getElementById("Total").value = "No aplica desc Total. L. " + total.toFixed(2);
        }else if(total <5000){
            total=total*0.9;
            document.getElementById("Total").value = "Aplica 10% de desc Total. L. " + total.toFixed(2);
        }else if(total<9000){
            total=total*0.8;
            document.getElementById("Total").value = "Aplica 20% de desc Total. L. " + total.toFixed(2);
        }else if (total<13000){
            total=total*0.7;
            document.getElementById("Total").value = "Aplica 30% de desc Total. L. " + total.toFixed(2);
        }else if (total>=13000){
            total=total*0.6;
            document.getElementById("Total").value = "Aplica 40% de desc Total. L. " + total.toFixed(2);
        }


        
    }

}
function limpiar(){
    document.getElementById("producto1").value="";
    document.getElementById("cantidad1").value="";
    document.getElementById("subtotal1").value="";
    
    document.getElementById("producto2").value="";
    document.getElementById("cantidad2").value="";
    document.getElementById("subtotal2").value="";

    document.getElementById("producto3").value="";
    document.getElementById("cantidad3").value="";
    document.getElementById("subtotal3").value="";

    document.getElementById("producto4").value="";
    document.getElementById("cantidad4").value="";
    document.getElementById("subtotal4").value="";

    document.getElementById("producto5").value="";
    document.getElementById("cantidad5").value="";
    document.getElementById("subtotal5").value="";
    document.getElementById("Total").value="";

}