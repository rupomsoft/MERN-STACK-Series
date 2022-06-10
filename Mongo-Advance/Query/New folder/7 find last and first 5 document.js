db.products.find({}).sort({_id:-1}).limit(5)
db.products.find({}).sort({_id:1}).limit(5)

db.products.aggregate([
    {$sort:{_id:-1}},
    {$limit:5}
])
    
db.products.aggregate([
    {$sort:{_id:1}},
    {$limit:5}
])
    