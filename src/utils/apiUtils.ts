import axios from "axios";

const apiUtils = {
  getRequest: async (url :string) => {
    const res = await axios.get(url);
    return res;
  }
};

export default apiUtils;