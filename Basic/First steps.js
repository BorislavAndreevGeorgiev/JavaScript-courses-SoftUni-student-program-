function materials(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let chemicals = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let chemicalsPrice = chemicals * 1.20;

    let materials = pensPrice + markersPrice + chemicalsPrice;
    let finalPrice = materials - (materials * (discount / 100))
    console.log(finalPrice)
}

materials(["2 ", "3 ", "4 ", "25 "])
