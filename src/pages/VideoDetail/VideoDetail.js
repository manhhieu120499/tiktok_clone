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
import { useLocation, useNavigate } from 'react-router-dom';
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
const LIST_CONTENTS_FOLLOW = [
    {
        nickname: 'naiverosieads',
        username: 'Hồng Ngốc Đây',
        tick: true,
        describe: 'Chúng tôi thích hỏi vì chúng tôi muốn nũng nịu xíu thoi 😖',
        hashtag: '#naiverosie',
        music_link: 'nhạc nền - Hồng ngốc đây - Hồng Ngốc Đây',
        src: videos.default.hong,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa9877b1103572aba0ca7b392229709f.jpeg?lk3s=a5d48078&nonce=14119&refresh_token=1f9fbd7948a52f67f4b6736dd99f990d&x-expires=1719716400&x-signature=eLrBpPhKTn47GOjyTBZjhRrAJcc%3D&shp=a5d48078&shcp=81f88b70',
        like: 301000,
        share: 120,
        comments: 8215,
        bookMark: 2013,
        followed: true,
        size: 'small',
    },
    {
        nickname: 'vi.stu',
        username: 'vi.stu',
        tick: true,
        describe: 'Hiệu ứng hay vãi ae ạ 😍#laptrinh#vistu_laptrinh#vistu',
        hashtag: 'CapCut · Edit like a pro',
        music_link: 'nhạc nền - vi.stu',
        src: videos.default.vistu,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c89d35a3dee03ded1220e7a5f39f7741.jpeg?lk3s=a5d48078&nonce=83258&refresh_token=227a0a1172e39b174313dc436bce4a99&x-expires=1719712800&x-signature=wqBSdf4J%2BOBhW3sUW70l51dEOE8%3D&shp=a5d48078&shcp=81f88b70',
        like: 525,
        share: 120,
        comments: 43,
        bookMark: 247,
        followed: true,
        size: 'small',
    },
    {
        nickname: 'trunrau',
        username: 'Trun Râu',
        tick: true,
        describe: 'Dạo này hay Bị Suy mà suy nhạc nhé 😆 🧔🏽‍♀️❤️‍🩹🍻🔥🤘🏻"lao tâm khổ tứ - Thanh Hưng"',
        hashtag: 'CapCut · Edit like a pro',
        music_link: 'nhạc nền - Trun Râu',
        src: videos.default.trun,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0ba6916f81cf6589bbb83a1160fd193f.jpeg?lk3s=a5d48078&nonce=23044&refresh_token=754cb27991e8f3f56b1ba2d268422828&x-expires=1720933200&x-signature=E2mY2MTwFFKK5B6guohA%2B7tbqv0%3D&shp=a5d48078&shcp=81f88b70',
        like: 22540,
        share: 120,
        comments: 1172,
        bookMark: 18300,
        followed: true,
        size: 'small',
    },
];

function VideoDetail() {
    // dùng để lấy dữ liệu từ state trong Component Link của react-router-dom
    const data = useLocation();
    const listData = () => {
        let result = [];
        LIST_CONTENTS.forEach((item) => {
            if (item.nickname === data.state.nickname) {
                result = [...LIST_CONTENTS];
            }
        });
        LIST_CONTENTS_FOLLOW.forEach((item) => {
            if (item.nickname === data.state.nickname) {
                result = [...LIST_CONTENTS_FOLLOW];
            }
        });
        return result;
    };
    const [indexVideo, setIndexVideo] = useState(data.state.index);
    const videoData = indexVideo !== -1 ? listData()[indexVideo] : data.state;
    const videoRef = useRef();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleVideo = (e) => {
        videoRef.current.playVideo(e);
        setShow(!show);
    };

    const goBack = () => {
        navigate(-1);
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

                <button className={cx('btn_close')} onClick={goBack}>
                    <CloseIcon />
                </button>

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
                    {indexVideo < listData().length - 1 && (
                        <button
                            className={cx('btn_next')}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (indexVideo >= listData().length) return;
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
