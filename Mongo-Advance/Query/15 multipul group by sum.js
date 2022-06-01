db.products.aggregate([
    {$group:{_id:{name:"$name",roll:"$roll"},sum:{$sum:"$salary"}}} 
   ])
   
   