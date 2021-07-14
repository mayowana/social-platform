import React, { forwardRef } from 'react';
import styles from './Post.module.scss'
import {Avatar} from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = forwardRef(({username, content, photoURL}, ref) => {

    return (
        <div className={styles.postbox} ref={ref}>
            <div className={styles.profile}>
                <Avatar src={photoURL} />
                <h3>{username}</h3>
            </div>
            <div className={styles.postbody}>
                <p>{content}</p>
            </div>
            <div className={styles.postbuttons}>
                <button> <ReplyIcon /> <p>Reply</p> </button>
                <button> <FavoriteIcon /> <p>Like</p> </button>
            </div>
        </div>
    );
});

export default Post;