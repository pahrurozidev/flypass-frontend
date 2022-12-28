import React from 'react';
import { useHistory } from 'react-router-use-history'
import { API } from '../../services';

// TODO: Leave it to your imagination
function IsAdmin({ children }) {
    const history = useHistory();
    const token = localStorage.getItem("token");
    !token && history.push('/login');

    API.whoAmI().then((user) => {
        user.roleId !== 1 && history.push('/');
    });

    return children;
}

export default IsAdmin;