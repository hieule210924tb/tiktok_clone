import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss'
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(customFallback)
    }
    return (
        //Wapper
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt="" {...props} onError={handleError} />
    )

})
Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}
export default Image;