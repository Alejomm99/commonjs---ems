type Movie = {
  id: number;
  title: string;
  year: Date;
};

type Callback = (movies: Movie[]) => void;

export function fetchData(callback: Callback) {
  const movies: Movie[] = [
    { id: 1, title: "The Shawshank Redemption", year: new Date(1994, 0, 1) },
    { id: 2, title: "The Godfather", year: new Date(1972, 0, 1) },
    { id: 3, title: "The Godfather: Part II", year: new Date(1974, 0, 1) },
    { id: 4, title: "The Dark Knight", year: new Date(2008, 0, 1) },
  ];
  setTimeout(() => {
    callback(movies);
  }, 3000);
}

fetchData((movies) => {
  console.table(movies);
});
