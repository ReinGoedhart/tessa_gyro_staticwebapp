import { IntroScreen } from "../components/IntroScreen";
import React, { useState, useEffect } from "react";
export default function Contact() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://azfunctionapptest20240503155356.azurewebsites.net/api/Function1?"
        );
        const data = await response.json();
        console.log(data);
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>Response from Azure Function:</h1>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
      <IntroScreen />
    </>
  );
}
