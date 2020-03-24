//
function changeColorWhite(elemento){
    $(elemento).animate({
            color: "white"
        }, 1000, function(){
            changeColorYellow(elemento)
        }
    );
}

function changeColorYellow(elemento){
    $(elemento).animate({
            color: "yellow"
        }, 1000, function(){
            changeColorWhite(elemento)
        }
    );  
}



//Eventos de boton de boton
function changeBotonContent( elemento ){
   
        elemento.click(function(){
            startTimer(10, $('#timer'));
            $(this).text("Reiniciar");
            if($(this).text() === "Reiniciar"){
                elemento.click(function(){
                    location.reload();
                });
            }
        });  
}



//Temporizador
function startTimer(duration, display) {
    
    var timer = duration, minutes, seconds;
    
    var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        console.log(seconds);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html(minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(x);
            timer = duration;
            $( ".panel-tablero" ).hide( 
                "slide", { 
                direction: "left" 
            }, "slow" , function(){
                $(".panel-score").animate({
                    width : "100em"
                }, 2000, function(){
                    $(this).prepend('<h1 style="color:yellow; font-size:50px">Juego Terminado</h1>')
                    .css("text-align", "center");
                });
                
            });
            $(".time").hide( 
                "slide", { 
                direction: "left" 
            }, "slow" );

        }//final if
        
    }, 1000);
    
}

function contadorFunction( contador ){
    contador+=1;
    console.log( contador )
}


function setPunctuation(){
    
}

//main function
$(function(){

    var grid = [];
    var row = 7;    
    var col = 7;
    var n = 0;
    var image = [];
    var contador = 0;

//Colocar imagenes en el tablero

    for(var i = 0; i < 4; i++){
        n++;
        image[i] = "image/" + n + ".png";
    }

    
    for(var j = 0; j < row; j++){
        
        for(var k = 0; k < col; k++){
            
            $('.col-'+(j+1)).prepend("<img src=" 
                + image[Math.floor(Math.random() * 4)] 
                + ' height="95px" class="imagenes">')
                .sortable();       
        }
        
    }

    

    console.log(contador);
//Fin imagenes en el tablero
   
    //Animacion del titulo principal
        changeColorWhite($('.main-titulo'));
    //fin 

    //Configuraciones de boton
        changeBotonContent($('.btn-reinicio'));
    //Fin boton

    //Moviendo los elementos
        
    //fin
    

    //timer
        
    
    //Fin timer
        
    
})
