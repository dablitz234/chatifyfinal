import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase";
import ChatMessage from "../ChatMessage/ChatMessage";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { UserAuth } from "../../Context/AuthContext";

const ChatRoom = () => {
  const dummy = useRef();
  const { user } = UserAuth();
  const messagesRef = collection(db, "messages");

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    const q = query(messagesRef, orderBy("createdAt"), limit(25));
    onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMessages(list);
    });
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = user;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Chat here!"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
