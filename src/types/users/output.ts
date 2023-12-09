export type OutputUserType = {
    id: string
    name: string
    login: string
    email: string
    lists: Array<{
        listId: string
        listName: string
    }>
}

export type UserType = {
    name: string
    login: string
    email: string
    hash: string
    deleted: boolean
    lists: Array<{
        listId: string
        listName: string
    }>
}

export type UserTypeWithId = {
    id: string
    name: string
    login: string
    email: string
    hash: string
    deleted: boolean
    lists: Array<{
        listId: string
        listName: string
    }>
}
