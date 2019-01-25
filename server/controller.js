
module.exports = {
    getList: (request, response, next) => {
        const dbInstance = request.app.get('db')
        

        dbInstance.get_inventory().then(
            ((inventory) => {response.status(200).send(inventory)})

        )
    }
    }

    // getAll: function (request, response, next){
    //     const dbInstance = request.app.get('db')

    //     dbInstance.read_products().then(
    //         (products => response.status(200).send(products))
            
    //     )
    // }

