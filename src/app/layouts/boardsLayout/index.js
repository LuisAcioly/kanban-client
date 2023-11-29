import React, { useState, useEffect, useContext } from 'react';
import { useApi } from '../../hooks/useApi';
import './styles.css'
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit'
import WorkspaceSelectModal from '../../components/workspaceSelectModal';
import CheckIcon from '@mui/icons-material/Check';
import WorkspaceBoards from '../../components/workspaceBoards';

const BoardsLayout = () => {
    const [workspace, setWorkspace] = useState();
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const {id} = useParams();
    const api = useApi();

    useEffect(() => {
        const getWorkspace = async () => {
            const result = await api.getWorkspace(id);
            console.log(result.data)
            setWorkspace(result.data)
            setName(result.data.name)
            setUsers(result.data.users)
            console.log(result.data.users)
        }

        getWorkspace();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setEdit(true)
    }

    const handleName = (e) => {
        let newWorkspace = workspace;
        newWorkspace.name = e.target.value;
        setWorkspace(newWorkspace)
        setName(e.target.value)
    }

    const onSave = async (wkUsers) => {
        const response = await api.updateWorkspaceUsers(workspace.id, wkUsers);
        console.log(response)
        setOpen(false);
    }

    const saveName = async () => {
        const response = await api.updateWorkspaceName(workspace.id, name);
        setEdit(false)
    }

    return (
        <div className='boardsLayout'>
            <div className='boardsHeader'>
                <div className='infoHolder'>
                    <div className='workspaceIcon'>
                        <h1>
                            {workspace?.name.substr(0, 1).toUpperCase()}
                        </h1>
                    </div>
                    <div className='actions'>
                        {!edit && 
                            <>
                                <h1>{workspace?.name}</h1>
                                <button onClick={handleEdit}>
                                    <EditIcon />
                                </button>
                            </>
                        }
                        {edit && 
                            <>
                                <TextField id="standard-basic" label="Nome" variant="standard" sx={{ width: '100%', marginTop: '0', marginBottom: '20px '}} value={workspace.name} onChange={handleName}/>
                                <button onClick={saveName}>
                                    <CheckIcon />
                                </button>
                            </>
                        }
                    </div>
                </div>
                <button className='inviteMembers' onClick={handleOpen}>
                    Convidar membros da Área de trabalho
                </button>
            </div>
            <div className='boardsDivider'/>
            <WorkspaceBoards workspaceId={id}/>
            <WorkspaceSelectModal open={open} handleClose={handleClose} onSave={onSave} users={users}/>
        </div>
    );
};

export default BoardsLayout;
