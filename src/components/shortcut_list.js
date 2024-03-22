import Shortcut from "./shortcut"

export default function ShortcutList() {
    const shortcut = [
        {name: "메일",
        link: "https://mail.naver.com",
        type: "type_mail"},
        {name: "카페",
        link: "https://cafe.naver.com",
        type: "type_cafe"},
        {name: "블로그",
        link: "https://blog.naver.com",
        type: "type_blog"},
        {name: "쇼핑",
        link: "https://shopping.naver.com",
        type: "type_shopping"},
        {name: "뉴스",
        link: "https://news.naver.com",
        type: "type_news"},
        {name: "증권",
        link: "https://finance.naver.com",
        type: "type_stock"},
        {name: "부동산",
        link: "https://land.naver.com",
        type: "type_real"},
        {name: "지도",
        link: "https://map.naver.com",
        type: "type_map"},
        {name: "웹툰",
        link: "https://comic.naver.com",
        type: "type_webtoon"}
    ]
    return(<div className="shortcut_area">
        <ul className="shortcut_list">
            {shortcut.map((item) => 
                <Shortcut name={item.name} link={item.link} type={item.type}/>
            )}
        </ul>
    </div>)
}