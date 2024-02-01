import React from "react";
import PropTypes from 'prop-types';
import '../styles/FriendListItem.css'

function FriendListItem({ avatar, name, isOnline }) {
    
  const activeClass = isOnline ? 'active' : 'offline';
    
    return (
      <li className='itemFriend'>
        <span className={`status ${activeClass}`}></span>
        <img className='avatarFriends' src={avatar} alt={name} />
        <p className='name'>{name}</p>
      </li>
    );
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  };

export default FriendListItem;