db.products.aggregate([
    {$group:{_id:0,max:{$max:"$salary"}}} 
])