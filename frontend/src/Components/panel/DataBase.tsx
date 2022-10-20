import { useState } from "react"
import { DatabaseList } from "../databaseComponents/DatabaseList";


export type Field = {
    name: string
    type: 'TEXT' | 'INTEGER'
}

export type Table = {
    name: string
    fields: Field[]
}


export const DataBase = () => {
    
    const [tableSelected, setTableSelected] = useState<number>(0)
    const [tables, setTables] = useState<Table[]>([])    
    
    const showTables = () => {
        console.log(tables)
    }

    const selectTable = (index: number) => {
        setTableSelected(index) 
    }

    return (
        <div className="flex flex-row">
            <DatabaseList tables={tables} setTables={setTables} selectTable={selectTable}/>
            <div>{JSON.stringify(tables[tableSelected])}</div>
        </div>
    )
}