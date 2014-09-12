
window.onload = function(){
			
	divElemento("jugada_humanoImg").addEventListener("change", function(e)
	{
		if(this.value >= 1 && this.value <= 5)
		{
			var extension = ".png";
			if(this.value == 6)
			{
				extension = ".gif";
			}
			console.log(this.value);
			divElemento("imagenPrueba").src = "img/img_" + this.value + extension;	
			//divElemento("imagenPrueba2").src = "img/img_" + this.value + extension;	
		}
	});

	function divElemento(id){
		return document.getElementById(id);
	}

	//Declarada...
	var elementosImg = [1, 2, 3, 4, 5];
	var puntuaImg = [0 , 0]; //Puntuaciones Juego, HUMANO, PC...
	var nomDivImg = function(id){
		return document.getElementById(id);
	}
	nomDivImg("btnjuegaImg").addEventListener("click", function(e){
		jugarImg();
	});
	//Expresada...
	function jugarImg(){
		var humanoImg = Number(nomDivImg("jugada_humanoImg").value);
		var pc = Math.floor((Math.random() * 5) + 1);
		//(alert("Humano: " + humano + " pc: " + pc);
		var txtImg = "";
		//alert("La jugada del pc es: " + elementos[pc - 1]);
		//alert("Humano: " + elementos[nomDiv("jugada_humano").value - 1] + " PC " + elementos[pc - 1]);
		juego_user_pcImg(humanoImg, pc, function(ganaImg, mensajeImg){
			//Hay un empate...
			if(ganaImg === 0){
				txtImg = "Hubo un empate entre: " + elementosImg[humanoImg - 1] + " y " + elementosImg[pcImg - 1];
			}
			else{
				if(ganaImg === humanoImg){
					txtImg = "Gana el Humano";
					puntuaImg[0]++;
					nomDivImg("pun_1Img").innerHTML = puntuaImg[0];
				}
				else{
					txtImg = "Gana el ROBOT";
					puntuaImg[1]++;
					nomDivImg("pun_2Img").innerHTML = puntuaImg[1];	
				}
				txtImg += " Debido a que: " + mensajeImg;
			}
			nomDivImg("resultadoImg").innerHTML = txtImg;
		});
	}

	function juego_user_pcImg(jugador_1Img, jugador_2Img, callback){	
	
		var jugadasImg = [ {"mov" : [3,2], "ganaImg" : 3, "mensajeImg" : "Las tijeras cortan el papel"}, 
						   {"mov" : [2,1], "ganaImg" : 2, "mensajeImg" : "El papel cubre a la piedra"}, 
						   {"mov" : [1,4], "ganaImg" : 1, "mensajeImg" : "La piedra aplasta al lagarto"}, 
						   {"mov" : [4,5], "ganaImg" : 4, "mensajeImg" : "El lagarto envenena a Spock"},
						   {"mov" : [5,3], "ganaImg" : 5, "mensajeImg" : "Spock destroza las tijeras"},
						   {"mov" : [3,4], "ganaImg" : 3, "mensajeImg" : "Las tijeras decapitan al lagarto"},
						   {"mov" : [4,2], "ganaImg" : 4, "mensajeImg" : "El lagarto se come el papel"},
						   {"mov" : [2,5], "ganaImg" : 2, "mensajeImg" : "El papel refuta a Spock"},
						   {"mov" : [5,1], "ganaImg" : 5, "mensajeImg" : "Spock vaporiza la piedra"},
						   {"mov" : [1,3], "ganaImg" : 5, "mensajeImg" : "Piedra aplasta las tijeras"}
					   	];
		var ganaImg = 0; //Empate...
		var mensajeImg = "";
		//alert(jugador_1 + " Y " + jugador_2);
		if(jugador_1Img != jugador_2Img){
			for(var i in jugadasImg){
				if((jugadasImg[i].mov[0] === jugador_1Img && jugadasImg[i].mov[1] === jugador_2Img) || (jugadasImg[i].mov[0] === jugador_2Img && jugadasImg[i].mov[1] === jugador_1Img)){				
					ganaImg = jugadasImg[i].ganaImg;
					mensajeImg = jugadasImg[i].mensajeImg;
					break;
				}
			}
		}
		callback(ganaImg, mensajeImg);
	}
}