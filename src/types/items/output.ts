export type OutputItemType = {
    id: string
    name: string
    listId: string
    status: "ACTIVE" | "DONE"
    dates: Array<string>
}

export type ItemType = {
    name: string
    listId: string
    status: "ACTIVE" | "DONE"
    dates: Array<string>
}
