import { useContext } from "react";
import { TeamContext } from "../contexts/team.managent.context";
import TeamCard from "../components/Team-Card/team-card-component";

const TeamManagement = () => {
    const { team } = useContext(TeamContext);
    return (
        <div>
            {team.map(( teams ) => (
                <TeamCard key={teams.id} teamData={teams}></TeamCard>
            ))}
        </div>
    )

}

export default TeamManagement;