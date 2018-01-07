document.getElementById('wyslij').addEventListener('click', function () {
    var inputZakupy = document.getElementById('produkt').value;
    var inputIlosc = document.getElementById('ilosc').value;
    var inputRodzaj = document.getElementById('wybor').value;
    var lista = document.querySelector('ol');


    var stworzElementListy = document.createElement('li');
    stworzElementListy.setAttribute('class', 'liclass');
    var btn1 = document.createElement('button');
    var textBtn1 = document.createTextNode('X');
    btn1.appendChild(textBtn1);
    btn1.setAttribute('class', 'btnclass');

    stworzElementListy.innerText = inputZakupy + ", " + "ilość" + " :" + inputIlosc + " " + inputRodzaj;
    stworzElementListy.appendChild(btn1);

    lista.appendChild(stworzElementListy);
    

    var pokazIlosc = document.getElementById('pokaz');
    var olNumer = document.querySelector('ol');

    pokazIlosc.value = olNumer.childNodes.length;


//remove one element list
    $(document).ready(function () {
        $('.btnclass').on('click', function () {
            $(this).parent().remove();
             pokazIlosc.value = olNumer.childNodes.length

        })
    
    })


})

//remove all list

$(document).ready(function(){
    $("#usun").click(function(){
        $("li").remove();
        $('#pokaz').val('');
    });
});