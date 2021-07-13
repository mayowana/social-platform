import React from 'react';
import styles from './Homebar.module.scss'
import {Avatar} from '@material-ui/core'

function Homebar({image, username}) {

    return (
        <div className={styles.homebar}>
            <div className={styles.homebar__cont}> 
            <div className={styles.avatarbox}><Avatar src={image} className={styles.avatar}/></div>
            <h2>Oluwamayowa George</h2>
            <h4>themayowageorge@gmail.com</h4>
            </div>
        </div>
    );
}

export default Homebar;