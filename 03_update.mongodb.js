use("ecommerce");

// Update One
//-----------
// db.products.updateOne(
//     { name: "Wireless Mouse" },
//     { $set: { price:899 } }
// )

// Update Many
//-----------
// db.products.updateMany(
//     {category:"Electronics"},
//     {$inc: {stock:11}}  // inc = increase
// )

 
// Using $push to Add to Arrays
//-----------------------------
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "mouse" } }
)



// tutorial source: https://www.youtube.com/watch?v=M1dKYQ7GsTg&t=1444s
// study material source: https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/YouTube/MongoDB%20Handbook.pdf