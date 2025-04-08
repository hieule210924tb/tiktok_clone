import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/component/Popper/Wrapper';
import AccountItem from '~/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/component/Icon/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService'

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500)

    const inputRef = useRef()
    useEffect(() => {
        if (!debouncedValue.trim()) { // trim loại bỏ khoảng trống và loại bỏ mặc định khi chưa search
            setSearchResult([]);
            return
        }
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result)

            setLoading(false)
        }
        fetchApi()
    }, [debouncedValue]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
    return (
        //thẻ div để xử lí lỗi trong tippy
        <div>
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {
                        !!searchValue && !loading && ( // nếu ko có value và loading thì mới hiển thị ra icon X
                            <button className={cx('clear')} onClick={handleClear} >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>)
                    }

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()} >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;