import * as videos from '~/assets/videos';
import ContentItem from '~/components/ContentItem';

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
    },
];

function Following() {
    return (
        <>
            {LIST_CONTENTS_FOLLOW.map((content, index) => (
                <ContentItem key={index} {...content} />
            ))}
        </>
    );
}

export default Following;
