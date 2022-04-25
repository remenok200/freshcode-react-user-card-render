import "./App.css";
import UserCard from "./components/UserCard";
import responseData from "./responseData.json";

function App() {
  const userCards = responseData.map(
    ({ id, firstName, lastName, profilePicture }, index) => (
      <UserCard
        key={id + firstName + lastName + profilePicture}
        id={id}
        firstName={firstName || "Unkown"}
        lastName={lastName || "Unkown"}
        profilePicture={profilePicture}
      />
    )
  );

  return (
    <>
      <main className="container">
        <h1 className="main-header">OUR team</h1>
        <ul id="root" className="userCardsContainer">
          {userCards}
        </ul>
      </main>
    </>
  );
}

export default App;
