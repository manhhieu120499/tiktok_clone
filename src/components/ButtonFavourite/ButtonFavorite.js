import { HeartIcon } from '../Icons';
import formatNumber from '~/utils/formatNumber';

import classNames from 'classnames/bind';
import styles from '../GroupButton/GroupButton.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function ButtonFavorite({ like }) {
    const [favorite, setFavorite] = useState(false);
    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <>
            <button
                className={cx('btn-action-video', {
                    favorite: favorite,
                })}
                onClick={handleClickFavorite}
            >
                <HeartIcon />
            </button>
            <strong className={cx('text')}>{formatNumber(like) || '120K'}</strong>
        </>
    );
}

ButtonFavorite.propTypes = {
    like: PropTypes.number.isRequired,
};

export default ButtonFavorite;
