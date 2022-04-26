import React from "react";
import "./style.css";
import UserCard from "../UserCard";
import responseData from "../../responseData.json";

class UserCardsList extends React.Component {
  render() {
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
      <ul id="root" className="userCardsContainer">
        {userCards}
      </ul>
    );
  }
}

export default UserCardsList;
