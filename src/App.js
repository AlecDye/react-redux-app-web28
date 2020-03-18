import React from "react";

import "./App.css";
import Header from "./components/Header";
import RequestForm from "./components/RequestForm";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div className="App">
      <Header />
      <RequestForm />
    </div>
  );
}

export default App;
