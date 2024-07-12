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
    PauseIcon,
} from '../../components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import ButtonFavorite from '~/components/ButtonFavourite';
import ButtonBookMark from '~/components/ButtonBookMark';
import CommentInput from '~/components/CommentInput';
import { Link, useLocation } from 'react-router-dom';
import routes from '~/config/routes';
import Comments from '~/components/Comment';
import * as videos from '~/assets/videos';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

const COMMENTS = [
    {
        userId: 'A1',
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
    },
    {
        userId: 'B2',
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
    },
];
const LIST_CONTENTS = [
    {
        nickname: 'nguyenvanteo67',
        username: 'Nguyễn Văn Tèo',
        tick: true,
        describe: 'Nhạc hay quá nè kkk!',
        hashtag: '#music',
        music_link: 'Nhạc nền - Phạm Phúc Khang',
        src: videos.default.kay,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=41341&refresh_token=03271e1467d214a416ef5f2439ca60ce&x-expires=1719565200&x-signature=maIwhtaW6gedHMHY9mHAwcREVO8%3D&shp=a5d48078&shcp=81f88b70',
        like: 120000000,
        share: 100,
        comments: 10000,
        bookMark: 59,
        size: 'small',
        timePost: '3d ago',
    },
    {
        nickname: 'ongchuit84',
        username: 'Ông Chú IT',
        tick: true,
        describe: 'Làm việc với API',
        hashtag: '#Lập trình cuộc sống',
        music_link: 'Nhạc nền -Fullstack developer',
        src: videos.default.it,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1884e40872c0107fc3dd373aefa37aee.jpeg?lk3s=a5d48078&nonce=93680&refresh_token=4bbb53b94a5ed41ae1ba161f7821293b&x-expires=1719565200&x-signature=wz7lRUnpkDDNVRAAt0OIPGiZ43w%3D&shp=a5d48078&shcp=81f88b70',
        like: 110000000,
        share: 120,
        comments: 12000,
        bookMark: 79,
        size: 'small',
        timePost: '4d ago',
    },
    {
        nickname: 'nontop.remix',
        username: '𝐍𝐎𝐍𝐓𝐎𝐏 𝐕𝐍♪',
        tick: true,
        describe: 'Full Bán duyên ft 5 in 1',
        hashtag: ' #nontopvn #flp #thinhhanh #toptrending #huypt #vinahouse #nhaccuonvai',
        music_link: 'Nhạc nền - Ét-Gờ-Ka',
        src: videos.default.nonstop,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a5e4cbdc6d91c559a0e139e2192c8180~c5_100x100.jpeg?lk3s=a5d48078&nonce=25068&refresh_token=62cba63b8e15dfc44ee3cdc8b502e499&x-expires=1719565200&x-signature=EkYYuiWsR%2BiQMX7XYDxB1h9bJ14%3D&shp=a5d48078&shcp=81f88b70',
        like: 150000000,
        share: 1000,
        comments: 15000,
        bookMark: 100,
        size: 'medium',
        timePost: '10d ago',
    },
    {
        nickname: 'kieuchi111',
        username: 'Phan Thị Kiều Chi',
        tick: true,
        describe:
            '“Em dành cả tương lai, nhưng anh phải lòng yêu ai?”😔 | Anh Thôi Nhân Nhượng | Bản full đã có trên kênh YouTube',
        hashtag: 'CapCut · Edit like a pro',
        music_link: 'nhạc nền - Phan Thị Kiều Chi',
        src: videos.default.kieuChi,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/af8164c403f6a307c82514f48eb8edc6.jpeg?lk3s=30310797&nonce=62925&refresh_token=c22f2009c038365b1ddc39f2b6860ca6&x-expires=1719586800&x-signature=Zq4VHnHRfLxMfkBUeyP4o8RNXKI%3D&shp=30310797&shcp=-',
        like: 120000000,
        share: 100,
        comments: 10000,
        bookMark: 59,
        size: 'small',
        timePost: '7d ago',
    },
];

function VideoDetail() {
    // dùng để lấy dữ liệu từ state trong Component Link của react-router-dom
    const data = useLocation();
    const [indexVideo, setIndexVideo] = useState(data.state.index);
    const videoData = indexVideo !== -1 ? LIST_CONTENTS[indexVideo] : data.state;
    const videoRef = useRef();
    const [show, setShow] = useState(false);

    const handleVideo = (e) => {
        videoRef.current.playVideo(e);
        setShow(!show);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('single_video')} onClick={handleVideo}>
                {/* video */}
                <VideoContent
                    src={videoData.src}
                    size={cx([videoData.size])}
                    isSingleVideo={cx('isSingleVideo')}
                    singleControl
                    ref={videoRef}
                />

                {/*button close */}
                <Link to={routes.home}>
                    <button className={cx('btn_close')}>
                        <CloseIcon />
                    </button>
                </Link>
                {/*button next and prev video */}
                <div className={cx('btn_option_video')}>
                    {indexVideo !== 0 && (
                        <button
                            className={cx('btn_prev')}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIndexVideo((prev) => prev - 1);
                            }}
                        >
                            <ArrowUpIcon />
                        </button>
                    )}
                    {indexVideo < LIST_CONTENTS.length - 1 && (
                        <button
                            className={cx('btn_next')}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (indexVideo >= LIST_CONTENTS.length) return;
                                setIndexVideo((prev) => prev + 1);
                            }}
                        >
                            <ArrowDownIcon />
                        </button>
                    )}
                </div>
                {show && (
                    <button className={cx('btn_pause_video')}>
                        <PauseIcon width="7rem" height="7rem" />
                    </button>
                )}
            </div>
            <div className={cx('content')}>
                <div className={cx('content_header')}>
                    <div className={cx('info_video')}>
                        <div className={cx('heading')}>
                            <Image
                                src={videoData.avatar}
                                className={cx('avatar_user_post')}
                                alt="avatar_user_post"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/faca51860e536bc4ab8dec4e74770a65.jpeg?lk3s=a5d48078&nonce=83962&refresh_token=daacf4b0c022cb475c1fe646ccfce982&x-expires=1720317600&x-signature=tOnJDqpHOn2dNcAZ7Quw89jhMfQ%3D&shp=a5d48078&shcp=81f88b70"
                            />
                            <div className={cx('user_post')}>
                                <p className={cx('user_name')}>{videoData.username}</p>
                                <span className={cx('nick_name')}>{videoData.nickname}</span>
                                <span className={cx('time_post')}>{videoData.timePost}</span>
                            </div>
                            <Button primary className={cx('btn_follow')}>
                                Follow
                            </Button>
                        </div>
                        <p className={cx('des_video')}>
                            {/* giao diện hơi hổ báo tí thôi chớ tâm hồn 👶🐃 lắm, vợ liếc nhẹ một phát là đổ mồ hôi liền
                            =)){' '} */}
                            {videoData.describe}
                        </p>
                        <div className={cx('music_link')}>
                            <MusicNoteIcon />
                            <p className={cx('link')}>{videoData.music_link}</p>
                        </div>
                    </div>

                    <div className={cx('btn_action_post')}>
                        <ButtonFavorite like={120000} className={cx('btn_item')} styles />
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
                        {COMMENTS.map((commentItem) => (
                            <Comments key={commentItem.userId} comment={commentItem} />
                        ))}
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
