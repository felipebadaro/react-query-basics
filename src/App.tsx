import { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IError {
  message: string;
  code: number;
}

function App() {
  const [page, setPage] = useState<number>(1);

  const { isLoading, error, data } = useQuery<IPost, IError>(
    ["post", page],
    () =>
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
        <p key={data?.id}>{data?.title}</p>
      </ul>
      <button onClick={decrement}>Prev</button>&nbsp;&nbsp;&nbsp;
      <button onClick={increment}>Next</button>
    </>
  );
}

export default App;
