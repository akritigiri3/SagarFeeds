import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>React + Express Project</h1>
      <p>{message}</p>
    </>
  );
}

export default App;