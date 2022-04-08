import { Player } from "./player";

export class Team {
    playerA!: Player;
    playerB!: Player;
    matches!: 0;
    wins!: number;
    loss!: number;
    balance!: number;
}