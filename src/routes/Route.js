import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import BaseLayout from '~/pages/_layouts/base-layout';
import Login from '~/pages/Login';

import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/" />;
    }

    // Se estiver logado carrega template base se não comp. Login
    const Layout = signed ? BaseLayout : Login;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
