import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    children,
    onClick,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if (disabled) { // khi có disabled thì ko onClick được
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') { // nếu bắt đầu bằng on hoặc hàm 
                delete props[key]
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classses = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        text,
        large,
        disabled,
        rounded,
    })
    return (
        <Comp className={classses} {...props}>
            {leftIcon && <span className={cx('icon')} >{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')} >{rightIcon}</span>}
        </Comp>
    )
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node.isRequired,
    rightIcon: PropTypes.node.isRequired,
}
export default Button;