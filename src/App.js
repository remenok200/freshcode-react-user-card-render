import { render } from "@testing-library/react";
import "./App.css";
import UserCardsList from "./components/UserCardsList";

function App() {
  return (
    <>
      <main className="container">
        <h1 className="main-header">OUR team</h1>
        <UserCardsList />
      </main>
    </>
  );
}

export default App;
