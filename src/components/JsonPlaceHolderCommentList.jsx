import { useEffect, useState } from "react";

const URL_API = "https://jsonplaceholder.typicode.com";

// 1. Crear una función para solicitar la data al servidor (hacer fetch de datos).
const fetchPosts = async () => {
  const response = await fetch(`${URL_API}/posts`);
  const data = await response.json();
  return data;
};

const fetchComments = async () => {
  const response = await fetch(`${URL_API}/comments`);
  const data = await response.json();
  return data;
};

const fetchCommentById = async (commentId) => {
  const response = await fetch(`${URL_API}/comments/${commentId}`);
  const data = await response.json();
  return data;
};

const fetchDataFromJsonPlaceHolder = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fin de paso 1.
const JsonPlaceHolderCommentList = () => {
  // 3.1 crear un estado con useState, esta funcion retorna 2 variables, una variable que contiene el estado y otra variable que contiene la función que me permite modificar ese estado
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState(null);
  const [data, setData] = useState(null);

  // 2. Crear un useEffect para hacer el uso de la función que solicita la data
  useEffect(() => {
    fetchComments()
      .then((comments) => {
        // 3. agregar la data recuperada por la función que solicita la info al API y setearla al estado creado con useState
        // 3.2 usando la función para modificar el estado, agregar la data recuperada desde el API al estado del componente.
        setCommentList(comments);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchCommentById(5).then((comment) => setComment(comment));
  }, []);

  useEffect(() => {
    fetchDataFromJsonPlaceHolder(`${URL_API}/users/1`).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  // 4. Mostrar la data recuperada y ya almacenada en el estado del componente usando tags de HTML
  // 4.1 Verificar que el estado no es falso para poder renderizar o mostrar en pantalla la información. Esto se hace usando renderizado condicional.
  return (
    <div>
      <div>
        <h1>Buscar usuario por ID</h1>
        <input type="number" name="userId" id="userId" />
        <button>Buscar</button>
      </div>
      <div>
        <h1>Mostrando data</h1>
        {data && (
          <>
            <h1>mi data es: {data.name}</h1>
          </>
        )}
      </div>
      {/* Un solo comentario */}
      <div>
        {/* // 4.2 Si la información está dentro de un objeto, se puede acceder a sus propiedades directamente usando notación punto. ej. user.name */}
        {comment && (
          <div>
            <h1>Mostrando un unico comentario</h1>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        )}
      </div>

      {/* Lista de comentarios */}
      <div>
        <h1>Consumiendo datos de comentarios</h1>
        {/* // 4.3 Si la información está dentro de un arreglo, se usa la función .map para transformar cada uno de los elementos del arreglo en un objeto que se pueda renderizar o mostrar por pantalla. Ej. un objeto formado por varios tags HTML. */}
        {commentList &&
          commentList.map((comment, index) => (
            <div key={index}>
              <h2>{comment.name}</h2>
              <small>{comment.email}</small>
              <p>{comment.body}</p>
              {/* <p>Identificador de POST: {comment.postId}</p> */}
              {/* <p>Identificador de comentario: {comment.id}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default JsonPlaceHolderCommentList;
