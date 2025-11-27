
// VAT bij europese webshop
// BTW bij Belgische webshop

//Instelling
const regionNotation = 'btw'


//object
const product = {
    price: 25,
    name: 'Gameboy',
    [regionNotation]: 21
}

//const productKeys=['price', 'name']
const productKeys = Object.keys(product)

product.color = 'Red'
product.color = 'blue'
product[regionNotation] = 32

productKeys.length

const productMap = new Map()
productMap.set('price', 25)
productMap.set('name', 'Gameboy')
productMap.set('color', 'Red')
productMap.set('color', 'blue')
productMap.set(regionNotation, 20)

//voordeel makkelijker de lengte ophalen.
const productMapLength = productMap.size

console.log(product, productMap)

