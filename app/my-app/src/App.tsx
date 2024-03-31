import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imgUrl, setImgUrl] = useState("https://source.unsplash.com/random");

  const onClickRandom = () => {
    axios
      .get("https://source.unsplash.com/random", { responseType: "blob" })
      .then((res) => setImgUrl(URL.createObjectURL(res.data)));
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexFlow: "column" }}>
        <button
          style={{ width: "80px", margin: "5px auto 0 auto" }}
          onClick={onClickRandom}
        >
          ランダム
        </button>
        <img src={imgUrl} alt="ランダム画像" style={{ height: "95vh" }} />
      </div>
    </div>
  );
}

export default App;
