import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gridView: true,
    productDetailLoading: false,
    productsLoading: false,
    loginLoading: false,
    registerLoading: false,
    addPrductLoading: false,
    updateProductLoading: false,
    notification: null
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleView(state) {
            state.gridView = !state.gridView;
        },
        pDetailLoading(state) {
            state.productDetailLoading = !state.productDetailLoading;
        },
        productsLoading(state) {
            state.productsLoading = !state.productsLoading;
        },
        setLoginLoading(state, action) {
            state.loginLoading = action.payload;
        },
        setRegisterLoading(state, action) {
            state.registerLoading = action.payload;
        },
        loginLoading(state) {
            state.loginLoading = !state.loginLoading;
        },
        registerLoading(state) {
            state.registerLoading = !state.registerLoading;
        },
        addPrductLoading(state) {
            state.addPrductLoading = !state.addPrductLoading;
        },
        updateProductLoading(state) {
            state.updateProductLoading = !state.updateProductLoading;
        },
        showNotification(state, action) {
            state.notification = action.payload;
        },
        hideNotification(state) {
            state.notification = null;
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;