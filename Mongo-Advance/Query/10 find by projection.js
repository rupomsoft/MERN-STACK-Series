db.products.aggregate([
    {$project:{name:1,roll:1,class:1,_id:0}}
])

db.products.find({},{name:1,roll:1,class:1,_id:0})