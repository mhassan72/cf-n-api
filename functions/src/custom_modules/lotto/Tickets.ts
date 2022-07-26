import { FireStore } from '../../database/index';

export class Tickets {
    ticketIds: any = []
    title: string = ''
    
    constructor (title: string) {
        this.title = title
    }

    async all () {
        await FireStore.collection("tickets").where("game.title", "==", this.title)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let ticket = doc.data()
                ticket.uid = doc.id
                this.sortIds(ticket)
            });
        })
        .catch((error) => {
            return error;
        });
        return { ids: this.ticketIds}
    }

    async sortIds(ticket: any) {
        const enddDate = new Date(ticket.game.end_date).getTime()
        const gameDates = await this.gameDate(enddDate)
        const select_winner = gameDates.map((date: any) => date.match)
        if (select_winner) {
            this.ticketIds.push({
                ticket_id: ticket.uid,
                player_id:  ticket.player.uid,
                select_winner: this.allAreTrue(gameDates)
            })
        }
    }

    allAreTrue (tickets: any[]) {
        return tickets.every(element => element.match === true)
    }

    async gameDate (date: number) {
        const today = new Date()
        const timestamp = new Date(date)
        return [
            { day: timestamp.getDate(), match: (timestamp.getDate() == today.getDate()) },
            { month: timestamp.getMonth(), match: (timestamp.getMonth() == today.getMonth()) },
            { year: timestamp.getFullYear(),  match: (timestamp.getFullYear() == today.getFullYear()) },
            { hours: timestamp.getHours(), match: (timestamp.getHours() < today.getHours()) }
        ]
    }

    randomTicket () {
        return this.ticketIds[Math.floor(Math.random() * this.ticketIds.length)]
    }

}
