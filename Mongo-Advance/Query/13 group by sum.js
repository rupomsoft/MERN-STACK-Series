
db.products.aggregate([
    {$group:{_id:"$name",totalRows:{$sum:1}}} // Rows sum
])


db.products.aggregate([
    {$group:{_id:"$name",total:{$sum:"$roll"}}} // Group by sum of rows
])
   

db.products.aggregate([
    {$group:{_id:"$name",total:{$sum:"$salary"}}} // Group by sum of salary
])
   
     