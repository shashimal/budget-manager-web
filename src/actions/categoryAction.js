import axios from 'axios';

export const fetchCategoriesRequest = () => {
    return {
        type: 'FETCH_CATEGORIES_REQUEST'
    }
};

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: categories
    }
};

export const fetchCategoriesFailure = (error) => {
    return {
        type: 'FETCH_CATEGORIES_FAILURE',
        payload: error
    }
};

export const fetchCategories = ()=> {
    return (dispatch)=> {
        dispatch(fetchCategoriesRequest());
        axios
            .get('http://localhost:4000/categories')
            .then(response => {
                const categories = response.data
                dispatch(fetchCategoriesSuccess(categories))
            })
            .catch(error => {
                dispatch(fetchCategoriesFailure(error.message))
            })
    }
};