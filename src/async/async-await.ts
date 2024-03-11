type Movie = {
  id: number;
  title: string;
  year: Date;
  rating: number;
  director: string;
  genre: string;
};

export function fetchMovies(where: (movie: Movie) => boolean) {
  return new Promise<Movie[]>((resolve, reject) => {
    setTimeout(() => {
      const movies: Movie[] = [
        {
          id: 1,
          title: "The Shawshank Redemption",
          year: new Date("1994"),
          rating: 9.3,
          director: "Frank Darabont",
          genre: "Drama",
        },
        {
          id: 2,
          title: "Pulp Fiction",
          year: new Date("1994"),
          rating: 8.9,
          director: "Quentin Tarantino",
          genre: "Crime, Drama",
        },
        {
          id: 3,
          title: "Fight Club",
          year: new Date("1999"),
          rating: 8.8,
          director: "David Fincher",
          genre: "Drama",
        },
        {
          id: 4,
          title: "Forrest Gump",
          year: new Date("1994"),
          rating: 8.8,
          director: "Robert Zemeckis",
          genre: "Drama, Romance",
        },
        {
          id: 5,
          title: "Inception",
          year: new Date("2010"),
          rating: 8.8,
          director: "Christopher Nolan",
          genre: "Action, Adventure, Sci-Fi",
        },
      ];
      const filteredMovies = movies.filter(where);
      if (filteredMovies.length > 0) {
        resolve(filteredMovies);
      } else {
        reject(`No movies found for the given filter`);
      }
    }, 3000);
  });
}

async function main() {
  try {
    const movies = await fetchMovies((movie) =>
      movie.title.toLowerCase().includes("e")
    );
    console.table(movies);
  } catch (error) {
    console.error(error);
  }
}

main();

//otra forma, utilizando IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const movies = await fetchMovies((movie) =>
      movie.director.toLowerCase().includes("taran")
    );
    console.table(movies);
  } catch (error) {
    console.error(error);
  }
})();
