import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../firebase";
import styles from "./Homebox.module.scss";
import Post from "./posts/Post";
import firebase from "firebase";

const Homebox = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "Oluwamayowa George",
      content: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div>
      <div className={styles.inputbox}>
        <form className={styles.newpost}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="textarea"
            placeholder="What's on your mind?"
          ></input>
          <button type="submit" onClick={sendPost}>
            Post
          </button>
        </form>
      </div>

      <div className={styles.postbox}>
        {posts.map(({ id, data: { username, content, photoURL } }) => (
          <Post
            key={id}
            username={username}
            content={content}
            photoURL={photoURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Homebox;
