export type Field = {
    name: string
    type: string
    maxLength?: number

}

export type Column = {
    name: string
    type: string
}

export type TableOptions = {
    name: string
    fields: Field[]
}

export type TableParams = {
    table: string
}

export type MatchQuery = {
    column: string,
    value: any
}

export type TablePatchType = {
    updateData: any,
    matchQuery: MatchQuery
}