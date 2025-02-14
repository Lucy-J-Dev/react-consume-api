import { useEffect, useState } from "react";

const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  return comments;
};

const JsonPlaceHolderComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};

export default JsonPlaceHolderComments;
