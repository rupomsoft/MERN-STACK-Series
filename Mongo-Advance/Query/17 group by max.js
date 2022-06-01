db.products.aggregate([
    {$group:{_id:{name:"$name"},max:{$max:"$salary"}}} 
])
   
   