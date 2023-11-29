// ModalComponent.js
import React, { useState, useContext, useEffect  } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './styles.css'
import UsersSelect from './usersSelect';
import { AuthContext } from '../contexts/authContext';
import { useApi } from '../hooks/useApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #1976d2',
    boxShadow: 24,
    p: 4,
};

const WorkspaceSelectModal = ({ open, handleClose, users, onSave }) => {
    const [wkUsers, setWkUsers] = useState(users);

    const handleSave = async () => {
        onSave(wkUsers)
    }

    const onSelect = (selectedUsers) => {
        setWkUsers(selectedUsers)
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h2 className='workspaceModalTitle'>
                    Convidar membros da Área de trabalho
                </h2>
                <div className='workspaceUsersHolder'>
                    <UsersSelect onSelect={onSelect} wkUsers={users}/>
                </div>
                <div className='buttonsHolder'>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Convidar
                    </Button>
                    <Button variant="outlined" onClick={handleClose} sx={{ marginLeft: 2 }}>Cancelar</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default WorkspaceSelectModal;
