import './styles.css'
import TextField from '@mui/material/TextField';
import Icon from './icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginButton} from '../../components/loginButton'

export const Login = () => {
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
            navigate('/dashboard');
        }
        setHelperText('Usuário ou senha incorretos.');
        setError(true);
    }

    const handleSignUp = () => {
        navigate('/signUp')
    }

    return (
        <main>
            <div className='login'>
                
                <div className='icon'>
                    <Icon/> Kanban
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

                <LoginButton username={username} password={password} handleFeedback={handleFeedback}/>
                <button className='signup' onClick={handleSignUp}>Não possui conta? Clique aqui</button>
            </div>
        </main>
    );
}