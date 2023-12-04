import {client} from "./db";
import {ItemType} from "../types/items/output";
import {UserType} from "../types/users/output";
import {ListType} from "../types/lists/output";

export const db = client.db("node-achievo-mate");

export const itemsCollection = db.collection<ItemType>("items");
export const listsCollection = db.collection<ListType>("lists");
export const usersCollection = db.collection<UserType>("users");
