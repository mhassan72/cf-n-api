import { FireStore } from '../../database/index';

export class Game {
    all_games : any = []
    game : any = {}

    constructor () {

    }
    
    async current_game () {
        const day = new Date().getDay()
        const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        await FireStore.collection("games/lotto/weekly").where("game_days", "array-contains", weekdays[day])
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
            games: this.all_games,
            game_day: false,
        }

    }
}