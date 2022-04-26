import "./App.css";
import Header from "./components/Header";
import UserCardsList from "./components/UserCardsList";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <UserCardsList />
      </main>
    </>
  );
}

export default App;
