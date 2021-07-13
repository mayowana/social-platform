import styles from "./Signup.module.scss";
import logo from "../../../media/logob.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  

  const SignUpApp = () => {
    auth.createUserWithEmailAndPassword(user, pass).then((userAuth) => {
        userAuth.user
        .updateProfile({
          displayName: fname,
        })
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fname,
            }))
        });
    }).catch(error => alert(error.message));
  };

  const handleInvalidForm = () => {
    alert("Form not complete");
  };

  return (
    <>
      <div className={styles.signup}>
        <div className={styles.signupform}>
          <form onInvalid={handleInvalidForm} onSubmit={SignUpApp}>
            <img src={logo} alt="ChoCho" height="100" width="200"></img>
            <h3>Create an account</h3>
            <input
              type="text"
              placeholder="First name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              required
              onChange={(e) => setLname(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={user}
              required
              onChange={(e) => setUser(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
            ></input>
            <button type='submit'>Sign up</button>
          </form>
        </div>
        <div className={styles.login}>
          <Link to="/">Already have an account? Log in</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
