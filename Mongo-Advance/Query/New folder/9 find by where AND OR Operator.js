db.products.find(
{
 $and:[
  {salary:{$gt:4000}},
  {roll:{$gt:125}}
 ]
}
)


db.products.find(
{
 $or:[
  {salary:{$gt:4000}},
  {roll:{$gt:125}}
 ]
}
)


db.products.aggregate([
    {$match:{
     $and:[
          {salary:{$gt:4000}},
          {roll:{$gt:125}}
      ]   
    }}
])


db.products.aggregate([
    {$match:{
     $or:[
          {salary:{$gt:4000}},
          {roll:{$gt:125}}
      ]   
    }}
])