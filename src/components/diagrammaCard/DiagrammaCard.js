import "./diagrammaCard.css"

const DiagrammaCard = ({ Paragraf, Time }) => {
    return (
        <div className="card2 ms-2">
            <p className="text-center mt-4 p-0 m-0 card__desc">{Paragraf}</p>
            <strong className=" card__heading">{Time}</strong>
        </div>
    )
}

export default DiagrammaCard