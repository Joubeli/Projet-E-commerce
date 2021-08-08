import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
} from "../constants/actionType";

const initialState = {
  products: [
      {
          id:1,
          title:"pull en vert",
          price:15.00,
        image:"https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
      },
      
      {
        id:1,
        title:"pull en vert",
        price:15.00,
      image:"https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
    },
    
    {
        id:1,
        title:"pull en vert",
        price:15.00,
      image:"https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
    },
    
    {
        id:1,
        title:"pull en vert",
        price:15.00,
      image:"https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
    }
  ],
  cart: [],
};

const reducerShop = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_TO_CART: 
            const item = state.products.find(prod => prod.id === payload.id)
            const inCart = state.cart.find(item => item.id === payload.id ? true : false)
            return{
                ...state, 
                cart: inCart 
                ? state.cart.map(
                    (item) => 
                    item.id === payload.id
                    ? {...item, qty: item.qty + 1 }
                    : item
                )
                : [...state.cart, { ...item, qty: 1}],
            };

        case REMOVE_FROM_CART:
            return{

            };

        case ADJUST_QTY:
            return{

            };

        default:
            return state
    }
}

export default reducerShop;