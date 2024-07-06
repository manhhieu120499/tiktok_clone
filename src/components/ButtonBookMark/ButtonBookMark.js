import { BookMarkIcon } from '../Icons';
import formatNumber from '~/utils/formatNumber';
import styles from './ButtonBookMark.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ButtonBookMark({ bookMark, className, styles }) {
    const [like, setLike] = useState(false);
    const handleClickBookMark = () => {
        setLike(!like);
    };
    return (
        <>
            <button
                className={cx(className, {
                    like: like,
                })}
                onClick={handleClickBookMark}
            >
                <BookMarkIcon />
            </button>
            <strong
                className={cx('text', {
                    styles: styles,
                })}
            >
                {formatNumber(bookMark) || '50'}
            </strong>
        </>
    );
}

ButtonBookMark.propTypes = {
    bookMark: PropTypes.number.isRequired,
};

export default ButtonBookMark;
