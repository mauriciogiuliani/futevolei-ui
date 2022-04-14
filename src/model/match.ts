import { Team } from "./team";

export interface Match {
    id: string;
    doubleA: Team;
    doubleB: Team;
    pointsDoubleA : number;
    pointsDoubleB: number;
}