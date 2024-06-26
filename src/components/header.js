import SearchBar from "./search_bar";
import ShortcutList from "./shortcut_list";

export default function Header() {
    return (<div className="header">
        <div className="header_inner">
            <SearchBar />
            <ShortcutList />
            <div className="menu_area"><button class="btn_menu"></button></div>
        </div>
    </div>)
}