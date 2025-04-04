function Menu(props) {
    const menu = props.MenuVoices;
    return <ul className="menu-list">
        <li><a href="http://www.dc.com/characters" target="_blank">{menu[0]}</a></li>
        <li><a href="http://www.dc.com/comics" target="_blank">{menu[1]}</a></li>
        <li><a href="http://www.dc.com/movies" target="_blank">{menu[2]}</a></li>
        <li><a href="http://www.dc.com/tv" target="_blank">{menu[3]}</a></li>
        <li><a href="http://www.dc.com/games" target="_blank">{menu[4]}</a></li>
        <li><a href="https://shop.dc.com/collections/logo-shop" target="_blank">{menu[5]}</a></li>
        <li><a href="http://www.dc.com/videos" target="_blank">{menu[6]}</a></li>
        <li><a href="https://discord.com/servers/dc-official-1253043746090520626" target="_blank">{menu[7]}</a></li>
        <li><a href="http://www.dc.com/news" target="_blank">{menu[8]}</a></li>
        <li><a href="http://shop.dc.com" target="_blank">{menu[9]}</a></li>
    </ul>
}

export default Menu;
