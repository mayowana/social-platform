import styles from "./Home.module.scss";
import Header from "./header/Header";
import Homebar from "./homebar/Homebar";
import Homebox from "./homebox/Homebox";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Login from "../auth/login/Login";

const Home = () => {

  const user = useSelector(selectUser);

  return (
    <>
    <div>{user? <div>
    <div>
        <Header />
      </div>
      <div className={styles.home}>
      <div className={styles.homebar}>
        <Homebar />
      </div>
      <div className={styles.homebox}>
        <Homebox />
      </div>
      <div className={styles.widgets}></div>
    </div>
    </div>
       : <Login />}</div>
    </>
  );
};

export default Home;
