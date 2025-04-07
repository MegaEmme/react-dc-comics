function Menu(props) {
    const menu = props.MenuVoices;
    return (
        <>
            {menu.map(param =>
                <ul className="menu-list" key={param.id}>
                    <li><a href={param.site} target="_blank">{param.title}</a></li>
                </ul>
            )}
        </>
    )
}

export default Menu;
