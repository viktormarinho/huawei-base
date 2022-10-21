import { Table } from "../panel/DataBase"

type RowsPanelProps ={
    table: Table
    fakeData: any[]
}

export const RowsPanel = ({table, fakeData}: RowsPanelProps) => {
    return(
        <div className="">
            <div className="border-b-2 mt-6 pl-6">
                <h1 className="text-2xl font-bold ">{table.name}</h1>
                <header className="flex flex-row gap-12 text-2xl items-center w-screen">
                    {table.fields.map(f => <span>{f.name}</span>)}
                </header>
                <div>
                    {fakeData.map(row => {
                        return (
                            <div className="flex flex-row gap-12 text-2xl items-center w-screen">
                                {table.fields.map(f => <span>{row[f.name]}</span>)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}