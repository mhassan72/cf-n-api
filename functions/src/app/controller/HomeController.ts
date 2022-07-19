import {Response, Request} from "express";
/**
 * @param {Request} req returns request body
 * @param {Response} res returns response
*/
function HomeController(req: Request, res: Response): void {
  res.send({
    msg: "Api Ready to go!",
    params: req.params,
  });
}

export default HomeController;
