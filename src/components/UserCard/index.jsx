import React from "react";
import './style.css'

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            firstName = 'Unkown',
            lastName = 'Unkown',
            profilePicture,
            cardDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum libero nobis laboriosam, quisquam iure placeat quae eos velit fuga?'
        } = this.props;

        const UserCard = (
            <li className="userCardWrapper">
                <article className="cardContainer" id={id}>
                <div className="cardImgWrapper">
                    <img className="cardImg" src={profilePicture} alt={firstName + ' ' + lastName + ' ' + 'photo'} />
                </div>
                <h2 className='cardName'>{firstName + ' ' + lastName}</h2>
                <p className="cardDescription">{cardDescription}</p>
            </article>
            </li>
        );

        return UserCard;
    }
}

export default UserCard;