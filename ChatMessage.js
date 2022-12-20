import React from 'react';
import { UserAuth } from '../../Context/AuthContext';

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;
    const { user } = UserAuth();
    const messageClass = uid === user.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="profilePic" />
      <p>{text}</p>
    </div>
  </>)
};

export default ChatMessage;