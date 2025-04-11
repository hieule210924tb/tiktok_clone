import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser }
    from '@fortawesome/free-solid-svg-icons'; // Thay đổi icon
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import config from "~/config";

import Search from '../Search/Search';
import Button from '~/component/Button/Button';
import Menu from '~/component/Popper/Menu/Menu';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { UploadIcon, MessageIcon, InboxIcon } from '~/component/Icon/Icons';
import Image from '~/component/Image/Image';
const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcust'
    }
]
function Header() {

    const currentUser = false

    //Handle logic
    const handleMenuOnchange = (menuItem) => {
        console.log(menuItem);
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx("logo-link")}>
                <img src={images.logo} alt='TIK TOK' />
            </Link>

            {/* Search */}
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} content="Upload video" placement='bottom' >
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement='bottom' >
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement='bottom' >
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text >Upload</Button>
                        <Button primary >Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnchange}>
                    {currentUser ? (
                        <Image
                            src='https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-5.jpg'
                            className={cx('user-avatar')}
                            alt='Le Van Hieu'
                            fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E7mA4V9YpPQDz6G5pT7hGXwRgudt7XzwiA&s"
                        />
                    ) :
                        (<button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;