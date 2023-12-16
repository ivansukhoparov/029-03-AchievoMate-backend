export type UpdateItemType = {
    name?: string
    status?: "ACTIVE" | "DELETE"
    newDate?: string
}

export type CreateItemType = {
    listId: string
    name: string
}

