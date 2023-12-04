export type UpdateItemType = {
    name?: string
    status?: "ACTIVE" | "DONE" | "DELETE"
    newDate?: string
}

export type CreateItemType = {
    listId?: string
    name: string
}

