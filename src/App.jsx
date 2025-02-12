import JsonPlaceHolderCommentList from "./components/JsonPlaceHolderCommentList";
import JsonPlaceHolderPhotoList from "./components/JsonPlaceHolderPhotoList";
import JsonPlaceHolderPostList from "./components/JsonPlaceHolderPostList";

const App = () => {
  return (
    <div>
      <h1>Fetch de datos</h1>
      {/* <JsonPlaceHolderPostList /> */}
      {/* <JsonPlaceHolderPhotoList /> */}
      <JsonPlaceHolderCommentList />
    </div>
  );
};

export default App;
