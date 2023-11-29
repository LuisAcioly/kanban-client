// ModalComponent.js
import React, { useState, useContext  } from 'react';
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

const WorkspaceModal = ({ open, handleClose, onSave }) => {
    const [name, setName] = useState('');
    const context = useContext(AuthContext);
    const api = useApi();

    const handleSave = async () => {
        const response = await api.createWorkspace(name, context.user.id);
        onSave(response.data)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }


    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h2 className='workspaceModalTitle'>
                    Adicionar Área de trabalho
                </h2>
                <div className='workspaceNameHolder'>
                    <TextField id="standard-basic" label="Nome" variant="standard" sx={{ width: '100%' }} value={name} onChange={handleName}/>
                </div>
                <div className='buttonsHolder'>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Salvar
                    </Button>
                    <Button variant="outlined" onClick={handleClose} sx={{ marginLeft: 2 }}>Cancelar</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default WorkspaceModal;
