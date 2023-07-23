import { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";

function App() {
  const [page, setPage] = useState<number>(1);

  const { isLoading, error, data } = useQuery(["post", page], () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${page}`).then((res) =>
      res.json()
    )
  );

  const increment = () => {
    setPage(page + 1);
    console.log("valor do page dentro do incremente", page);
  };

  const decrement = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log("valor do page dentro do decremente", page);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <h1>Básico do React Query</h1>
      <ul>
        <p key={data.id}>{data.title}</p>
      </ul>
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
    </>
  );
}

export default App;
