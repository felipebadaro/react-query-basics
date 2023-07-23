import "./App.css";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
      res.json()
    )
  );

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
    </>
  );
}

export default App;
