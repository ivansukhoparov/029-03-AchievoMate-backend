import {Request} from "express";

export type RequestWithBody<B> = Request<{},{},B,{}>;

export type ErrorMessage = {
    message: string
    field: string
}
export type Errors = Array<ErrorMessage>
