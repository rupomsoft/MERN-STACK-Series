db.products.find({name:/Ra/})

db.products.aggregate([
    {$match:{name:/Ra/}}
])