//Bölme işlemine farklı bir bakış açısı
function division() {

    var bolunen = document.getElementById("bolunen").value;
    const bolen = document.getElementById("bolen").value;
    const text = document.getElementById("sonuc");
    text.value = "";

    var counter = 0;
    var fark = 0

    while(true){
        fark = bolunen - bolen;
        if(fark < 0){
            break
        }
        text.value += bolunen + " - " + bolen + " = " + fark;
        ++counter;
        text.value += "\r\n" + "sayac: " + counter + "\r\n";
        bolunen = fark;
    }

    text.value += "\r\n" + "bolum: " + counter;
    text.value += "\r\n" + "kalan: " + bolunen;

}