import { useEffect, useState } from "react";

const JsonPlaceHolderPostList = () => {
  const [postList, setPostList] = useState([]);

  // Probar que la API funciona en el navegador
  // Colocar la URL que funciona en el navegador dentro de una variable para poderla usar
  const URL_API = "https://jsonplaceholder.typicode.com/posts";

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

export default JsonPlaceHolderPostList;
