import React from "react";
import Login from "./comps/Login";
import { useState, useEffect } from "react";
import Register from "./comps/Register";
// import Counter from './features/counter/Counter'
import Home from "./pages/Home";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div className="container">
      <Login />
      <div>
        <h1>API Data</h1>
        {data && (
          <>
            <h1>{data.user.id}</h1>
            <h1>{data.user.email}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
