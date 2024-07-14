import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const AccountList = [
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c89d35a3dee03ded1220e7a5f39f7741.jpeg?lk3s=30310797&nonce=12528&refresh_token=67a6bddbecb59cae804934ac11acf7ed&x-expires=1721016000&x-signature=GQI63SgmCOMPfPWEacFFDoAOA4A%3D&shp=30310797&shcp=-',
        name: 'vi.stu',
        username: 'vi.stu',
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2318d1cc144c0627dfb2f4e61e09d9a4.jpeg?lk3s=30310797&nonce=35293&refresh_token=8b245c2a26d511b98209a298312fe59d&x-expires=1721016000&x-signature=i0v0bSifbT7rGEmrwChDd14g5v0%3D&shp=30310797&shcp=-',
        name: 'dongdendidev',
        username: 'Đồng Đen Đi Dev',
    },
    {
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/6036fca8d78226c485fd34289504fdd4~c5_100x100.jpeg?lk3s=30310797&nonce=60498&refresh_token=d61eaa62c954966ca3a15384fee8e84d&x-expires=1721016000&x-signature=%2B5O5WVbwdtdHEwr0zY8StxVOmIY%3D&shp=30310797&shcp=-',
        name: 'dangcharlie2000',
        username: 'Đang Charlie',
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
