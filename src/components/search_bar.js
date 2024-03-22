import { BiSearchAlt } from "react-icons/bi";

export default function SearchBar() {
    return(<div className="search_area">
        <div className="search_group">
            <div className="search_group_inner">
                <h1 className="search_logo">
                </h1>
                <form>
                    <fieldset>
                        <div className="search_input_box">
                            <input className="search_input" placeholder="검색어를 입력해 주세요."></input>
                            <button className="btn_search">
                                <BiSearchAlt className="icon"/>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>)
}