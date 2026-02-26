use("ecommerce");

// Delete One
//-----------
// db.contacts.deleteOne({ name: "Alice" })

// Delete Many
//-----------
db.orders.deleteMany({ status: "Delivered" })




// tutorial source: https://www.youtube.com/watch?v=M1dKYQ7GsTg&t=1444s
// study material source: https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/YouTube/MongoDB%20Handbook.pdf