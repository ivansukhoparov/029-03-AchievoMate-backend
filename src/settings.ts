import express from "express"
import {listRouter} from "./routers/list-router";
import {authRouter} from "./routers/auth-router";
import {usersRouter} from "./routers/users-router";
import {itemsRouter} from "./routers/items-router";

export const app = express()

app.use(express.json())

app.use("/auth", authRouter );
app.use("/users", usersRouter);
app.use("/lists", listRouter);
app.use("/items", itemsRouter);
