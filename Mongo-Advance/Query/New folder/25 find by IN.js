db.products.aggregate([

    {$match:{name:{$in:['Rabbil','Rain']}}}
    
])



db.products.find({name:{$in:['Rabbil','Rain']}})