import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      complete
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  console.log("Data: ", data);
  console.log("Loader: ", loading);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1>Hello okay</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
