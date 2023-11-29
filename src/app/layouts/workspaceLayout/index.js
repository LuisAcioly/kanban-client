import React, { useState, useEffect, useContext } from 'react';
import WorkspaceModal from '../../components/workspaceModal';
import Button from '@mui/material/Button';
import { useApi } from '../../hooks/useApi';
import { AuthContext } from '../../contexts/authContext';

import './styles.css'
import WorkspaceCard from '../../components/workspaceCard';

const WorkspaceLayout = () => {
    const [open, setOpen] = useState(false);
    const [workspaces, setWorkspaces] = useState([]);
    const [rows, setRows] = useState([]);
    const context = useContext(AuthContext);
    const api = useApi();

    useEffect(() => {
        const getWorkspaces = async () => {
            const result = await api.getUserWorkspaces(context.user.id);
            setWorkspaces(result.data)
            handleRows()
        }

        getWorkspaces();
    }, []);

    useEffect(() => {
        console.log(workspaces)
        handleRows();
    }, [workspaces])

    const handleRows = () => {
        const rowsNumber = Math.ceil(workspaces.length/4);
        let rowsList = new Array(rowsNumber).fill([])
        let array = [];
        let count = 0;
        for(let i = 0; i < rowsNumber; i++){
            for (let j = 0; j < 4; j++) {
                if(count < workspaces.length){
                    array.push(count);
                    count = count+1;
                }
            }
            rowsList[i] = array;
            array = [];
        }

        setRows(rowsList)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSave = (workspace) => {
        setWorkspaces([workspace, ...workspaces])
        setOpen(false);
    }

    return (
        <div className='workspaceLayout'>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Adicionar Área de Trabalho
            </Button>
            {rows.map((row, index) => {
                return (
                    <div className='row'>
                        {row.map((workspaceIndex, index) => {
                            return (
                                <WorkspaceCard workspace={workspaces[workspaceIndex]}/>
                            )
                        })}
                    </div>
                )
            })}
            
            <WorkspaceModal open={open} handleClose={handleClose} onSave={onSave}/>
        </div>
    );
};

export default WorkspaceLayout;
