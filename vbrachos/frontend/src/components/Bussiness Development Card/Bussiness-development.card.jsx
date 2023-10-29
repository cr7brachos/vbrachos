import "./bussiness-development.styles.scss";


const BussinessDevelopmentCard = ({title, target, text, image1, image2, image3}) => {
    return (
        <div className="container">
            <h1 className="bussiness-development">{title}</h1>
            <h2>{target}</h2>
            <img src={image1} ></img>
            <img src={image2}></img>
            <img src={image3} ></img>
            <p>{text}</p>
        </div>
    )
}

export default BussinessDevelopmentCard;