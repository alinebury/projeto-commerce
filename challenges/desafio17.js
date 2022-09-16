db.resumoprodutos.insertOne({ franquia: "McDonalds", totalProdutos: 5 });

db.resumoprodutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });