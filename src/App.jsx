import { useEffect, useState } from "react";

const App = () => {
  const [postList, setPostList] = useState([]);

  // Probar que la API funciona en el navegador
  // Colocar la URL que funciona en el navegador dentro de una variable para poderla usar
  const URL_API = "https://jsonplaceholder.typicode.com/posts";

  // // Crear una funcion que haga el llamado al API y me retorne los posts
  // const obtenerPosts = async () => {
  //   // Usar el API de fetch para hacer la solicitud a la URL indicada
  //   const response = await fetch(URL_API);
  //   // console.log("Status de la peticion: ", response.status);

  //   // De la respuesta del servidor, sacar la data que me interesa con el metodo json()
  //   const data = await response.json();
  //   // console.log(data);

  //   return data;
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usar el API de fetch para hacer la solicitud a la URL indicada
        const response = await fetch(URL_API);
        // De la respuesta del servidor, sacar la data que me interesa con el metodo json()
        const posts = await response.json();
        // Usando la funcion del useState se agrega la data al estado del componente
        setPostList(posts);
      } catch (error) {
        console.error("Error al llamar al API.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Consumiendo API</h1>
      {postList.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <small>{post.userId}</small>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
