export type UpdateListType={
    name?:string
    items?:Array<{
        itemId?: string
        itemName?: string
        itemStatus?: "ACTIVE" | "DELETE"
    }>
}
export type CreateListType={
    userId:string
    name:string
}

export type CreateListItemType = {
    itemId: string
    itemName: string
    itemStatus: "ACTIVE" | "DELETE"
}
