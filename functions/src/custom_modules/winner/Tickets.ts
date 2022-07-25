import { FireStore } from '../../database/index';

export class Tickets {
    ticketIds: any = []

    async all () {
        await FireStore.collection("tickets")
        // .where("game.title", "==", "")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let ticket = doc.data()
                ticket.uid = doc.id
                this.ticketIds.push(doc.id)
            });
        })
        .catch((error) => {
            return error;
        });
        return { ids: this.ticketIds}
    }

    randomTicket () {
        return this.ticketIds[Math.floor(Math.random() * this.ticketIds.length)]
    }

}
