import InputExample from "./components/InputExample";
import JsonPlaceHolderCommentList from "./components/JsonPlaceHolderCommentList";
import JsonPlaceHolderComments from "./components/JsonPlaceHolderComments";
import JsonPlaceHolderPhotoList from "./components/JsonPlaceHolderPhotoList";
import JsonPlaceHolderPostList from "./components/JsonPlaceHolderPostList";

const App = () => {
  return (
    <div>
      <h1>Fetch de datos</h1>
      {/* <JsonPlaceHolderPostList /> */}
      {/* <JsonPlaceHolderPhotoList /> */}
      {/* <JsonPlaceHolderCommentList /> */}
      <JsonPlaceHolderComments />
      {/* <InputExample /> */}
    </div>
  );
};

export default App;
