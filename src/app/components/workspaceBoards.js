import React, { useState, useEffect, useContext } from 'react';
import BoardModal from './boardModal';
import AddBoardButton from './addBoardButton';
import { useApi } from '../hooks/useApi';
import BoardCard from './boardCard';

const WorkspaceBoards = ({workspaceId}) => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const api = useApi();

    

    const handleOpen = () => {
        setOpen(true);
    };

    const [boards, setBoards] = useState([{id: -1, name: '', workspaceId: -1}]);

    useEffect(() => {
        console.log(workspaceId)
        const getBoards = async () => {
            const result = await api.getWorkspacesBoards(workspaceId);
            setBoards([...result.data, ...boards])
            handleRows()
        }

        getBoards();
        handleRows();
    }, []);

    useEffect(() => {
        handleRows();
    }, [boards])

    const handleRows = () => {
        console.log(boards)
        const rowsNumber = Math.ceil(boards.length/4);
        let rowsList = new Array(rowsNumber).fill([])
        let array = [];
        let count = 0;
        for(let i = 0; i < rowsNumber; i++){
            for (let j = 0; j < 4; j++) {
                if(count < boards.length){
                    array.push(count);
                    count = count+1;
                }
            }
            rowsList[i] = array;
            array = [];
        }

        console.log(rowsList)
        setRows(rowsList)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const onSave = (board) => {
        setBoards([board, ...boards])
        setOpen(false);
    }

    return (
        <div className="workspaceBoardsHolder">
            <h1>Quadros</h1>
            <div className="boardsHolder">
                {rows.map((row, index) => {
                    return (
                        <div className='row'>
                            {row.map((boardIndex, index) => {
                                return (
                                    <AddBoardButton handleOpen={handleOpen} board={boards[boardIndex]}/>
                                );
                            })}
                        </div>
                    )
                })}
            </div>
            <BoardModal open={open} handleClose={handleClose} onSave={onSave} workspaceId={workspaceId}/>
        </div>
    )
}

export default WorkspaceBoards;