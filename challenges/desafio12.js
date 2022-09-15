db.produtos.updateMany({
  nome: { $in: ["Big Mac", "Cheddar McMelt", "Extra Chicken"] } }, 
{
  $push: { ingredientes: "ketchup" },
});
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });