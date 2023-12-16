import express from "express"
import {listRouter} from "./routers/list-router";
import {authRouter} from "./routers/auth-router";
import {usersRouter} from "./routers/users-router";

export const app = express()

app.use(express.json())

app.use("/auth", authRouter );
app.use("/users", usersRouter);


