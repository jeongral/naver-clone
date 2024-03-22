import Shortcut from "./shortcut"

export default function ShortcutList() {
    const shortcut = [
        {name: "메일",
        link: "https://mail.naver.com"},
        {name: "카페",
        link: "https://cafe.naver.com"},
        {name: "블로그",
        link: "https://blog.naver.com"},
        {name: "쇼핑",
        link: "https://shopping.naver.com"},
        {name: "뉴스",
        link: "https://news.naver.com"},
        {name: "증권",
        link: "https://finance.naver.com"},
        {name: "부동산",
        link: "https://land.naver.com"},
        {name: "지도",
        link: "https://map.naver.com"},
        {name: "웹툰",
        link: "https://comic.naver.com"},
        {name: "치지직",
        link: "https://chzzk.naver.com"}
    ]
    return(<div className="shortcut_area">
        <ul className="shortcut_list">
            {shortcut.map((item) => 
                <Shortcut name={item.name} link={item.link} />
            )}
        </ul>
    </div>)
}