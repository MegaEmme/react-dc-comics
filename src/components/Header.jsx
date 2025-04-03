import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return <header>
        <figure>
            <Logo />
        </figure>
        <nav>
            <Menu />
        </nav>
    </header>
}

export default Header;