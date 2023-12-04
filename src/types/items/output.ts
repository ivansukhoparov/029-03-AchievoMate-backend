export type OutputItemType = {
    id: string
    name: string
    status: "ACTIVE" | "DELETE"
    dates: Array<string>
}

export type ItemType = {
    name: string
    status: "ACTIVE" | "DELETE"
    dates: Array<string>
}
