import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import logo from '../../../media/logob.svg'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {

    return (
        <>
            <div className={styles.navbox}>
                <nav>
                    <div>
                        <img src={logo} alt='ChoCho' height='100' width='200'></img>
                    </div>
                    <div className={styles.navmenu}>
                        <Link> <HomeIcon /> Home</Link>
                        <Link> <PersonIcon /> Profile</Link>
                        <Link> <ForumIcon /> Messages</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;