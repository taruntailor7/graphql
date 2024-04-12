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
      {/* {JSON.stringify(data)} */}
      <table border='1'>
        <tbody>
          {data?.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
