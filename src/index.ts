import * as ff from '@google-cloud/functions-framework'
import type { HttpFunction } from "@google-cloud/functions-framework";

export const helloGET: HttpFunction =  async (req: ff.Request, res: ff.Response) => {
  res.send(`Hello, World!`);
};