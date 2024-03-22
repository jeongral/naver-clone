import { BiSearchAlt } from "react-icons/bi";

export default function SearchBar() {
    return(<div className="search_area">
        <div className="search_group">
            <div className="search_group_inner">
                <h1 className="search_logo">
                    <a className="link_naver">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path>
                        </svg>
                    </a>
                </h1>
                <form>
                    <fieldset>
                        <div className="search_input_box">
                            <input className="search_input" placeholder="검색어를 입력해 주세요."></input>
                            <button className="btn_search">
                            <svg id="search-btn" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z"></path>
                                </svg>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>)
}