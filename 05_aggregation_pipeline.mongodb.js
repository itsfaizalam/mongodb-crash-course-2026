use("ecommerce");

// db.sales.insertMany([
// { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

/* 
What is an aggregation pipeline?
Think of it like a factory line:
Each stage takes input (your data)
Performs some operation (like filtering, sorting, grouping)
Sends the result to the next stage
Example structure:
------------------ */


// db.sales.aggregate([
//     {/* Stage 1 */},
//     {/* Stage 2 */},
//     {/* Stage 3 */}
// ]);



/* Aggregation Pipeline Example 1: $match : Filter documents
Let’s get only the sales where category is "Fruit" :

And

Aggregation Pipeline Example 2: $project : Select specific fields
Let’s display only item and price , and hide _id :
-------------------------------------------------- */
/*
db.sales.aggregate([
  {
    $match: {
      category: "Fruit"
    }
  },
  {
    $project: {
      _id: 0,
      item: 1,
      quantity: 1
    }
  }
]);
*/

/* Aggregation Pipeline Example 3: $group : Group and calculate totals
Let’s calculate total sales (price × quantity) for each category: 
---------------------------------------------------------------*/

/* db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]); */



// tutorial source: https://www.youtube.com/watch?v=M1dKYQ7GsTg&t=1444s
// study material source: https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/YouTube/MongoDB%20Handbook.pdf