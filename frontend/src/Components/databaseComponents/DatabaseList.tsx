import { Button } from "../Button";
import { useState } from "react";
import { Table } from "../panel/DataBase";
import Modal  from 'react-modal';
import { Input } from "../form/Input";
import { FieldComponent } from "./NewColumn";


Modal.setAppElement('#root')

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

type DatabaseListProps = {
    tables: Table[]
    setTables: React.Dispatch<React.SetStateAction<Table[]>>
    selectTable: (index: number) => void

}

export const DatabaseList = ({ tables, setTables, selectTable }: DatabaseListProps) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [newTableData, setNewTableData] = useState<Table>({
        name: '',
        fields: []
    })

    const addNewTable = () => {
        setTables([...tables, newTableData])
        closeModal()
    }

    const appendField = ( ) => {
        setNewTableData({...newTableData, fields: [...newTableData.fields, { name: '', type: 'TEXT' }]});
    }

    function closeModal() {
        setNewTableData({
            name: '',
            fields: []
        })
        setIsOpen(false);
    }
    
    function openModal() {
        setIsOpen(true);
    }
    
  
    return (
        <>
        <div className="bg-[#2d2d2d] flex flex-col h-[90vh]">
            <button
            className="bg-[transparent] border-2 text-white focus:outline-none mx-4 rounded-md my-8 hover:bg-[#767676] hover:border-[#767676]
                    p-1  px-10 flex justify-center gap-1 items-center transition-all "
            onClick={openModal}
            >
            <PlusIcon />
            NEW TABLE
            </button>
            {tables.map((t, index) => {
            return (
                <button
                className="bg-[#767676] border-2 border-transparent hover:border-2 text-white focus:outline-none mx-4
                        rounded-md my-2 hover:bg-[transparent] hover:border-[#767676] 
                        p-1  px-10 flex justify-center gap-1 items-center transition-all "
                onClick={() => selectTable(index)}>
                {t.name}
                </button>
            );
            })}
            
        </div>

        <div className="">
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            >
            <div className="flex flex-col gap-4 text-center w-[50rem] items-center">
                <h1 className="text-2xl font-bold">NEW TABLE</h1>
                <Input
                placeholder="Table name"
                type="string"
                value={newTableData.name}
                onChange={(e: any) =>
                    setNewTableData({ ...newTableData, name: e.target.value })
                }
                />
                {newTableData.fields.map((f, idx) => {
                return (
                    <FieldComponent
                    values={{
                        name: newTableData.fields[idx].name,
                        type: newTableData.fields[idx].type,
                    }}
                    onChanges={{
                        name: (e: any) =>
                        setNewTableData({
                            ...newTableData,
                            fields: newTableData.fields.map((f, _idx) => {
                            if (_idx === idx) {
                                return { ...f, name: e.target.value };
                            }

                            return f;
                            }),
                        }),
                        type: (e: any) =>
                        setNewTableData({
                            ...newTableData,
                            fields: newTableData.fields.map((f, _idx) => {
                            if (_idx === idx) {
                                return { ...f, type: e.target.value };
                            }

                            return f;
                            }),
                        }),
                    }}
                    />
                );
                })}
                <Button
                text="Add new field"
                isDefault={false}
                isAdmin={true}
                onClick={appendField}
                />
                <button
                className="bg-red-500 text-white p-4 rounded-xl self-end font-bold transition-all hover:bg-gray-900"
                onClick={addNewTable}
                >
                Create Table
                </button>
            </div>
            </Modal>
        </div>
        </>
    );
};


const PlusIcon = () => {
    return (
        <svg
            width="18"
            height="14"
            viewBox="0 0 199 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M184.233 77.9449H120.46V14.1718C120.46 6.34631 114.114 0 106.288 0H92.1167C84.2912 0 77.9449 6.34631 77.9449 14.1718V77.9449H14.1718C6.34631 
                    77.9449 0 84.2912 0 92.1167V106.288C0 114.114 6.34631 120.46 14.1718 120.46H77.9449V184.233C77.9449 192.059 84.2912 198.405 92.1167 198.405H106.288C114.114
                    198.405 120.46 192.059 120.46 184.233V120.46H184.233C192.059 120.46 198.405 114.114 198.405 106.288V92.1167C198.405 84.2912 192.059 77.9449
                    184.233 77.9449Z"
            fill="white"
            />
        </svg>
    )
}