import config from '~/config';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveIcon, LiveActiveIcon, UseGroupIcon, UseGroupActiveIcon } from '~/component/Icon';
const cx = classNames.bind(styles)
function Sidebar() {
    return <aside>
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For you' icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem title='Following' icon={<UseGroupIcon />} activeIcon={<UseGroupActiveIcon />} to={config.routes.following} />
                <MenuItem title='LIVE' icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
        </div>
    </aside>
}

export default Sidebar;