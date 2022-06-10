db.products.aggregate([
    {$group:{_id:0,first:{$first:{name:"$name",roll:"$roll",city:"$city"}}}} 
])
  

db.products.aggregate([
    {$group:{_id:0,last:{$last:{name:"$name",roll:"$roll",city:"$city"}}}} 
])
   
