import { FireStore } from "../../database";

export const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
export const day = new Date().getDay()

export function FindGameByDays(collection: string) {
    return FireStore.collection(collection).where("game_days", "array-contains", weekdays[day])
}