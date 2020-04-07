import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Avatar, Button, Link, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Input from '~/components/base/forms/input';
import Styles from './styles';

import { loginRequest } from '~/store/modules/auth/actions';

const useStyles = makeStyles(Styles);

// Validação
const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O E-mail é obrigatório'),
    password: Yup.string().required('A Senha é obrigatório'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const classes = useStyles();

    function handleSubmit({ email, password }) {
        dispatch(loginRequest(email, password));
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Base Admin
                </Typography>
                <Form
                    schema={schema}
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <Input
                        margin="normal"
                        id="email"
                        label="E-mail"
                        name="email"
                        autoFocus
                        disabled={loading}
                    />
                    <Input
                        margin="normal"
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        disabled={loading}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        className={classes.submit}
                    >
                        {loading ? 'Carregando...' : 'Acessar'}
                    </Button>
                    <Typography align="center">
                        <Link href="#" variant="body2">
                            Esqueci minha senha
                        </Link>
                    </Typography>
                </Form>
            </div>
        </Container>
    );
}
