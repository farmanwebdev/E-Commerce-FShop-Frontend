import api from "../../utils/api";
import { cartActions } from "../cart-slice";
import { uiActions } from "../ui-slice";

export const getCart = () => {
    return async dispatch => {
        try {
            const response = await api.get("/cart");
            if (response.data.success) {
                const cart = response.data.cart;
                dispatch(cartActions.setCart(cart));
            }
        } catch (error) {
            console.error("Failed to fetch cart:", error);
        }
    }
};

export const addToCart = (productId, quantity = 1, selectedColor = null, selectedSize = null) => {
    return async dispatch => {
        try {
            const response = await api.post("/cart/add", {
                productId,
                quantity,
                selectedColor,
                selectedSize
            });

            if (response.data.success) {
                const cart = response.data.cart;
                dispatch(cartActions.setCart(cart));
            }
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    }
};

export const updateCartItem = (itemId, quantity) => {
    return async dispatch => {
        try {
            const response = await api.put(`/cart/${itemId}`, {
                quantity
            });

            if (response.data.success) {
                const cart = response.data.cart;
                dispatch(cartActions.setCart(cart));
            }
        } catch (error) {
            console.error("Failed to update cart:", error);
        }
    }
};

export const removeFromCart = (itemId) => {
    return async dispatch => {
        try {
            const response = await api.delete(`/cart/${itemId}`);

            if (response.data.success) {
                const cart = response.data.cart;
                dispatch(cartActions.setCart(cart));
            }
        } catch (error) {
            console.error("Failed to remove from cart:", error);
        }
    }
};

export const clearCart = () => {
    return async dispatch => {
        try {
            const response = await api.delete("/cart");

            if (response.data.success) {
                dispatch(cartActions.clearCart());
            }
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    }
};
