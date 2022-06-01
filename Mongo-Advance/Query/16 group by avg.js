db.products.aggregate([
    {$group:{_id:{name:"$name"},avg:{$avg:"$salary"}}} 
])
   