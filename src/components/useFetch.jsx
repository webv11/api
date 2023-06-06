import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, ['https://jsonplaceholder.typicode.com/users']);

  return [data];
};

export default useFetch;