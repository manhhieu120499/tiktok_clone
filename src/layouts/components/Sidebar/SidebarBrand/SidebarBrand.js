/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './SidebarBrand.module.scss';

const cx = classNames.bind(styles);

function SidebarBrand() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-brand')}>
                <div className={cx('list-brand-item')}>
                    <h2 className={cx('topic')}>Company</h2>
                    <div className={cx('brands_name')}>
                        <a href="#" className={cx('brand-link')}>
                            About
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Newsroom
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Contact
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Careers
                        </a>
                    </div>
                </div>
                <div className={cx('list-brand-item')}>
                    <h2 className={cx('topic')}>Program</h2>
                    <div className={cx('brands_name')}>
                        <a href="#" className={cx('brand-link')}>
                            TikTok for Good
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Advertise
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            TikTok Live Creator Networks
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Developer
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Transparency
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            TikTok Rewards
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            TikTok Embedded
                        </a>
                    </div>
                </div>
                <div className={cx('list-brand-item')}>
                    <h2 className={cx('topic')}>Terms & Policies</h2>
                    <div className={cx('brands_name')}>
                        <a href="#" className={cx('brand-link')}>
                            Help
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Safety
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Terms
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Privacy Policy
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Privacy Center
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Creator Academy
                        </a>
                        <a href="#" className={cx('brand-link')}>
                            Community Guidelines
                        </a>
                    </div>
                </div>
                <div className={cx('list-brand-item')}>
                    <p className={cx('tiktok_info')}>@2024 TikTok</p>
                </div>
            </div>
        </div>
    );
}

export default SidebarBrand;
