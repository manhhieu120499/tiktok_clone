import classNames from 'classnames/bind';
import styles from './CommentInput.module.scss';
import { EmojiIcon, TagIcon } from '../Icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function CommentInput() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('input-group')}>
                <input placeholder="Add comment..." className={cx('input_text')} />
                <Tippy interactive delay={[0, 200]} content="“@” a user to tag them in your comments">
                    <div className={cx('tag_user')}>
                        <TagIcon />
                    </div>
                </Tippy>
                <Tippy interactive delay={[0, 200]} content="Click to add emojis">
                    <div className={cx('emoji')}>
                        <EmojiIcon />
                    </div>
                </Tippy>
                <button className={cx('btn_send')}>Post</button>
            </div>
        </div>
    );
}

export default CommentInput;
