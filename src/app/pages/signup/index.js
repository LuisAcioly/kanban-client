import './styles.css'
import TextField from '@mui/material/TextField';
import Icon from './icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {SignUpButton} from '../../components/signUpButton';

export const SignUp = () => {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const navigate = useNavigate();

    const handleUser = (event) => {
        setUser(event.target.value)
    }

    const handlePass = (event) => {
        setPass(event.target.value)
    }

    const handleFeedback = (feedback) => {
        if(feedback){
            navigate('/login')
        }
        setHelperText('Usuário já existe!');
        setError(true);
    }

    const handleBack = () => {
        navigate('/login');
    }

    return (
        <main>
            <div className='login'>
                
                <div className='icon'>
                    <Icon/> Kanban - Cadastrar
                </div>

                <TextField 
                    id="standard-basic" 
                    label="Usuário" 
                    variant="standard" 
                    value={username} 
                    error={error}
                    helperText={helperText}
                    onChange={handleUser}/>
                <div className='separator'/>

                <TextField 
                    id="standard-basic" 
                    label="Senha"
                    variant="standard" 
                    value={password} 
                    type="password"
                    error={error}
                    helperText={helperText}
                    onChange={handlePass}/>
                <div className='separator'/>

                <SignUpButton username={username} password={password} handleFeedback={handleFeedback}/>
                <button className='signup' onClick={handleBack}>Voltar</button>
            </div>
        </main>
    );
}