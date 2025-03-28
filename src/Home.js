import React from "react";
import { useNavigate } from "react-router-dom";

const IPAdd = process.env.REACT_APP_IP_ADD || "localhost";
const PORT = process.env.REACT_APP_PORT || 3040;

export default function Hello() {

    const navigate = useNavigate();

  const callAPI = async () => {
    try {
      const response = await fetch(`http://${IPAdd}:${PORT}/api/hello`);
      const data = await response.json();
     
      if (data.status === 0) {
        console.log("Valid API Response:", data);
        navigate("/hello");

      }
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  return (
    <div>
      <div>Second page .....</div>
      <button onClick={callAPI}>Call API</button>
    </div>
  );
}
