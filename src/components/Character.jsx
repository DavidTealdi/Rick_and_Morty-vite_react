function Character( element ) {
    return (
        <div className="text-center p-5">
            <h3>{element.character.name}</h3>
            <img className="img-fluid rounded-pill" src={element.character.image} alt={element.name}/>
            <p>{element.character.origin.name}</p>
        </div>
    )
}

export default Character