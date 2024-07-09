import classNames from 'classnames/bind';
import styles from './Comments.module.scss';

import Image from '../Image';
import PropTypes from 'prop-types';
import { HeartIconTransparent } from '../Icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Comment({
    avatar = 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
    username = 'nguyenvana',
    timePost = '3d ago',
    content = 'Hello anh em',
    creator = false,
    feedback = [],
}) {
    const [like, setLike] = useState(false);
    return (
        <div className={cx('comment')}>
            <Image className={cx('comment-avatar')} src={avatar} alt={username} />
            <div className={cx('comment-info')}>
                <div className={cx('comment-header')}>
                    <span className={cx('comment-username')}>{username}</span>
                    {creator && <span className={cx('author_post')}>Tác giả</span>}
                    <span className={cx('comment-time')}>{timePost}</span>
                </div>
                <div className={cx('comment-content')}>{content}</div>
                <button className={cx('btn_feedback')}>Reply</button>
            </div>
            <div className={cx('comment_option')}>
                <div className={cx('elipse_option')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
                <button
                    className={cx('btn_like')}
                    onClick={() => {
                        setLike(!like);
                    }}
                >
                    <HeartIconTransparent className={cx({ like: like })} />
                </button>
                <span className={cx('amount_like')}>1700</span>
            </div>
        </div>
    );
}

Comment.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timePost: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creator: PropTypes.bool,
    feedback: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Comment;
