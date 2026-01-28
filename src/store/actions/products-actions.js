import api from '../../utils/api';
import { productsActions } from '../products-slice';
import { uiActions } from '../ui-slice';
import { MOCK_PRODUCTS } from '../../utils/constants';


export const getProducts = () => {
    return async dispatch => {
        dispatch(uiActions.productsLoading());

        try {
            const response = await api.get('/products');
            const products = response.data.products || [];
            dispatch(productsActions.replaceProducts(products));
            dispatch(uiActions.productsLoading());
        } catch (error) {
            console.log('failed to fetch products from backend, using mock data');
            // Use mock data as fallback when backend is not available
            dispatch(productsActions.replaceProducts(MOCK_PRODUCTS));
            dispatch(uiActions.productsLoading());
        }
    }
};


export const getProductDetails = (id) => {
    return async dispatch => {
        dispatch(uiActions.pDetailLoading());

        try {
            const response = await api.get(`/products/${id}`);
            const productDetails = response.data.product;
            dispatch(productsActions.setProductDetails(productDetails));
            dispatch(uiActions.pDetailLoading());
        } catch (error) {
            console.log('failed to fetch product details');
            dispatch(uiActions.pDetailLoading());
        }
    }
};


export const addProduct = ({ product, token }) => {
    return async dispatch => {
        dispatch(uiActions.addPrductLoading());

        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('originalPrice', product.originalPrice);
            formData.append('category', product.category);
            formData.append('subcategory', product.subcategory);
            formData.append('stock', product.stock);
            formData.append('colors', JSON.stringify(product.colors || []));
            formData.append('sizes', JSON.stringify(product.sizes || []));
            formData.append('tags', JSON.stringify(product.tags || []));

            if (product.images && product.images.length > 0) {
                product.images.forEach((image) => {
                    if (image instanceof File) {
                        formData.append('images', image);
                    }
                });
            }

            const response = await api.post('/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token,
                },
                withCredentials: true
            });

            console.log('message : ', response.data);
            dispatch(getProducts());
            dispatch(uiActions.addPrductLoading());
        } catch (error) {
            console.log(error);
            dispatch(uiActions.addPrductLoading());
        }
    };
};


export const updateProduct = ({ product, id, token }) => {
    return async dispatch => {
        dispatch(uiActions.updateProductLoading());

        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('originalPrice', product.originalPrice);
            formData.append('category', product.category);
            formData.append('subcategory', product.subcategory);
            formData.append('stock', product.stock);
            formData.append('featured', product.featured);
            formData.append('colors', JSON.stringify(product.colors || []));
            formData.append('sizes', JSON.stringify(product.sizes || []));
            formData.append('tags', JSON.stringify(product.tags || []));

            if (product.images && product.images.length > 0) {
                product.images.forEach((image) => {
                    if (image instanceof File) {
                        formData.append('images', image);
                    }
                });
            }

            const response = await api.put(`/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token
                }
            });

            dispatch(getProducts());
            dispatch(uiActions.updateProductLoading());
        } catch (error) {
            console.log(error);
            dispatch(uiActions.updateProductLoading());
        }
    };
};














