// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

console.log("//////////////// Opdracht 1a ////////////////")

inventory.map((tvType) => {
    console.log(tvType.type);
});

console.log("//////////////// Opdracht 1b ////////////////")

const soldOutTvs = inventory.filter((soldOutTv) => {
    return soldOutTv.sold < soldOutTv.originalStock;
});
console.log(soldOutTvs);

console.log("//////////////// Opdracht 1c ////////////////")

const ambiLightFinder = inventory.filter((ambiLightFind) => {
    return ambiLightFind.options.ambiLight === true;
})

console.log(ambiLightFinder);

console.log("//////////////// Opdracht 1d ////////////////")

const tvLowToHigh = inventory.sort((a, b) => {
    return a.price - b.price;
})

console.log(tvLowToHigh);


console.log("//////////////// Opdracht 2a ////////////////")

let soldTVs = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTVs = (soldTVs + inventory[i].sold);
}

console.log(soldTVs)

console.log("//////////////// Opdracht 2b ////////////////")

const numberOfSoldTvs = document.getElementById("SoldTvs");
numberOfSoldTvs.textContent = soldTVs

console.log("//////////////// Opdracht 2c ////////////////")

let boughtInTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    boughtInTvs = (boughtInTvs + inventory[i].originalStock);
}
console.log(boughtInTvs);

console.log("//////////////// Opdracht 2d ////////////////");

const numberOfBoughtInTvs = document.getElementById("boughtInTvs");
numberOfBoughtInTvs.textContent = boughtInTvs

console.log("//////////////// Opdracht 2e ////////////////");

const inStock = boughtInTvs - soldTVs;
const numberOfTvInStock = document.getElementById("stockTvs");
numberOfTvInStock.textContent = inStock;


console.log("//////////////// Opdracht 3a ////////////////");

const brandsList = inventory.map((brand) => {
    return " " + brand.brand
});
console.log(brandsList)

const brandsInStore = document.getElementById("brandList");
brandsInStore.textContent = brandsList;


console.log("//////////////// Opdracht 3b ////////////////");

function brandNames(array) {
    let outcome = array.map((brand) => {
        return brand.brand
    })
    return outcome
}

const brands = brandNames(inventory);
console.log(brands);


console.log("//////////////// Opdracht 4a ////////////////");

function nameString(array, indexnumber) {
    let name = array.map((id) => {
        return id.brand + " " + id.type + " - " + id.name
    })
    return name[indexnumber]
}

const fullName = nameString(inventory, 1);
console.log(fullName);

console.log("//////////////// Opdracht 4b ////////////////");

function priceMaker (array, indexnumber) {
    let price = array.map((id) => {
        return "€" + id.price + ",-"
    })
    return price[indexnumber]
}

const price = priceMaker(inventory, 1);
console.log (price);


console.log("//////////////// Opdracht 4c ////////////////");

function sizes (array, indexnumber) {
    let size = array.map((id) => {
        return id.availableSizes + " (" + (2.53 * id.availableSizes) + "cm)"
    })
    return size[indexnumber]
}

const size = sizes(inventory, 3);
console.log (size);

console.log("//////////////// Opdracht 4d ////////////////");

