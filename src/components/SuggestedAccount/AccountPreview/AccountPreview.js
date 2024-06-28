import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ avatar, name, username }) {
    return (
        <div className={cx('account-preview')}>
            <div className={cx('heading')}>
                <img className={cx('avatar-account')} src={avatar} alt="" />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('account-info')}>
                <p className={cx('nickname')}>
                    <strong>{name}</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('item-icon')} />
                </p>
                <p className={cx('name)')}>{username}</p>
            </div>
            <div className={cx('view')}>
                <span className={cx('follower')}>
                    <b className={cx('text')}>8.2M</b>Follower
                </span>
                <span className={cx('like')}>
                    <b className={cx('text')}>152.2M</b>Like
                </span>
            </div>
        </div>
    );
}

export default AccountPreview;
