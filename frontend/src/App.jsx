import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
