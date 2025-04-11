import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('account-item')} >
            <img
                className={cx('avatar')}
                src='https://cdn0918.cdn4s1.com/media/blog-images/meme-anh-meo-cute/meme-anh-meo-cute-39.jpg'
                alt=''
            />
            <div className={cx('item-info')} >
                <p className={cx('nick-name')}>
                    <strong>levanhieu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Lê Văn Hiếu</p>
            </div>
        </div>
    );
}
AccountItem.prototype = {

}
export default AccountItem;