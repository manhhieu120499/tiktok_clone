import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ avatar, name, username }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview avatar={avatar} name={name} username={username} />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom-end" render={renderPreview} offset={[-40, 0]}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{name}</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('item-icon')} />
                        </p>
                        <p className={cx('name')}>{username}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default AccountItem;
