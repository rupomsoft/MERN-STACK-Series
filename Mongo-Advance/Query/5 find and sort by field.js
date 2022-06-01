db.products.find({}).sort({salary:-1}) // Descending 
db.products.find({}).sort({salary:1}) // Asending 

db.products.aggregate([{$sort:{salary:1}}]) //Asending 
db.products.aggregate([{$sort:{salary:-1}}]) // Descending 