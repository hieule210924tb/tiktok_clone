import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import Tippy from "@tippyjs/react/headless";

import PopperWrapper from '~/component/Popper/Wrapper';
import Header from "./Header";
import MenuItem from "./MenuItem";
import { useState } from "react";
const cx = classNames.bind(styles)

const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1] // lấy phần tử cuối mảng
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children // chuyển đổi sang  true , false
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                } else {
                    onChange(item)
                }
            }} />
        })
    }
    return (
        <Tippy
            offset={[12, 8]}
            delay={[0, 700]}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')} >
                        {/*  nếu vào cấp 1 thì hiện Header */}
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu;