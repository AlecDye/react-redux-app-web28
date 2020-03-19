import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [heroImg, setHeroImg] = useState();
  useEffect(() => {
    axios
      .get("https://picsum.photos/1080/720")
      .then(res => {
        setHeroImg(res.data);
      })
      .catch(err => console.error);
  });

  return (
    <header>
      <img src={heroImg} alt={"Banner"} />
    </header>
  );
};

export default Header;
