function ejercicio1() {
    let sumaParciales=0;
    
    for (let i = 0; i < 5; i++) {
        
        if(i<3){
             parciales = Number(prompt("Ingrese la nota de los 3 parciales"));
        }else if(i==3){
             parciales = Number(prompt("Ingrese la nota del Examen Final"));
        }else if(i==4){
            parciales = Number(prompt("Ingrese la nota del Trabajo Final"));
        }
        let condicion1= (parciales < 0);
        let condicion2 = (parciales > 5);
        let condicion3 = isNaN(parciales);
        if ((condicion1 || condicion2 || condicion3)==true) {
            alert("El dato que ingreso no es correcto");
            i--;
        }else if(i<3){
            sumaParciales=sumaParciales+parciales;
        }else if(i==3){
            sumaParciales=0.55/3*sumaParciales+0.3*parciales;
        }else if(i==4){
            sumaParciales=sumaParciales+0.15*parciales;
        }

    }
    
    document.write(`La Nota Final es ${sumaParciales.toFixed(2)}`);

}

function ejercicio2(){
   let numero = NaN;
  let  azar= 50*Math.random().toFixed(1);
    alert(azar)
   for (let i = 0; i < 10; i++) {
    numero = Number(prompt("Ingrese el numero"));
     let diferencia =Math.abs(numero-azar);
     let condicion1= (numero < 0);
     let condicion2 = (numero > 50);
     let condicion3 = isNaN(numero);
       if ((condicion1 || condicion2 || condicion3)==true) {
           i--
       }else if(diferencia==0){
           alert("Ha acertado")
        i=10;
       }else if(diferencia<5){
        alert("Usted está muy cerca")
       }else if(diferencia<12){
        alert("Usted está cerca")
       }else{
           alert("Usted esta lejos")
       }
 
   }
}

function ejercicio3(){
    let x = Number(prompt("Ingrese la cantidad de numeros que va a evaluar"));
    let par=0;
    let impar = 0;
    for (let i = 0; i  < x; i++) {
        numero = Number(prompt("Ingrese los numeros a evaluar"))
        let condicion3 = isNaN(numero);
        if(condicion3==true){
            i--
        }else if(numero%2==0){
            par++
        }else{
            impar++
        }
        total =par+impar;

    }

    par = par*100/total;
    impar = impar*100/total;

    alert(`El porcentaje de numeros pares es ${par}%`);
    alert(`El porcentaje de numeros impares es ${impar}%`)
}

function ejercicio4(){
   
    do {
        numero= Number(prompt("1, para mostrar numeros de 1 a 100; 2, para 101 a 200"));
        } while((isNaN(numero)==true) || (numero<1)||(numero>2))
        // alert(isNaN(numero))
    
    switch (numero) {
        case 1:
            for (let i = 1; i <= 100; i++) {
                document.write(i+" ")                
            }
            break;
        case 2:
            for (let i = 101; i < 201; i++) {
                document.write(i+" ")                
            }
            break;
        default:
            break;
    }
}

function ejercicio5(){
{
       frase=prompt("Ingrese una frase"); 
            var    frasecontinua=""
            for (let i = 0; i < frase.length; i++) {
                if(frase.charAt(i)!=" ")
                frasecontinua += frase.charAt(i);
            }
            frasecontinua = frasecontinua.toLowerCase()
            frase= ""
            
            for (let i = frasecontinua.length; i >=0; i--) {
                frase += frasecontinua.charAt(i)
            }
        
            if (frasecontinua==frase){
                alert("La frase es palindroma")
            } else {
                alert("La frase no es palindroma")
            }
        }

}

function ejercicio6(){
    let nombres = [];
    let contador =0;
    let aux = [];
    for (let i = 0; i < 1; i++) {
        x= ((prompt(`Ingrese los nombres a ordenar (espacio " " para terminar)`))); 
        if ((x!=" ")) {
                x=x.toString()
                if (contador ==0) {
                    nombres[0]=x.toLowerCase();
                    i--
                    contador++
                }else{
                    
                    aux=[...nombres];
                    nombres[contador]=x.toLowerCase();
                    for (let j = contador-1; j >=0; j--) {
                        if (nombres[contador]==nombres[j]) {
                           nombres=aux;
                           alert("El nombre ya ha sido ingresado")
                           i--
                           j=0;
                        }else{
                            i--
                        }               
                    }
                    contador++;
                
                }
      

        }else{
            i=1
        }

        
    }
    if (nombres[0]!=" ") {
        document.write(`Estos fueron los nombres ingresados <\br> ${nombres.sort()}`)
    }

}

function ejercicio7(){
    frase=prompt("Ingrese una frase"); 

        // Esta funcion invierte las letras de cada palabra en una frase
        
        var  contador = 0
        var j=0
        var fraseinvertida=""
        var aux=""
    
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i)==" ") {
            contador++
        }
    }

        

        for (let i = 0; i < frase.length; i++) {
            // console.log(i)
 
            if (frase.charAt(i)!=" "){
                j=i
                while ((frase.charAt(j) != " ")&& (j<frase.length)){
                    j=j+1
                }
                // aux2=i
                for (let k = j-1; k >= i; k--) {
                    // console.log(k)
                    aux+= frase.charAt(k) 
                    // fraseinvertida.charAt(aux2)=frase.charAt(k)
                    // aux2++                
                }
                
                fraseinvertida+=aux+" " 
                aux=""
                i=j
                // contador= contador+1
                // console.log(j)
            }
    }

    let cLetras = Math.abs(contador-frase.length);
    // console.log(fraseinvertida)  
    document.write(`Tu frase al revés es: ${fraseinvertida} <br>`);
    document.write(`Tiene ${cLetras} letras y ${contador} espacios`)

        
    
}