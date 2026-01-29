// ASSIGNMENT 4: 
// Movie Streaming Platform
// You are working on a movie recommendation system.


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


    // 1. filter() only "Sci-Fi" movies
let scifi=movies.filter(e => {
    return e.genre=="Sci-Fi"
})
console.group("Sci-Fi : ",scifi)
    // 2. map() to return:
    //         "Inception (8.8)"
console.log(movies.map(e => {
     return e.title=="Inception" && e.rating==8.8? e: ""
}))

    // 3. reduce() to find average movie rating
console.log("Average rating : ",movies.reduce((acc,ele) => {
    if (typeof acc=='object' ){
        return acc.rating+ele.rating
    }else{
        return acc+ele.rating
    }
    return acc
})/movies.length)

    // 4. find() movie "Joker"
console.log(movies.find(e => e.title=="Joker"))
    // 5. findIndex() of "Avengers"
console.log(movies.findIndex(e => e.title=="Avengers"))
