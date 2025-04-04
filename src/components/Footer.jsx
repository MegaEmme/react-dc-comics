function Footer(props) {
    const dcComics = props.FooterListOne;
    const shop = props.FooterListTwo;
    const dc = props.FooterListThree;
    const sites = props.FooterListFour;
    return <footer>
        <div className="footer-top">
            <div className="footer-top-left">
                <ul className="footer-list">
                    <li>DC COMICS
                        <ul className="footer-list-inner">
                            <li><a href="#">{dcComics[0]}</a></li>
                            <li><a href="#">{dcComics[1]}</a></li>
                            <li><a href="#">{dcComics[2]}</a></li>
                            <li><a href="#">{dcComics[3]}</a></li>
                            <li><a href="#">{dcComics[4]}</a></li>
                            <li><a href="#">{dcComics[5]}</a></li>
                            <li><a href="#">{dcComics[6]}</a></li>
                        </ul>
                    </li>
                    <li>SHOP
                        <ul className="footer-list-inner">
                            <li><a href="#">{shop[0]}</a></li>
                            <li><a href="#">{shop[1]}</a></li>
                        </ul>
                    </li>
                    <li>DC
                        <ul className="footer-list-inner">
                            <li><a href="#">{dc[0]}</a></li>
                            <li><a href="#">{dc[1]}</a></li>
                            <li><a href="#">{dc[2]}</a></li>
                            <li><a href="#">{dc[3]}</a></li>
                            <li><a href="#">{dc[4]}</a></li>
                            <li><a href="#">{dc[5]}</a></li>
                            <li><a href="#">{dc[6]}</a></li>
                            <li><a href="#">{dc[7]}</a></li>
                            <li><a href="#">{dc[8]}</a></li>
                            <li><a href="#">{dc[9]}</a></li>
                            <li><a href="#">{dc[10]}</a></li>
                        </ul>
                    </li>
                    <li>SITES
                        <ul className="footer-list-inner">
                            <li><a href="#">{sites[0]}</a></li>
                            <li><a href="#">{sites[1]}</a></li>
                            <li><a href="#">{sites[2]}</a></li>
                            <li><a href="#">{sites[3]}</a></li>
                            <li><a href="https://www.google.it">DC Power Visa</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="footer-top-right"></div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <button className="sign-up-button"><a href="#">SIGN UP NOW!</a></button>
            </div>
            <div className="footer-bottom-right">
                <button className="follow-us-button"><a href="#">FOLLOW US</a></button>
                <div className="social-box">
                    <a href="#">
                        <div className="social facebook"></div>
                    </a>
                    <a href="#">
                        <div className="social twitter"></div>
                    </a>
                    <a href="https://www.youtube.com/@dcofficial" target="_blank">
                        <div className="social youtube"></div>
                    </a>
                    <a href="#">
                        <div className="social pinterest"></div>
                    </a>
                    <a href="#">
                        <div className="social periscope"></div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;