import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../firebase";
import styles from "./Homebox.module.scss";
import Post from "./posts/Post";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import FlipMove from "react-flip-move";

const Homebox = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

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
      username: user.displayName,
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
      <FlipMove>
        {posts.map(({ id, data: { username, content, photoURL } }) => (
          <Post
            key={id}
            username={username}
            content={content}
            photoURL={photoURL}
          />
        ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Homebox;
