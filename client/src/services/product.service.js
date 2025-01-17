import api from "./api";
const API_URL = "/product";

const getAllProducts = async () => {
  return await api.get(`${API_URL}`);
};
const ProductService = {
  getAllProducts,
};
export default ProductService;
