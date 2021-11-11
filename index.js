const crudGoodReads = require("./crud");

// crudGoodReads = {
//     getAuthorList,
//     getAuthor,
//     newAuthor,
//     updateAuthor,
//     partialUpdateAuthor,
//     deleteAuthor
// };

const author = {
    name: "Salvador",
    last_name: "Gonzalez",
    nacionalidad: "MX",
    biography: "brawl stars",
    gender: "F",
    age: 25,
    is_alive: true
}

const author2 = {
    name: "Silvia",
    last_name: "Herrera",
    nacionalidad: "MX",
    biography: "brawl stars",
    gender: "F",
    age: 20,
    is_alive: true
}

const author2Data = {
    age: 28
}

//crudGoodReads.getAuthorList();
//crudGoodReads.newAuthor(author);
//crudGoodReads.deleteAuthor(14691);
crudGoodReads.getAuthor(14691);