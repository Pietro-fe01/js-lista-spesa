/* Consegna:
Data una lista della spesa, stampare 
sulla pagina (anche brutalmente, basta che
si vedano) 
gli elementi della lista individualmente 
con un ciclo while. */

const unorderedList = document.getElementById("unordered-list");
const shoppingList = [
    'Latte',
    'Pasta',
    'Biscotti',
    'Insalata',
    'Toast',
    'Nutella',
    'Burro',
    'Farina'
];

let i = 0;
while (i < shoppingList.length){
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    unorderedList.append(listItem);
    i++;
};
