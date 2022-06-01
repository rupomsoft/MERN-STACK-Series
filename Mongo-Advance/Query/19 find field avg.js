db.products.aggregate([
    {$group:{_id:0,avg:{$avg:"$salary"}}} 
])
   
   