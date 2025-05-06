const btn = document.getElementById('btn-convertir');

btn.addEventListener('click', function(){
    let temp = document.getElementById('temperatura').value;
    let valor = document.getElementById('valor').value;

    if(valor == 1){
        temp = Math.round(temp * 9/5) + 32, 2; //Fahrenheit
        document.getElementById('resultado').textContent = "La temperatura en Fahrenheit es: "+temp+" F°";

    }else{
        temp = Match.round((temp - 32) * 5/9, 2); //Celcius
        document.getElementById('resultado').textContent = "La temperatura en Celcius es: "+temp+" C°";
        temp = 0;
    }
});

0