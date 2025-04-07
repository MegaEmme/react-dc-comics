import Card from "./Card";
import comics from "../data/comics";

function Main() {
    return (
        <>
            <main>
                <Card Comics={comics} />
            </main>
        </>
    )
}

export default Main;