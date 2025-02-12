import { useEffect, useState } from "react";

const URL_API = "https://jsonplaceholder.typicode.com/photos";
const fetchPhotosAsync = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

const JsonPlaceHolderPhotoList = () => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    fetchPhotosAsync()
      .then((data) => {
        setPhotoList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {photoList.map((photo, index) => (
        <div key={index}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={`photo - ${index}`} height={350} />
        </div>
      ))}
    </div>
  );
};

export default JsonPlaceHolderPhotoList;
