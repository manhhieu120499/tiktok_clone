import { BookMarkIcon } from '../Icons';
import formatNumber from '~/utils/formatNumber';
import styles from '../GroupButton/GroupButton.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ButtonBookMark({ bookMark }) {
    const [like, setLike] = useState(false);
    const handleClickBookMark = () => {
        setLike(!like);
    };
    return (
        <>
            <button
                className={cx('btn-action-video', {
                    like: like,
                })}
                onClick={handleClickBookMark}
            >
                <BookMarkIcon />
            </button>
            <strong className={cx('text')}>{formatNumber(bookMark) || '50'}</strong>
        </>
    );
}

ButtonBookMark.propTypes = {
    bookMark: PropTypes.number.isRequired,
};

export default ButtonBookMark;
