import {createStore} from "redux";

export function changeCardName(name) {
    return {
        type:"cardName",
        payload:name
    }
    
}
export function changeBrandName(name) {
    return {
        type:"brandName",
        payload:name
    }
    
}
export function changeColorName(name) {
    return {
        type:"color",
        payload:name
    }
    
}
export function changeImage(name) {
    return {
        type:"photo",
        payload:name
    }
    
}
function reducer(data={
    cardName:"",
    brandName:"",
    photo:"",
    color:"",
},action){
    switch (action.type) {
        case "cardName":
            const cdName = action.payload;
            return {...data,cardName: cdName};
        case "brandName":
            const bdname = action.payload;
            return {...data,brandName: bdname};
        case "color":
            const colorName= action.payload;
            return {...data,color:colorName}   
        case "photo":
            const photoName= action.payload;
            return {...data,image:photoName}  
        default:
            return data;
    }
}

const store=createStore(reducer);
export default store;