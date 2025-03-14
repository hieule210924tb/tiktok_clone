import styles from './DefautLayout.module.scss'
import classNames from 'classnames/bind';
import Header from "~/component/Layout/components/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)
function DefautLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>)
}

export default DefautLayout;