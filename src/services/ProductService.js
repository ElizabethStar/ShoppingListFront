import axios from "axios"

const PRODUCT_API_BASE_URL ='http://localhost:8080/products'

class ProductService{
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+'/'+id);
        
    }
    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }
}



export default new ProductService()