import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchTableRows } from "../../fetchers/getTableRows"
import { Button } from "../Button"
import { Field, Table } from "../panel/DataBase"
import Modal from 'react-modal';
import { modalStyles } from "./DatabaseList";
import { useState } from "react";
import { Input } from "../form/Input";
import { insertRow } from "../../fetchers/createNewRow";

type RowsPanelProps = {
    table: Table | undefined
}

function createObjectModel(columns: Field[]) {
    let obj: any = {}
    columns.forEach((col) => {
        if (col.name != 'id') {
            obj[col.name] = ''
        }
    })
    return obj
}

export const RowsPanel = ({ table }: RowsPanelProps) => {

    if (!table) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <h1>Start by selecting a table!</h1>
            </div>
        )
    }

    const name = table?.name;
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery(['getRows', name], fetchTableRows);
    const mutation = useMutation(insertRow, {
        onSuccess: () => {
            queryClient.invalidateQueries(['getRows', name])
        }
    })
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [newRowData, setNewRowData] = useState(createObjectModel(table?.columns!));

    const closeModal = () => {
        setNewRowData({});
        setModalIsOpen(false);
    }

    if (isLoading || !table) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div role="status">
                    <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="bg-red-100 rounded-lg text-red-500 w-1/3 p-4">
                    <header className="font-bold text-opacity-100">Error</header>
                    <br />
                    <p className="text-opacity-100">{JSON.stringify(error)}</p>
                </div>
            </div>
        )
    }

    if (data && data.error) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="bg-red-100 rounded-lg text-red-500 w-1/3 p-4">
                    <header className="font-bold text-opacity-100">Error</header>
                    <br />
                    <p className="text-opacity-100">{data.msg}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-[85vw] overflow-x-scroll">
            <table className="table w-full">
                <thead>
                    <tr className={`table-row gap-32 text-xl uppercase border-b-2 ${table.columns.length > 8 ? 'w-max' : 'w-full'}`}>
                        {table.columns.map((c, idx) => <th className={"text-left py-5" + (idx == 0 && ' pl-16')}>{c.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data!.rows.map((row: any) => {
                        return (
                            <tr className={`table-row gap-32 text-md border-b-2 ${table.columns.length > 8 ? 'w-max' : 'w-full'}`}>
                                {table.columns.map((c, idx) => <td className={"text-left py-5" + (idx == 0 && ' pl-16')}>{row[c.name]}</td>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="absolute bottom-12 right-12">
                <Button text="New Row" isAdmin={true} isDefault={true} onClick={() => setModalIsOpen(true)} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={modalStyles}
            >
                <div className="flex flex-col gap-4 text-center w-[50rem] items-center">
                    <h1 className="text-2xl font-bold">NEW ROW</h1>
                    {table.columns.map((col) => {
                        if (col.name != 'id') {
                            return (
                                <Input
                                    type="text"
                                    placeholder={col.name}
                                    value={newRowData[col.name]}
                                    onChange={(e: any) => setNewRowData((prev: any) => ({ ...prev, [col.name]: e.target.value }))}
                                />
                            )
                        }
                    })}
                    <Button text="Create row" isAdmin={true} isDefault={true} onClick={() => {
                        mutation.mutate({ table: name!, rowData: newRowData })
                        closeModal();
                    }} />
                </div>
            </Modal>
        </div>
    )
}