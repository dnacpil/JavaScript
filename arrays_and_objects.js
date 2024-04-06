/* Create an array of objects representing movies. 
Each movie object should have properties like title, director, and year. 
Write a function called findOldestMovie that takes an array of movie objects as a parameter and returns the title of the oldest movie. */

let movies = [
    {
        title: "Barbie",
        director: "Greta Gerwig",
        year: 2023
    },
    {
        title: "Mother's Instinct",
        director: "Benoît Delhomme",
        year: 2024
    },
    {
        title: "Dune",
        director: "	Denis Villeneuve",
        year: 2021
    }
];

function findOldestMovie(movies) {
    movies.sort(function(a, b) {
        return a.year - b.year;
    });
    return movies[0].title; 
}
console.log(findOldestMovie(movies));

