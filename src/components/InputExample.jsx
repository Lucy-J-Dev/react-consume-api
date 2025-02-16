import { useState } from "react";

const URL_API = "https://www.omdbapi.com/?apikey=e5372ba5&s=";

// Función para obtener peliculas según el texto enviado a buscar
const searchMovies = async (text) => {
  const response = await fetch(`${URL_API}${text}`);
  const movies = await response.json();
  return movies.Search;
};

const InputExample = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  // Función para manejar el cambio de estado en el texto a buscar proveniente del input
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // Función para manejar el evento submit del formulario.
  // Cuando se hace click en el botón de tipo submit dentro del formulario.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.length >= 3) {
      searchMovies(text).then((movies) => {
        setMovies(movies);
      });
    }
  };

  return (
    <>
      <h1>Consultar peliculas</h1>
      <p>
        En esta pagina puedes escribir el nombre de tu pelicula favorita y
        buscar su informacion
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre de la pelicula</label>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit">Consultar</button>
      </form>

      {movies.length > 0 && (
        <section>
          <h2>Lista de resultado de peliculas</h2>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>Tipo: {movie.Type}</p>
              <p>Año: {movie.Year}</p>
              <img
                src={movie.Poster}
                alt={`Imagen de la pelicula ${movie.Title}`}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default InputExample;
