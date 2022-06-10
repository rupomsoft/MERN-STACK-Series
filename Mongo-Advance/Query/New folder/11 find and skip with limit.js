

db.products.find({}).skip(0*3).limit(3)


db.products.aggregate([
    {$skip:0},
    {$limit:3}
 ])
