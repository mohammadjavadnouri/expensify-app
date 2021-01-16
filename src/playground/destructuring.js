/*
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-published" } = book.publisher;

console.log(publisherName);
*/

const item = ["Coffe (hot)", "$2.00", "$2.5", "2.75"];

const [type, cost1, cost2, cost3] = item;

console.log("A " + type + " costs " + cost3 + ".");
