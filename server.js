module.exports = () => {
    const data = {
        products: [],
    }
    
    for (let index = 1; index < 1000; index++) {
        data.products.push({
            id: index + 1,
            price: 23,
            title: `Camiseta ${index + 1}`
        })    
    }

    return data
}