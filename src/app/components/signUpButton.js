import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {AuthContext} from '../contexts/authContext'
import { useApi } from '../hooks/useApi';

export const SignUpButton = (props) => {

    const api = useApi();
    
    const [disableButton, setDisableButton ] = useState(true);

    useEffect(() => {
        if(props.username === '' || props.password === ''){
            setDisableButton(true);
        }
        else {
            setDisableButton(false);
        }
      }, [props.username, props.password]);

    const onSignUp = async () => {
        const sucess = await api.signUp(props.username, props.password);
        props.handleFeedback(sucess);
    }

    return (
        <Button variant="outlined" onClick={onSignUp} disabled={disableButton}>Cadastrar</Button>
    )
}