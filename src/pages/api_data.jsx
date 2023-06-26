import React, { useState } from "react";
import axios from "axios";
import { DataDisplay } from "./DataDisplay";

const ApiData = () => {
  const [info, setInfo] = useState([]);
  const key = "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";

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.openai.com/v1/models", {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.data.data;
      setInfo(data);
      console.log(info);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <hr />
        <hr />
        <hr />
        <h1>Fetch Data from OpenAI</h1>
        <button
          style={{
            fontSize: "20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            outline: "none",
            padding: "30px",
            width: "300px",
            height: "40px",
            backgroundColor: "#00C9A7",
            color: "white",
            cursor: "pointer",
          }}
          onClick={fetchData}
        >
          Fetch Data
        </button>
        <DataDisplay info={info} />
      </div>
    </>
  );
};

export default ApiData;
