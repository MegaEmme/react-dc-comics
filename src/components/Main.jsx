import Card from "./Card";
import comics from "../data/comics";

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <Card Comics={comics} />
                    <div className="current-series">
                        <span>CURRENT SERIES</span>
                    </div>
                </div>
                <div className="load-more">
                    <button className="load-more-button">LOAD MORE</button>
                </div>

            </main>
        </>
    )
}

export default Main;