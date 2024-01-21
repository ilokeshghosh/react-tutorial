import express from 'express'

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table',
            price: 200,
            image: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 2,
            name: 'chair',
            price: 100,
            image: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600'
        }, {
            id: 3,
            name: 'bench',
            price: 1000,
            image: 'https://images.pexels.com/photos/130987/pexels-photo-130987.jpeg?auto=compress&cs=tinysrgb&w=600'
        }, {
            id: 4,
            name: 'book',
            price: 230,
            image: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, {
            id: 5,
            name: 'cup',
            price: 400,
            image: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    if(req.query.search){
        const filteredProduct = products.filter(product=>product.name.includes(req.query.search));
        res.send(filteredProduct)
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})