// import { FireStore } from '../../database/index';
import { FindGameByDays, weekdays, day } from './findDocuments'
import { weeklyLotto } from "../hardCode"

export class Game {
    all_games : any = []
    game : any = {}

    constructor () {

    }
    
    async current_game () {
        await FindGameByDays(weeklyLotto)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.game = doc.data()
                this.game.uid = doc.id
                this.all_games.push(this.game)
            });
        })
        .catch((error) => {
            return error;
        });

        return {
            today : weekdays[day],
            games: this.all_games
        }

    }
}