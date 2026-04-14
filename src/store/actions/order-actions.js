import api from "../../utils/api";
import { uiActions } from "../ui-slice";

export const createOrder = (orderData) => {
    return async dispatch => {
        try {
            const config = orderData instanceof FormData ? {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            } : {};

            const response = await api.post("/orders", orderData, config);
            if (response.data.success) {
                return response.data.order;
            }
        } catch (error) {
            console.error("Failed to create order:", error);
            throw error;
        }
    }
};

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await api.get("/orders/user/my-orders");
            if (response.data.success) {
                return response.data.orders;
            }
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            throw error;
        }
    }
};

export const getOrder = (orderId) => {
    return async dispatch => {
        try {
            const response = await api.get(`/orders/${orderId}`);
            if (response.data.success) {
                return response.data.order;
            }
        } catch (error) {
            console.error("Failed to fetch order:", error);
            throw error;
        }
    }
};

export const updateOrderStatus = (orderId, orderStatus, paymentStatus) => {
    return async dispatch => {
        try {
            const response = await api.put(`/orders/${orderId}`, {
                orderStatus,
                paymentStatus
            });
            if (response.data.success) {
                return response.data.order;
            }
        } catch (error) {
            console.error("Failed to update order:", error);
            throw error;
        }
    }
};

export const getAllOrders = () => {
    return async dispatch => {
        try {
            const response = await api.get("/orders");
            if (response.data.success) {
                return response.data.orders;
            }
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            throw error;
        }
    }
};
