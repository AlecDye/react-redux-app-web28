import React from "react";

import "./App.css";
import RequestForm from "./components/RequestForm";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div className="App">
      <RequestForm />
      <ImageList />
    </div>
  );
}

export default App;
