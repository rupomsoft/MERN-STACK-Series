db.products.aggregate([
    {$match:{salary:{$gt:4000}}}
])

db.products.find({salary:{$gt:4000}})
    