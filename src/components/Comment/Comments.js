import classNames from 'classnames/bind';
import styles from './Comments.module.scss';
import Comment from './Comment';
import { useState } from 'react';
import { ArrowDownIconSmall } from '../Icons';

const cx = classNames.bind(styles);

function Comments({ comment }) {
    const [show, setShow] = useState(false);
    return (
        <div className={cx('comment_list')}>
            <Comment
                avatar={comment.avatar}
                username={comment.username}
                timePost={comment.timePost}
                content={comment.content}
                creator={comment.creator}
            />
            <button onClick={() => setShow(!show)} className={cx('btn_show_more')}>
                View 2 reply
                <ArrowDownIconSmall />
            </button>
            {comment.feedback.length > 0 && show && (
                <div className={cx('feedback')}>
                    {comment.feedback.map((item) => (
                        <Comment
                            key={item.id}
                            avatar={item.avatar}
                            username={item.username}
                            timePost={item.timePost}
                            content={item.content}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comments;
