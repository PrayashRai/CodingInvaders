let displayBooks = [
    {
        Author: "Bill Gates",
        Title: "The Road Ahead",
        readingStatus: true,
    },
    {
        Author: "Steve Jobs",
        Title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        Author: "Suzanne Collins",
        Title: " Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
]
for(let i = 0; i < displayBooks.length; i++){
    if(displayBooks[i].readingStatus === true){
console.log("I already read " + displayBooks[i].Title + ' by ' + displayBooks[i]['Author'].toUpperCase())
    }else{
        console.log("i need to read" + displayBooks[i].Title + ' by ' + displayBooks[i].Author.toUpperCase())
    }
}