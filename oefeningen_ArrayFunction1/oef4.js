let wagens = [
    {
        kleur: "rood",
        merk: "Toyota",
        bouwjaar: 2020,
        prijs: 25000
    },
    {
        kleur: "zwart",
        merk: "BMW",
        bouwjaar: 2019,
        prijs: 45000
    },
    {
        kleur: "blauw",
        merk: "Volkswagen",
        bouwjaar: 2021,
        prijs: 30000
    }
];

function berekenTotaalPrijs() {
    return wagens.reduce((totaal, wagen) => totaal + wagen.prijs, 0);
}

console.log(berekenTotaalPrijs());


