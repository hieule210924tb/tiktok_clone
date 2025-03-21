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
        <img className={classNames(styles.wapper, className)} ref={ref} src={fallback || src} alt="" {...props} onError={handleError} />
    )

})

export default Image;