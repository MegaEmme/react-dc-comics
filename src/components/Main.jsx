import Card from "./Card";
import comics from "../data/comics";

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <Card Comics={comics} />
                </div>
            </main>
        </>
    )
}

export default Main;