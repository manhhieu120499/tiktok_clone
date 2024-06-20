import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    FollowIcon,
    FollowIconIsActive,
    HomeIcon,
    HomeIconIsActive,
    LiveIcon,
    LiveIconIsActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconIsActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowIconIsActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconIsActive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
