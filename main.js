
var fila1 = ['Intermedia','Puesto de Marques','Colonia', '------']
var fila2 = ['Intermedia','Puesto de Marques','Colonia', '------']
var fila3 = ['Intermedia','Puesto de Marques','Colonia', '------']
var fila4 = ['Intermedia','Puesto de Marques','Colonia', '------']

function primerosCuadros(){
    var random1 = Math.floor(Math.random()*fila1.length);
    var random2 = Math.floor(Math.random()*fila2.length);
    var random3 = Math.floor(Math.random()*fila3.length);
    var random4 = Math.floor(Math.random()*fila4.length);
    
    if ((fila1[random1])!=(fila2[random2])&&(fila1[random1]!=fila3[random3])
    &&(fila1[random1]!=fila4[random4])){
        if ((fila2[random2])!=(fila3[random3])&&(fila2[random2]!=fila4[random4])){
            if ((fila3[random3])!=(fila4[random4])){
                document.getElementById('fila6').innerHTML=fila1[random1];
                document.getElementById('fila7').innerHTML=fila2[random2]; 
                document.getElementById('fila8').innerHTML=fila3[random3];
                document.getElementById('fila9').innerHTML=fila4[random4];                               
            }                          
        }
    }
}

var fila5 = ['Perchel','Tumbaya Pueblo','Tumbaya Grande','------']
var fila6 = ['Perchel','Tumbaya Pueblo','Tumbaya Grande','------']
var fila7 = ['Perchel','Tumbaya Pueblo','Tumbaya Grande','------']
var fila8 = ['Perchel','Tumbaya Pueblo','Tumbaya Grande','------']

function segundosCuadros(){
    var random5 = Math.floor(Math.random()*fila5.length);
    var random6 = Math.floor(Math.random()*fila6.length);
    var random7 = Math.floor(Math.random()*fila7.length);
    var random8 = Math.floor(Math.random()*fila8.length);
    
    if ((fila5[random5])!=(fila6[random6])&&(fila5[random5]!=fila7[random7])
    &&(fila5[random5]!=fila8[random8])){
        if ((fila6[random6])!=(fila7[random7])&&(fila6[random6]!=fila8[random8])){
            if ((fila7[random7])!=(fila8[random8])){
                document.getElementById('fila11').innerHTML=fila5[random5];
                document.getElementById('fila12').innerHTML=fila6[random6]; 
                document.getElementById('fila13').innerHTML=fila7[random7];
                document.getElementById('fila14').innerHTML=fila8[random8];                               
            }                          
        }
    }
}

var fila9 = ['Leon','Termas de Reyes','Carahunco','------']
var fila10 = ['Leon','Termas de Reyes','Carahunco','------']
var fila11 = ['Leon','Termas de Reyes','Carahunco','------']
var fila12 = ['Leon','Termas de Reyes','Carahunco','------']

function tercerosCuadros(){
    var random9 = Math.floor(Math.random()*fila9.length);
    var random10 = Math.floor(Math.random()*fila10.length);
    var random11 = Math.floor(Math.random()*fila11.length);
    var random12 = Math.floor(Math.random()*fila12.length);
    
    if ((fila9[random9])!=(fila10[random10])&&(fila9[random9]!=fila11[random11])
    &&(fila9[random9]!=fila12[random12])){
        if ((fila10[random10])!=(fila11[random11])&&(fila10[random10]!=fila12[random12])){
            if ((fila11[random11])!=(fila12[random12])){
                document.getElementById('fila16').innerHTML=fila9[random9];
                document.getElementById('fila17').innerHTML=fila10[random10]; 
                document.getElementById('fila18').innerHTML=fila11[random11];
                document.getElementById('fila19').innerHTML=fila12[random12];                               
            }                          
        }
    }
}

var fila13 = ['San Juancito','Manantiales','Sunchal','------']
var fila14 = ['San Juancito','Manantiales','Sunchal','------']
var fila15 = ['San Juancito','Manantiales','Sunchal','------']
var fila16 = ['San Juancito','Manantiales','Sunchal','------']

function cuartosCuadros(){
    var random13 = Math.floor(Math.random()*fila13.length);
    var random14 = Math.floor(Math.random()*fila14.length);
    var random15 = Math.floor(Math.random()*fila15.length);
    var random16 = Math.floor(Math.random()*fila16.length);
    
    if ((fila13[random13])!=(fila14[random14])&&(fila13[random13]!=fila15[random15])
    &&(fila13[random13]!=fila16[random16])){
        if ((fila14[random14])!=(fila15[random15])&&(fila14[random14]!=fila16[random16])){
            if ((fila15[random15])!=(fila16[random16])){
                document.getElementById('fila21').innerHTML=fila13[random13];
                document.getElementById('fila22').innerHTML=fila14[random14]; 
                document.getElementById('fila23').innerHTML=fila15[random15];
                document.getElementById('fila24').innerHTML=fila16[random16];                               
            }                          
        }
    }
}

function generate(){
    primerosCuadros();
    segundosCuadros(); 
    tercerosCuadros();
    cuartosCuadros();
}






