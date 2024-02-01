import React from "react";
import PropTypes from 'prop-types';
import '../styles/FriendList.css'

function FriendList({ children }) {
    return <ul className='friendList'>{children}</ul>;
  }
  
  FriendList.propTypes = {
    children: PropTypes.node.isRequired
  };
  

export default FriendList;