import { FireStore } from "../../database";


//---------------------
// Find single document
interface FindDocument {
    collection: string,
    uid: string
}

function FindDoc (data: FindDocument) {
    return FireStore.collection(data.collection).doc(data.uid)
}
//------------------------
// Find games by week days
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day = new Date().getDay()

function FindGameByDays(collection: string) {
    return FireStore.collection(collection).where("game_days", "array-contains", weekdays[day])
}


export {
    weekdays,
    day,
    FindGameByDays,
    FindDoc
}