import apiUtils from "../utils/apiUtils";
import api from "../variables/api";

const userService = {
  getAllUsers: async () => {
    return await apiUtils.getRequest(`${api.FETCH_ALL_USERS}`);
  },
}

export default userService;