import express, { Express, Request, Response } from "express";
import cors from "cors";

import { IHttpStatusesType } from "./@types/models";

const HTTP_STATUSES: IHttpStatusesType = {
    OK_200: 200,
    NON_AUTHORITATIVE_INFORMATION_203: 203,
    INTERNAL_SERVER_ERROR_500: 500,
    BAD_GATEWAY_502: 502,
};

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK_200).send("ProSharaga" as string);
});

const server = app.listen(PORT, () => {
   console.log(`Server started at port ${PORT}! Pid: ${process.pid}` as string);
});

server.on("error" as string, e => console.log(e));
