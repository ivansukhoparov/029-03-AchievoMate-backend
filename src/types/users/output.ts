export type OutputUserType = {
    id: string
    name: string
    login: string
    password: string
    email: string
    lists: Array<{
        listId: string
        listName: string
    }>
}

export type UserType = {
    name: string
    login: string
    password: string
    email: string
    lists: Array<{
        listId: string
        listName: string
    }>
}
