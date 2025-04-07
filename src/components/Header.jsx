import Logo from "./Logo";
import Menu from "./Menu";

// const MenuVoices =
//     ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

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

