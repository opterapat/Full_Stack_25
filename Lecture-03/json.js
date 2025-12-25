const bookOBJ = {
    title : 'Becoming',
    author : 'Michelle Obama',
    isAvailable : false
};

const bookJSON = JSON.stringify(bookOBJ);
console.log(bookJSON);
console.log(typeof bookJSON);

const parsedbook = JSON.parse(bookJSON);
console.log(parsedbook);
console.log(parsedbook.title);
console.log(typeof parsedbook);