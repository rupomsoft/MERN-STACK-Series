db.products.find({name:{$regex:/Ra/}})

db.products.aggregate([
    {$match:{name:{$regex:/Ra/}}}   
])
