import { UserData } from "../../../../types/uses";
import storageUtils from "../../../../utils/storageUtils";

const useGetUserDetails = (id : string) => {
  const allUsers : UserData[] = storageUtils.getParsedFromLocalStorage("allUsers");

  const user = allUsers.find((user) => user.id === id )
  
  console.log(allUsers)
  console.log(user)

  return ({ userSelect: user })
}

export default useGetUserDetails