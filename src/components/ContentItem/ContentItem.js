import classNames from 'classnames/bind';
import styles from './ContentItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Button from '../Button';
import Image from '../Image';
import VideoContent from '../VideoContent';
import GroupButton from '../GroupButton';

const cx = classNames.bind(styles);

function ContentItem({
    nickname,
    username,
    tick,
    describe,
    hashtag,
    music_link,
    src,
    avatar,
    like,
    share,
    comments,
    bookMark,
    size,
    followed,
}) {
    return (
        <div className={cx('content-item')}>
            <div className={cx('wrapper')}>
                <div className={cx('content-item-header')}>
                    {/* avatar */}
                    <Image className={cx('content-item-avatar')} src={avatar} alt="avatar-content-item" />
                    {/*body */}
                    <div className={cx('content-item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{nickname}</strong>
                            {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('item-icon-check')} />}
                        </p>
                        <span className={cx('username')}>{username}</span>
                        <p className={cx('content-item-des')}>{describe}</p>
                    </div>
                    {/*button */}
                    <Button outline className={cx('content-btn')}>
                        {followed ? 'Followed' : 'Follow'}
                    </Button>
                </div>
                <div className={cx('content-item-hashtag')}>
                    <span className={cx('hashtag')}>{hashtag}</span>
                    <p className={cx('music_link')}>
                        <strong>{music_link}</strong>
                    </p>
                </div>
            </div>
            <div className={cx('content-item-body')}>
                {/* video */}
                <VideoContent src={src} size={size} />
                {/* btn-actions*/}
                <GroupButton like={like} share={share} comments={comments} bookMark={bookMark} />
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    src: PropTypes.string,
    username: PropTypes.string,
    nickname: PropTypes.string,
    tick: PropTypes.bool,
    describe: PropTypes.string,
    avatar: PropTypes.string,
    like: PropTypes.number,
    share: PropTypes.number,
    comments: PropTypes.number,
    bookMark: PropTypes.number,
    size: PropTypes.string,
};

export default ContentItem;
