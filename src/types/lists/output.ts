export type OutputListType = {
    id: string
    userId:string
    name:string
    items: Array<{
        itemId: string
        itemName: string
        itemStatus: "ACTIVE" | "DELETE"
    }>
}

export type ListType = {
    userId:string
    name:string
    items: Array<{
        itemId: string
        itemName: string
        itemStatus: "ACTIVE" | "DELETE"
    }>
}
