function areatriangulo(){
    let altura=document.getElementById("altura").value;
    let base=document.getElementById("base").value;
    area=(base*altura)/2;
    let msg="El area de un triangulo es:"+area+"";
    document.getElementById("resultado").innerHTML=msg;
}

function areacirculo(){
    let radio=document.getElementById("radio").value;
    var pi=Math.PI;
    area=pi*Math.pow(radio,2);
    let msg="El area de un circulo es: "+area.toFixed(2)+""
    document.getElementById("resultado").innerHTML=msg;

}

function par_impar(){
    num1=document.getElementById('n1').value;
    
    console.log(num1);
    if (num1.length>0 &&!isNaN(num1)) {
        if (num1%2==0) {
            document.getElementById("resultado").innerHTML="Respuesta: Es Par";
            
        } else {
            document.getElementById("resultado").innerHTML="Respuesta: Es Impar";
        }
    } else {
        alert("ingresen un Número")
        document.getElementById("n1").focus();
    }
    
}

function CalECuadratica(){

    let a=document.getElementById("variableA").value;
    let b=document.getElementById("variableB").value;
    let c=document.getElementById("variableC").value;

    
    if (a || b || c.length==null &&!isNaN(a,b,c)) {
        a || b || c==0;
        
        let sol1=(((-b)-(Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
        let msg1="= "+sol1.toFixed(2)+"";
        document.getElementById("R1").innerHTML=msg1;
        let sol2=(((-b)+(Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
        let msg2="= "+sol2.toFixed(2)+"";
        document.getElementById("R2").innerHTML=msg2;
    } else {
        let sol1=(((-b)-(Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
        let msg1="= "+sol1.toFixed(2)+"";
        document.getElementById("R1").innerHTML=msg1;
        let sol2=(((-b)+(Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
        let msg2="= "+sol2.toFixed(2)+"";
        document.getElementById("R2").innerHTML=msg2;
    }
        
}



function Promedio_Notas(){
     n1=document.getElementById("num1").value;
     n2=document.getElementById("num2").value;
     n3=document.getElementById("num3").value;
     n4=document.getElementById("num4").value;
     n5=document.getElementById("num5").value;
     n6=document.getElementById("num6").value;
     n7=document.getElementById("num7").value;
     n8=document.getElementById("num8").value;
     n9=document.getElementById("num9").value;
     n10=document.getElementById("num10").value;

    ProN=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5)
    +parseFloat(n6)+parseFloat(n7)+parseFloat(n8)+parseFloat(n9)+parseFloat(n10))/10;
    msg="El Promedio de las 10 notas es: "+ProN+"";
    document.getElementById("resultado").innerHTML=msg;

}