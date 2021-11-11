//CRUD a la API Goodreads
//https://goodreads-devf-aaron.herokuapp.com/api/v1/

const request = require("request");
const ENDOPINT = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";

const getAuthorList = () => {
    request(ENDOPINT, (error, response, body) => {
        if (response.statusCode == 200) {
            let listAuthors = JSON.parse(body);
            console.log(listAuthors);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//getAuthorList();

const getAuthor = (id) => {

    request.get(ENDOPINT + id + '/', (error, response, body) => {
        if (response.statusCode == 200) {
            let author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })

}

//getAuthor(14566);

const newAuthor = (author) => {
    const conf = {
        url: ENDOPINT,
        form: author
    }
    request.post(conf, (error, response, body) => {
        if (response.statusCode == 201) {
            let author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//newAuthor(author2);

const updateAuthor = (id, author) => {
    const conf = {
        url: ENDOPINT + id + '/',
        form: author
    }
    request.put(conf, (error, response, body) => {
        if (response.statusCode == 200) {
            let author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//updateAuthor(14689, author2);

const partialUpdateAuthor = (id, data) => {
    const conf = {
        url: ENDOPINT + id + '/',
        form: data
    }
    request.patch(conf, (error, response, body) => {
        if (response.statusCode == 200) {
            let author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//partialUpdateAuthor(14689, author2Data);

const deleteAuthor = (id) => {
    request.delete(ENDOPINT + id + '/', (error, response, body) => {
        if (response.statusCode == 204) {
            console.log("Se elimino el usuario correctamente");
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//deleteAuthor(14689);

module.exports = {
    getAuthorList,
    getAuthor,
    newAuthor,
    updateAuthor,
    partialUpdateAuthor,
    deleteAuthor
};
