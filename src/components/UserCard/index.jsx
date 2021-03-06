import React from "react";
import "./style.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadImgError: false,
    };
  }

  render() {
    const getInitials = (str) => {
      const wordsArr = str.split(" ");
      const initialsArr = wordsArr.map((word) => word[0]);
      const initialsStr = initialsArr.join(" ");
      return initialsStr;
    };

    const {
      id,
      firstName,
      lastName,
      profilePicture,
      cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum libero nobis laboriosam, quisquam iure placeat quae eos velit fuga?",
    } = this.props;

    const UserCard = (
      <li className="userCardWrapper">
        <article className="cardContainer" id={id}>
          <div className="cardImgWrapper">
            {profilePicture && !this.state.loadImgError ? (
              <img
                className="cardImg"
                src={profilePicture}
                alt={`${firstName} ${lastName}`}
                onError={() => this.setState({ loadImgError: true })}
              />
            ) : (
              <div className="initials">
                {getInitials(`${firstName} ${lastName}`)}
              </div>
            )}
          </div>
          <h2 className="cardName">{`${firstName} ${lastName}`}</h2>
          <p className="cardDescription">{cardDescription}</p>
        </article>
      </li>
    );

    return UserCard;
  }
}

export default UserCard;
