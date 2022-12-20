import React from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import SignIn from "./components/SignIn/SignIn";
import SignOut from "./components/SignOut/SignOut";
import { UserAuth } from "./Context/AuthContext";

function App() {
  const { user } = UserAuth();

  return (
    <div className="App">
      <header>
        <h1>Chatify</h1>
        <SignOut />
      </header>
      <section>{user?.uid ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
