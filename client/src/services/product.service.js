import api from "./api";
const API_URL = "";

const getAllProducts = async () => {
  return await api.get(`${API_URL}/product.json`);
};
const ProductService = {
  getAllProducts,
};
export default ProductService;
