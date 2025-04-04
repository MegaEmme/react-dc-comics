import Logo from "./Logo";
import Menu from "./Menu";

const MenuVoices =
    ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

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