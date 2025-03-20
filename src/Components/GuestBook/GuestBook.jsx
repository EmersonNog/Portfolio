/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import World from "../../Assets/Images/backgrounds/world.png";
import "./GuestBook.css";

const GuestBook = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "guestbook");

  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      try {
        await addDoc(messagesRef, {
          name,
          comment,
          timestamp: new Date(),
        });

        setName("");
        setComment("");
      } catch (error) {
        console.error("Erro ao adicionar mensagem: ", error);
      }
    }
  };

  return (
    <div className="guest-book-container">
      <div className="image-box">
        <img src={World} alt="Imagem do Guest Book" className="img-world" />
      </div>

      <div className="comment-section">
        <form onSubmit={handleSubmit} className="form-book">
          <h2>Hi visitor!</h2>
          <input
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Type your message..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">SUBMIT →</button>
        </form>

        <div className="messages-container">
          {messages.length === 0 ? (
            <p className="no-messages">Nenhuma mensagem ainda.</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="message">
                <p className="message-name">
                  {msg.name}{" "}
                  <span className="timestamp">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }).format(new Date(msg.timestamp.seconds * 1000))}
                  </span>
                </p>
                <p className="message-text">{msg.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestBook;
