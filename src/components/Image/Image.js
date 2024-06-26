import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import images from '~/assets/images';
import { useState } from 'react';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt=""
            {...props}
            onError={handleError}
        />
    );
}

forwardRef(Image).propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
