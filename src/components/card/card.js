import './card.css'

const Card = ({ Number, Desc }) => {
    return (
        <div className="card1">
            <p className='text-center mt-4 m-0'>{Desc}</p>
            <h1 className='text-center'>{Number}</h1>
        </div>

    )
}

export default Card