import { createContext, useState } from "react";
import TEAM_DATA from "../seeders/TeamManagement.json";

export const TeamContext = createContext({
    team: [], 
}); 


export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState(TEAM_DATA); //default value for team is TEAM_DATA
    const value = {team};
    return (
        <TeamContext.Provider value={value}>{ children }</TeamContext.Provider>
    )
}