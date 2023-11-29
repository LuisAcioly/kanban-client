import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {AuthContext} from '../contexts/authContext'

export const LoginButton = (props) => {

    const auth = useContext(AuthContext);
    
    const [disableButton, setDisableButton ] = useState(true);

    useEffect(() => {
        if(props.username === '' || props.password === ''){
            setDisableButton(true);
        }
        else {
            setDisableButton(false);
        }
      }, [props.username, props.password]);

    const onLogin = async () => {
        const isLogged = await auth.login(props.username, props.password);
        props.handleFeedback(isLogged);
    }

    return (
        <Button variant="outlined" onClick={onLogin} disabled={disableButton}>Entrar</Button>
    )
}