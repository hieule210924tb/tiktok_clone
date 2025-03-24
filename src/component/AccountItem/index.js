import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/component/Image";
const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src='https://nupet.vn/wp-content/uploads/2023/10/hinh-nen-ngo-nghinh-anh-meo-cute-nupet-new-5.jpg' alt="hieu" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Van Hieu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>levanhieu</span>
            </div>
        </div>
    );
}

export default AccountItem;