import React from 'react';
import styles from './Homebar.module.scss'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

function Homebar() {
    const user = useSelector(selectUser);

    return (
        <div className={styles.homebar}>
            <div className={styles.homebar__cont}> 
            <div className={styles.avatarbox}><Avatar className={styles.avatar}> {user.displayName[0]} </Avatar></div>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>
        </div>
    );
}

export default Homebar;