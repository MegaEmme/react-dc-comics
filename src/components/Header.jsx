import Logo from "./Logo";
import Menu from "./Menu";

const MenuVoices = [
    {
        id: "1",
        title: "CHARACTERS",
        site: "http://www.dc.com/characters"
    },
    {
        id: "2",
        title: "COMICS",
        site: "http://www.dc.com/comics"
    },
    {
        id: "3",
        title: "MOVIES",
        site: "http://www.dc.com/movies"
    },
    {
        id: "4",
        title: "TV",
        site: "http://www.dc.com/tv"
    },
    {
        id: "5",
        title: "GAMES",
        site: "http://www.dc.com/games"
    },
    {
        id: "6",
        title: "COLLECTIBLES",
        site: "https://shop.dc.com/collections/logo-shop"
    },
    {
        id: "7",
        title: "VIDEOS",
        site: "http://www.dc.com/videos"
    },
    {
        id: "8",
        title: "FANS",
        site: "https://discord.com/servers/dc-official-1253043746090520626"
    },
    {
        id: "9",
        title: "NEWS",
        site: "http://www.dc.com/news"
    },
    {
        id: "10",
        title: "SHOP",
        site: "http://shop.dc.com"
    }
]


function Header() {
    return <header>
        <figure>
            <Logo />
        </figure>
        <nav>
            <Menu MenuVoices={MenuVoices} />
        </nav>
    </header>
}

export default Header;

