let input = prompt("Enter a list of books (titles separated by commas):");
let books = input.split(',');

let specificBooks = ['Harry Potter', 'The Little Prince', 'The Hobbit'];
let hasSpecificBooks = false;

for (let i = 0; i < specificBooks.length; i++) {
  if (books.includes(specificBooks[i])) {
    hasSpecificBooks = true;
    break;
  }
}

if (hasSpecificBooks) {
  books.unshift('A special gift — set of stickers');
}

console.log('Your items to buy:');
console.log(books.join('\n'));
