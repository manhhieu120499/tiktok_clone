import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    let Comp = 'span';
    const props = {};
    if (data.to) {
        Comp = Link;
        props.to = data.to;
    }
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <span className={cx('icon')}>{data.icon}</span>
            <Comp className={cx('title')} {...props}>
                {data.title}
            </Comp>
        </div>
    );
}

export default MenuItem;
