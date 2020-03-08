const initialState = {
    items: [],
    loading: false,
    error: ''
};

const categoryReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_CATEGORIES_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: ''
            };
        case 'FETCH_CATEGORIES_FAILURE':
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default categoryReducer