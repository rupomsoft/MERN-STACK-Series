db.products.aggregate([{$limit:3}])
db.products.find({}).limit(2)