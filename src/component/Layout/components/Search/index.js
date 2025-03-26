import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/component/Popper/Wrapper';
import AccountItem from '~/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/component/Icon';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef()
    useEffect(() => {
        if (!searchValue.trim()) { // trim loại bỏ khoảng trống và loại bỏ mặc định khi chưa search
            setSearchResult([]);
            return
        }
        setLoading(true)
        // encodeURIComponent : mã hóa đi các kí tự hợp lệ trên URL
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [searchValue]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {
                            searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))
                        }
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Tìm kiếm'
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {
                    !!searchValue && !loading && ( // nếu ko có value và loading thì mới hiển thị ra icon X
                        <button className={cx('clear')} onClick={handleClear} >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)
                }

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;