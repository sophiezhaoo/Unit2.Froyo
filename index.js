const userInputString = prompt("Please enter a list of comma-separated froyo flavors:");

const flavors = userInputString.split(",");

function countFlavors(flavors) {
  const counts = {};
  for (let flavor of flavors) {
    counts[flavor] = (counts[flavor] || 0) + 1;
  }
  return counts;
}

const flavorCounts = countFlavors(flavors);

console.log("Flavor Counts:");
console.table(flavorCounts);
