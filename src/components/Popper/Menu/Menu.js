import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const [show, setShow] = useState(false);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <div key={index}>
                    {item.line !== undefined && <div className={cx('line-menu')}>{item.line}</div>}
                    <MenuItem
                        key={index}
                        data={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                                setShow(true);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                </div>
            );
        });
    };

    const handleGoBackMenu = () => {
        const newHistory = history;
        newHistory.splice(history.length - 1, 1);
        setHistory([...newHistory]);
        if (history.length === 1) setShow(false);
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {show && <Header title={current.title} onBack={handleGoBackMenu} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory(history.slice(0, 1));
        setShow(false);
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 250]}
            placement="bottom-end"
            offset={[12, 12]}
            render={renderResult}
            onHide={handleResetToFirstPage}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
