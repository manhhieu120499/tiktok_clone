import ContentItem from '~/components/ContentItem';
import * as videos from '~/assets/videos';

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
        timePost: '7d ago',
    },
];

function Home() {
    return (
        <>
            {LIST_CONTENTS.map((content, index) => (
                <ContentItem key={index} {...content} index={index} />
            ))}
        </>
    );
}

export default Home;
