export default function Shortcut({name, link}) {
    return (<li className="shortcut_item">
        <a href={link} className="link_service">
            <span className="service_icon"></span>
            <span className="service_name">{name}</span>
        </a>
    </li>)
}