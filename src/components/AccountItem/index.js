import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/565418d2995c24fc473bbc892ea39b67.jpeg?lk3s=a5d48078&nonce=67999&refresh_token=0c79c6f1aa4d94b6448b2a3a074494e5&x-expires=1718251200&x-signature=W7iMnuThrWUePqCZSq%2Bf11m7egM%3D&shp=a5d48078&shcp=81f88b70"
                alt="avartar-account"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
