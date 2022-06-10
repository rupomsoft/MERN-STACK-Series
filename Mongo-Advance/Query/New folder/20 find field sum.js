db.products.aggregate([
    {$group:{_id:0,sum:{$sum:"$salary"}}} 
])
   