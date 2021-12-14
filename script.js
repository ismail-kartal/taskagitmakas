let pc1;
let pc2;
let sonuc;

function zarat() {

    pc1 = Math.ceil((Math.random() * 100));
    pc2 = Math.ceil((Math.random() * 100)); //pc1 ve pc2 değişkenlerimize 0-100 arası bir değer verdik

    console.log(pc1);
    console.log(pc2);


    //gelen random değere göre 3 ihtimalden birisi olacak şekilde değer atanmasını sağladık.
    switch (true) {
        case pc1 > 0 && pc1 <= 33:
            pc1 = "tas";
            break;
        case pc1 > 33 && pc1 <= 66:
            pc1 = "kagıt";
            break;
        case pc1 > 66 && pc1 <= 100:
            pc1 = "makas";
            break;
    }
    console.log(pc1);
    //gelen random değere göre 3 ihtimalden birisi olacak şekilde değer atanmasını sağladık.
    switch (true) {
        case pc2 > 0 && pc2 <= 33:
            pc2 = "tas";
            break;
        case pc2 > 33 && pc2 <= 66:
            pc2 = "kagıt";
            break;
        case pc2 > 66 && pc2 <= 100:
            pc2 = "makas";
            break;
    }
    console.log(pc2);


    //pc1 ve pc2 değerlerini atanan ihtimallere göre karşılaştırdık
    //pc1 = taş ihtimalleri
    if (pc1 === "tas" && pc2 === "tas") {
        sonuc = "berabere";
        console.log("berabere");
    } else if (pc1 === "tas" && pc2 === "kagıt") {
        sonuc = "kazanan pc2"
        console.log("kazanan pc2");
    } else if (pc1 === "tas" && pc2 === "makas") {
        sonuc = "kazanan pc1";
        console.log("kazanan pc1");
    }

    //pc1 = kagıt ihtimalleri
    if (pc1 === "kagıt" && pc2 === "tas") {
        sonuc = "kazanan pc1";
        console.log("kazanan pc1");
    } else if (pc1 === "kagıt" && pc2 === "kagıt") {
        sonuc = "berabere";
        console.log("berabere");
    } else if (pc1 === "kagıt" && pc2 === "makas") {
        sonuc = "kazanan pc2";
        console.log("kazanan pc2");
    }

    //pc1 = makas ihtimalleri
    if (pc1 === "makas" && pc2 === "tas") {
        sonuc = "kazanan pc2";
        console.log("kazanan pc2");
    } else if (pc1 === "makas" && pc2 === "kagıt") {
        sonuc = "kazanan pc1";
        console.log("kazanan pc1");
    } else if (pc1 === "makas" && pc2 === "makas") {
        sonuc = "berabere";
        console.log("berabere");
    }
    //tüm ihtimalleri yazmış olduk

    document.getElementById("idSol").innerHTML = pc1;
    document.getElementById("idSag").innerHTML = pc2;
    document.getElementById("idSonuc").innerHTML = sonuc;
}