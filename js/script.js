const groceries = ["mela", "pera", "banana", "caffè", "bietola", "zucchero", "pane", "pasta: (no vermicelli)"];
console.log(groceries);
i= 0;
const HTMLelement = document.querySelector(".list");
while ( i < groceries.length) {
    let item = `<li>${groceries[i]}</li>`;
    HTMLelement.innerHTML += item;
    i++;
    console.log(item);
}

