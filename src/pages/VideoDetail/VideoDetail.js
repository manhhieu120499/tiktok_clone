import classNames from 'classnames/bind';
import styles from './VideoDetail.module.scss';
import VideoContent from '../../components/VideoContent';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CloseIcon,
    ShareIcon,
    MessageCommentsIcon,
    EmbededIcon,
    SendLinkIcon,
    FacebookIcon,
    WhatAppIcon,
    TwitterIcon,
    MusicNoteIcon,
} from '../../components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import Comments from '~/components/Comment';
import ButtonFavorite from '~/components/ButtonFavourite';
import ButtonBookMark from '~/components/ButtonBookMark';
import CommentInput from '~/components/CommentInput';

const cx = classNames.bind(styles);

const COMMENT = {
    avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
    username: 'nguyenvana',
    creator: true,
    timePost: '3d ago',
    content: 'Hello anh em',
    feedback: [
        {
            avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
            username: 'nguyenvana',
            timePost: '3d ago',
            content: 'Hello anh em',
        },
        {
            avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
            username: 'nguyenvana',
            timePost: '3d ago',
            content: 'Hello anh em',
        },
        {
            avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
            username: 'nguyenvana',
            timePost: '3d ago',
            content: 'Hello anh em',
        },
        {
            avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=45979&refresh_token=130583a7a4bcc773ce98f06adf82798f&x-expires=1720339200&x-signature=Bq%2FpvDrRuxs7rteZQLXHJV9pw1c%3D&shp=a5d48078&shcp=81f88b70',
            username: 'nguyenvana',
            timePost: '3d ago',
            content: 'Hello anh em',
        },
    ],
};

function VideoDetail({ src }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('single_video')}>
                {/* video */}
                <VideoContent src={src} />
                {/*button close */}
                <button className={cx('btn_close')}>
                    <CloseIcon />
                </button>
                {/*button next and prev video */}
                <div className={cx('btn_option_video')}>
                    <button className={cx('btn_prev')}>
                        <ArrowUpIcon />
                    </button>
                    <button className={cx('btn_next')}>
                        <ArrowDownIcon />
                    </button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content_header')}>
                    <div className={cx('info_video')}>
                        <div className={cx('heading')}>
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/faca51860e536bc4ab8dec4e74770a65.jpeg?lk3s=a5d48078&nonce=83962&refresh_token=daacf4b0c022cb475c1fe646ccfce982&x-expires=1720317600&x-signature=tOnJDqpHOn2dNcAZ7Quw89jhMfQ%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('avatar_user_post')}
                                alt="avatar_user_post"
                            />
                            <div className={cx('user_post')}>
                                <p className={cx('user_name')}>User Name</p>
                                <span className={cx('nick_name')}>nickname</span>
                                <span className={cx('time_post')}>Time Post</span>
                            </div>
                            <Button primary className={cx('btn_follow')}>
                                Follow
                            </Button>
                        </div>
                        <p className={cx('des_video')}>
                            giao diện hơi hổ báo tí thôi chớ tâm hồn 👶🐃 lắm, vợ liếc nhẹ một phát là đổ mồ hôi liền
                            =)){' '}
                        </p>
                        <div className={cx('music_link')}>
                            <MusicNoteIcon />
                            <p className={cx('link')}>Nhạc nền</p>
                        </div>
                    </div>

                    <div className={cx('btn_action_post')}>
                        {/* <button className={cx('btn_item')}>
                            <HeartIcon />
                        </button> */}
                        <ButtonFavorite like={120000} className={cx('btn_item')} styles />
                        {/* <strong className={cx('text')}>120k</strong> */}
                        <button className={cx('btn_item')}>
                            <MessageCommentsIcon />
                        </button>
                        <strong className={cx('text')}>120k</strong>
                        <ButtonBookMark bookMark={120000} className={cx('btn_item')} styles />

                        <div className={cx('btn_option_other')}>
                            <Tippy delay={[0, 200]} content="Embed">
                                <button className={cx('btn_option_item')}>
                                    <EmbededIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Send to friends">
                                <button className={cx('btn_option_item')}>
                                    <SendLinkIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Share to facebook">
                                <button className={cx('btn_option_item')}>
                                    <FacebookIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Share to WhatsApp">
                                <button className={cx('btn_option_item')}>
                                    <WhatAppIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Share to Twitter">
                                <button className={cx('btn_option_item')}>
                                    <TwitterIcon />
                                </button>
                            </Tippy>
                            <button className={cx('btn_option_item')}>
                                <ShareIcon />
                            </button>
                        </div>
                    </div>

                    <div className={cx('copy_link')}>
                        <p className={cx('text_link')}>
                            https://www.tiktok.com/@mannhi_vnt/video/7386658279344164101?is_from_webapp=1&sender_device=pc&web_id=7376112638622139924
                        </p>
                        <button className={cx('btn_copy')}>Copy Link</button>
                    </div>
                </div>
                <div className={cx('content_body')}>
                    <ul className={cx('menu')}>
                        <li className={cx('menu_item')}>Comments</li>
                        <li className={cx('menu_item')}>Creator videos</li>
                    </ul>
                    <div className={cx('comments')}>
                        <Comments comment={COMMENT} />
                        <Comments comment={COMMENT} />
                    </div>
                    <div className={cx('post_comment')}>
                        <CommentInput />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
