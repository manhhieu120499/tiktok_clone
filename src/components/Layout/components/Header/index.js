import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMoon,
    faSignIn,
    faSpinner,
    faCloudArrowUp,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Inbox, Message, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and Shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    const imageRef = useRef();

    useEffect(() => {
        setSearchResult([]);
    }, []);

    // handle logic menu change
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle language change
                console.log(menuItem);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@username',
        },

        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            line: <hr />,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-brand')}>
                    <img src={images.logo} alt="logo-brand-tiktok" />
                </div>
                <div>
                    <HeadlessTippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos..." spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('user-action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('user-action-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('user-action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}>
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser === true ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                ref={imageRef}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=12262&refresh_token=3222d8454c2146a21f238d43f80084af&x-expires=1718593200&x-signature=zsQkUtuSZruLQhMGAQwN5cAs2As%3D&shp=a5d48078&shcp=81f88b70"
                                alt="avatar-current-user"
                                className={cx('avatar-user')}
                                fallback="https://cdn1.iconfinder.com/data/icons/interaction-16/70/error__warning__profile__user__avatar-512.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
