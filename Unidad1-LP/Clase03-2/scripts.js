function par_impar(){
    num1=document.getElementById('n1').value;
    
    console.log(num1);
    if (num1.length>0 &&!isNaN(num1)) {
        if (num1%2==0) {
            document.getElementById("rs").innerHTML="Respuesta: Es Par";
            
        } else {
            document.getElementById("rs").innerHTML="Respuesta: Es Impar";
        }
    } else {
        alert("ingresen un Número")
        document.getElementById("n1").focus();
    }
    
}
function Area_Circulo(){
    
    
    var pi =Math.PI;
    var rad=document.getElementById('n2').value;
    Area=pi*Math.pow(rad,2)
    let msg="El area de un circulo es: "+Area+" n2";
    console.log(Area);
    if (rad.length>0 &&!isNaN(rad)) {
        document.getElementById("rpta").innerHTML=msg;
    } else {
        alert("ingresen un Número")
        document.getElementById("n1").focus();
    }
}
function areatriangulo(){
    let altura=document.getElementById("altura").value;
    let base=document.getElementById("base").value;
    area=(base*altura)/2;
    let msg="El area de un triangulo es:"+area+"";
    document.getElementById("resultado").innerHTML=msg;
}
