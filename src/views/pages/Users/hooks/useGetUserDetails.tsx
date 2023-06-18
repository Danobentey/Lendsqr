import { UserData } from "../../../../types/uses";
import storageUtils from "../../../../utils/storageUtils";

const useGetUserDetails = (id : string) => {
  const allUsers : UserData[] = storageUtils.getParsedFromLocalStorage("allUsers");

  allUsers.find((user) => user.id === id )
}

export default useGetUserDetails