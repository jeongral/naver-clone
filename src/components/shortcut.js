export default function Shortcut({name, link, type}) {
    const classType = `service_icon ${type}`;
    return (<li className="shortcut_item">
        <a href={link} className="link_service">
            <span className={classType}></span>
            <span className="service_name">{name}</span>
        </a>
    </li>)
}