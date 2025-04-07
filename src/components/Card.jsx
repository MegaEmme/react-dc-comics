function Card(props) {
    const comics = props.Comics;
    return (
        <>
            {comics.map(element =>
                <div key={element.id} className="card">
                    <img className="card-image" src={element.thumb} alt={element.title} />
                    <h4>{element.title}</h4>
                </div>
            )}
        </>
    )
}

export default Card;