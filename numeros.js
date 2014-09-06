var Numeros = 50;
function Pares(){
	document.write("PARES = ");
		for (var i = 1; i <= Numeros; i++) {
			if(i%2==0){
				document.write(i+" , ");
			}
		}
}
function Impares(){
	document.write("<br>IMPARES = ");
		for (var i = 1; i <=Numeros; i++) {
			if(i%2!=0){
				document.write(i+" , ");
			}
		}
}
function Primos(){

	document.write("<br>PRIMOS = ");
	var c =0;
	for (var i = 1; i <= Numeros; i++) {
		c=0;
		for (var j = 1; j <= Numeros; j++) {
			if(i%j==0){
				c++;
			}
		}
		if(c==2){
			document.write(i+" , ");
		}	
	}
}
function Imprimir(){
	document.write("Numeros ingresados [ "+Numeros+" ] <br><br>");
	Pares();
	Impares();
	Primos();
}