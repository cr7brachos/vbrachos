import "./team-card-style.scss";

const TeamCard = ({ teamData }) => {
    const { title, content } = teamData;
    return (
        
        <div className="team-card-container">
            <span className="title">{title}</span>
            <span className="content">{content}</span>
        </div>
    )
}

export default TeamCard;