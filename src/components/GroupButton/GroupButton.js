import classNames from 'classnames/bind';
import styles from './GroupButton.module.scss';
import {
    BookMarkIcon,
    CopyLinkIcon,
    EmbededIcon,
    FacebookIcon,
    HeartIcon,
    MessageCommentsIcon,
    SendLinkIcon,
    ShareIcon,
    WhatAppIcon,
} from '../Icons';
import PropTypes from 'prop-types';

import formatNumber from '~/utils/formatNumber';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
function GroupButton({ like, comments, bookMark, share }) {
    return (
        <div className={cx('group-btn')}>
            <button className={cx('btn-action-video')}>
                <HeartIcon />
            </button>
            <strong className={cx('text')}>{formatNumber(like) || '120K'}</strong>
            <button className={cx('btn-action-video')}>
                <MessageCommentsIcon />
            </button>
            <strong className={cx('text')}>{formatNumber(comments) || '10N'}</strong>
            <button className={cx('btn-action-video')}>
                <BookMarkIcon />
            </button>
            <strong className={cx('text')}>{formatNumber(bookMark) || '50'}</strong>
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
    like: PropTypes.number,
    comments: PropTypes.number,
    bookMark: PropTypes.number,
    share: PropTypes.number,
};

export default GroupButton;
