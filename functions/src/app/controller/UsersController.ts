import {Response, Request} from "express";
import findDocsByValue from "../../database/findDocsByValue";
/**
 * @param {Request} req returns request body
 * @param {Response} res returns response
*/
async function UsersController(req: Request, res: Response) {
  const time = new Date().getTime();
  const email = req.query.email;
  res.json({
    value: email,
    data: await findDocsByValue({
      value: email,
      collection: "users",
      field: "email",
    }),
    time: time,
  });
}

export default UsersController;
