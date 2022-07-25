import {Response, Request} from "express";
import { Winner } from "../../custom_modules/winner";
/**
 * @param {Request} req returns request body
 * @param {Response} res returns response
*/
async function HomeController(req: Request, res: Response): Promise<void> {
  const time = new Date().getTime();
  const tickets = new Winner.Tickets()
  res.send({
    msg: "Api Ready to go!",
    params: req.params,
    time: time,
    tickets: await tickets.all(),
    winner: await tickets.randomTicket()
  });
}
export default HomeController;
