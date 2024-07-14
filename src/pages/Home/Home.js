import ContentItem from '~/components/ContentItem';
import * as videos from '~/assets/videos';

const LIST_CONTENTS = [
    {
        nickname: 'kaythorxin1502',
        username: 'Kay Châu Anh',
        tick: true,
        describe: 'Nhạc hay quá nè kkk!',
        hashtag: '#music',
        music_link: 'Nhạc nền - Phạm Phúc Khang',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/21e9e4f05af5e40b410f9a54d6c4b475~c5_100x100.jpeg?lk3s=a5d48078&nonce=4089&refresh_token=0db44f0f00135fa3fc453fd985966072&x-expires=1721102400&x-signature=KBP0vabcWN4ziVW1%2Bf5yeQlC8U8%3D&shp=a5d48078&shcp=81f88b70',
        src: videos.default.kay,
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
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1884e40872c0107fc3dd373aefa37aee.jpeg?lk3s=a5d48078&nonce=35622&refresh_token=a7afef99b72a5d43a8297f3a092a638a&x-expires=1721102400&x-signature=R1%2FZKDL3mybmlNIb7D4iBict5j8%3D&shp=a5d48078&shcp=81f88b70',
        src: videos.default.it,
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
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a5e4cbdc6d91c559a0e139e2192c8180~c5_100x100.jpeg?lk3s=30310797&nonce=67897&refresh_token=b894490d690c2a9c107f9afd1e8ddf7b&x-expires=1721016000&x-signature=Evg2CVL7jOT55Q7wyYiKSFLJ8QU%3D&shp=30310797&shcp=-',
        src: videos.default.nonstop,
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
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/af8164c403f6a307c82514f48eb8edc6.jpeg?lk3s=30310797&nonce=18703&refresh_token=ae197ea2ad498959d8011f0fe9be6e83&x-expires=1721016000&x-signature=OiN3UDRyAcyjRdrit5BOTsNtFjE%3D&shp=30310797&shcp=-',
        src: videos.default.kieuChi,
        like: 120000000,
        share: 100,
        comments: 10000,
        bookMark: 59,
        size: 'small',
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
