import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(12345);
  const BASE_URL = "https://game-dev-server.vercel.app/";
  // const BASE_URL = "http://localhost:4000/";

  const handleSave = () => {
    const data = {
      name: name,
      phone: phone,
    };
    axios.post(BASE_URL + "signup", data).then((res) => {
      console.log(res);
      if (res.data) {
        alert("success");
      } else {
        alert("error ");
      }
    });

    console.log(data, "data");
  };
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input
          value={phone}
          type="number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSave}>save</button>
      </div>
    </>
  );
};

export default App;
