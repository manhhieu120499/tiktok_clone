import classNames from 'classnames/bind';
import styles from './GroupButton.module.scss';
import {
    CopyLinkIcon,
    EmbededIcon,
    FacebookIcon,
    MessageCommentsIcon,
    SendLinkIcon,
    ShareIcon,
    WhatAppIcon,
} from '../Icons';
import PropTypes from 'prop-types';

import formatNumber from '~/utils/formatNumber';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import ButtonFavorite from '../ButtonFavourite';
import ButtonBookMark from '../ButtonBookMark';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);
function GroupButton({ like, comments, bookMark, share, dataVideo }) {
    return (
        <div className={cx('group-btn')}>
            <ButtonFavorite like={like} className={cx('btn-action-video')} />
            <Link to={routes.video} state={dataVideo} className={cx('btn_link_video')}>
                <button className={cx('btn-action-video')}>
                    <MessageCommentsIcon />
                </button>
                <strong className={cx('text')}>{formatNumber(comments) || '10N'}</strong>
            </Link>

            <ButtonBookMark bookMark={bookMark} className={cx('btn-action-video')} />
            <div>
                <Tippy
                    interactive
                    offset={[-10, 2]}
                    delay={[0, 300]}
                    placement="top-start"
                    render={(attrs) => {
                        return (
                            <div className={cx('more-action-share')} tabIndex="-1" {...attrs}>
                                <div className={cx('action-item')}>
                                    <EmbededIcon />
                                    <span className={cx('title')}>Embed</span>
                                </div>
                                <div className={cx('action-item')}>
                                    <SendLinkIcon />
                                    <span className={cx('title')}>Send to friends</span>
                                </div>
                                <div className={cx('action-item')}>
                                    <FacebookIcon />
                                    <span className={cx('title')}>Share to Facebook</span>
                                </div>
                                <div className={cx('action-item')}>
                                    <WhatAppIcon />
                                    <span className={cx('title')}>Share to WhatsApp</span>
                                </div>
                                <div className={cx('action-item')}>
                                    <CopyLinkIcon />
                                    <span className={cx('title')}>Copy link</span>
                                </div>
                            </div>
                        );
                    }}
                >
                    <button className={cx('btn-action-video')}>
                        <ShareIcon />
                    </button>
                </Tippy>
            </div>
            <strong className={cx('text', { last: true })}>{formatNumber(share) || '100'}</strong>
        </div>
    );
}

GroupButton.propTypes = {
    like: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookMark: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
    dataVideo: PropTypes.object.isRequired, // for video detail page
};

export default GroupButton;
