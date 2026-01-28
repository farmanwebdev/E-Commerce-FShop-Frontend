import api from "../../utils/api";
import { authActions } from '../auth-slice';
import { uiActions } from "../ui-slice";


export const login = (payload) => {
    return async dispatch => {
        dispatch(uiActions.setLoginLoading(true));

        try {
            const response = await api.post("/auth/login", payload);
            const data = response.data;

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                dispatch(authActions.login(data));
                
                // Show success notification
                dispatch(uiActions.showNotification({
                    type: 'success',
                    message: `Welcome back, ${data.user.name || 'User'}!`
                }));
            }
            dispatch(uiActions.setLoginLoading(false));
        } catch (error) {
            console.error("Login error:", error);
            
            // Show error notification
            const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
            dispatch(uiActions.showNotification({
                type: 'error',
                message: errorMessage
            }));
            
            dispatch(uiActions.setLoginLoading(false));
        }
    }
};




export const register = (payload) => {
    return async dispatch => {
        dispatch(uiActions.setRegisterLoading(true));

        try {
            const response = await api.post("/auth/register", payload);
            const data = response.data;

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                dispatch(authActions.register(data));
                
                // Show success notification
                dispatch(uiActions.showNotification({
                    type: 'success',
                    message: 'Account created successfully!'
                }));
            }
            dispatch(uiActions.setRegisterLoading(false));
        } catch (error) {
            console.error("Registration error:", error);
            
            // Show error notification
            const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
            dispatch(uiActions.showNotification({
                type: 'error',
                message: errorMessage
            }));
            
            dispatch(uiActions.setRegisterLoading(false));
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        try {
            await api.post('/auth/logout');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(authActions.logout());
            
            // Show logout notification
            dispatch(uiActions.showNotification({
                type: 'info',
                message: 'You have been logged out.'
            }));
        } catch (error) {
            console.log(error);
            dispatch(authActions.logout());
        }
    }
};
