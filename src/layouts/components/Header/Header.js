import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMoon,
    faSignIn,
    faCloudArrowUp,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { useRef } from 'react';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

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
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'fa',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thái Lan',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Australia',
                },
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
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'fa',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thái Lan',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Australia',
                },
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
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'fa',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thái Lan',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Australia',
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
    const currentUser = true;
    const imageRef = useRef();

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
                <Link to={config.routes.home} className={cx('logo-brand')}>
                    <img src={images.logo} alt="logo-brand-tiktok" />
                </Link>
                {/* Search account */}
                <Search />
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
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('user-action-btn', 'notification')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <InboxIcon />
                                    <span className={cx('inbox-notification')}>23</span>
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
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=61071&refresh_token=a8937d4faced7589fcdb7a943de9387d&x-expires=1718938800&x-signature=EGEjTS3xrQ%2BZzMWu4WdwLgay03U%3D&shp=a5d48078&shcp=81f88b70"
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
