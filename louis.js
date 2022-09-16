const human = {
    name: "Louis",
    age: 28,
    city: "Birmingham"
}

for (const key in human) {
  console.log(`${key}: ${human[key]}`);