db.products.find({}).count('total')
db.products.aggregate([{$count:"total"}])