import ilustration from './ilustration.png'

const Right = () => {
    return (
        <div className="rightside">
            <img src={ilustration} alt='ilustration'/>
            <div className='for-text'>
                <h1>What is ResPhot?</h1>
                <p>
                ResPhot is an web application that used for restored 
                old photos and coloring black and white image
                </p>
            </div>
        </div>
    )
}

export default Right; 
