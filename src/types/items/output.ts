export type OutputItemType = {
    id: string
    name: string
    status: "UNDONE"|"DONE"|"DELETE"
    dates: Array<string>
}

export type ItemType = {
    name: string
    status: "UNDONE"|"DONE"|"DELETE"
    dates: Array<string>
}
