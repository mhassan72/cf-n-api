import { FindGameByDays } from "../custom_modules/lotto/findDocuments"
import { weeklyLotto } from "../custom_modules/hardCode"
// lock weekly games only
export default async function LockGame() {
    await FindGameByDays(weeklyLotto).get()
    .then((querySnapshot) => {
        const all_games : any = []
        querySnapshot.forEach((doc) => {
            let game : any = doc.data()
            game.uid = doc.id
            all_games.push(game)
        })
        console.log(all_games)
    })
    .catch((error) => {
        return error;
    })
}