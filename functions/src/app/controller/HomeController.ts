import {Response, Request} from "express";
import { Lotto } from "../../custom_modules/lotto";
/**
 * @param {Request} req returns request body
 * @param {Response} res returns response
*/
async function HomeController(req: Request, res: Response): Promise<void> {
  const time = new Date().getTime();
  const gameDay = await new Lotto.Game().current_game()
  const tickets = new Lotto.Tickets(gameDay.games[0].title)
  res.send({
    msg: "Api Ready to go!",
    params: req.params,
    time: time,
    game_day: gameDay,
    tickets: await tickets.all(),
    winner: await tickets.randomTicket()
  });
}
export default HomeController;
