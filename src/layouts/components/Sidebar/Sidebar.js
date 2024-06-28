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
import SuggestedAccount from '~/components/SuggestedAccount';
import SidebarBrand from './SidebarBrand';

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
            <SuggestedAccount title="Suggested Accounts" />
            <SuggestedAccount title="Following Accounts" />
            <SidebarBrand />
        </aside>
    );
}

export default Sidebar;
