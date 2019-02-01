
module.exports = {
    getList: (request, response, next) => {
        const dbInstance = request.app.get('db')
       
        dbInstance.get_inventory().then(
            ((inventory) => {response.status(200).send(inventory)})

        )
    },

    addProduct: (request, response, next) => {
        console.log('does post work??')
        const dbInstance = request.app.get('db') //the difference of dbInstance and 'db'. 
        const {product_name, product_price, image_url} = request.body // how to i connect req.body to database or how do i pull info off database
        //how do i make a unique key for each value
       
        // dbInstance.create_inventory([product_name, product_price,image_url]).then(() => response.status(200).send(body)).catch( error => response.status(500).send('this did not work', error))
        

    }
    
    }



    // getAll: function (request, response, next){
    //     const dbInstance = request.app.get('db')

    //     dbInstance.read_products().then(
    //         (products => response.status(200).send(products))
            
    //     )
    // }

