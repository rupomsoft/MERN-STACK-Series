db.products.aggregate([
    {$group:{_id:"$salary"}}
])


