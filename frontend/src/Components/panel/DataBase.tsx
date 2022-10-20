import { useState } from "react"
import { DatabaseList } from "../databaseComponents/DatabaseList";
import { RowsPanel } from "../databaseComponents/RowsPanel";


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
    const [tables, setTables] = useState<Table[]>([
        { name: 'Produtos', fields: [{name: 'id', type: "INTEGER"}, {name: 'titulo', type: "TEXT"}, {name: 'preco', type: "INTEGER"}] }
    ])
    const [fakeData, setFakeData] = useState<any>([
        [
            { id: 1, titulo: 'Furadeira Bosch Angular', preco: 524 },
            { id: 2, titulo: 'Serra Elétrica Bosch Especial', preco: 321 },
            { id: 3, titulo: 'Parafusadeira a bateria com lanterna Bosch', preco: 876 }
        ]
    ])

    const selectTable = (index: number) => {
        setTableSelected(index) 
    }

    return (
        <div className="flex flex-row">
            <DatabaseList tables={tables} setTables={setTables} selectTable={selectTable}/>
            <RowsPanel table={tables[tableSelected]} fakeData={fakeData[tableSelected]} />
        </div>
    )
}