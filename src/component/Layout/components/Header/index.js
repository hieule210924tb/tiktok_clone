import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'; // Thay đổi icon
import styles from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='TIK TOK' />
            <div className={cx('search')}>
                <input placeholder='Tìm kiếm' spellCheck={false} />
                {/* <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button> */}
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('active')}></div>
        </div>
    </header>
}

export default Header;