import { productActions } from "../reducers/productReducer";

function getProduct(searchQuery) {
    return async (dispatch, getState) => {

        let url = `http://localhost:5000/products?q=${searchQuery}`;

        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        dispatch(productActions.getAllProduct({ data }));
    };
}

export const productAction = { getProduct };