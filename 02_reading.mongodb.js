use ('ecommerce');

// Filter by Field
//--------------
// db.products.find({"name": "Wireless Mouse"})
// db.products.find({"category": "Electronics"}) 


// Using Comparison Operators
//---------------------------
// db.products.find({ price: { $gt: 1000 } }) // greater than 1000
// db.products.find({ price: { $gte: 1000, $lte: 50000 } }) // greater than equal to or less than equal to

// Logical Operators
//------------------
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Projection (Select Specific Fields)
//------------------------------------
// db.products.find({}, { name: 1, price: 1, _id: 0 })

// Sorting and Limiting (use for pagination)
//---------------------
// db.products.find().sort({ price: -1 }).limit(2)
db.products.find().sort({ price: -1 }).skip(1).limit(1)




// tutorial source: https://www.youtube.com/watch?v=M1dKYQ7GsTg&t=1444s
// study material source: https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/YouTube/MongoDB%20Handbook.pdf