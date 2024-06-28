import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const AccountList = [
    {
        name: 'vi.stu',
        username: 'vi.stu',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c89d35a3dee03ded1220e7a5f39f7741.jpeg?lk3s=a5d48078&nonce=59159&refresh_token=770c9c50d9409e048cc177ffc63a0e9f&x-expires=1719046800&x-signature=Ib%2B2affwapmDMwb5FUlBWPzaEIM%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        name: 'dongdendidev',
        username: 'Đồng Đen Đi Dev',
        avatar: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3bb4df65261ab2ca96a095e6936ce829.jpeg?lk3s=a5d48078&nonce=72763&refresh_token=4fd435b4237c3075201218d746331d9e&x-expires=1719046800&x-signature=ZBIadDlYS4w4DPT94FNtrVy3zio%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        name: 'dangcharlie2000',
        username: 'Đang Charlie',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/6036fca8d78226c485fd34289504fdd4~c5_100x100.jpeg?lk3s=a5d48078&nonce=71709&refresh_token=c4c63f289bca4ca58a4dd40e3cc43b72&x-expires=1719050400&x-signature=oQGnAH95cwQoZv1nkb7pmoRZVRo%3D&shp=a5d48078&shcp=81f88b70',
    },
];

function SuggestedAccount({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{title}</p>
            {AccountList.map((account, index) => (
                <AccountItem key={index} avatar={account.avatar} name={account.name} username={account.username} />
            ))}
            <p className={cx('more-detail_account')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestedAccount;
