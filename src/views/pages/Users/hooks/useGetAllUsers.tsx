
import { useQuery } from 'react-query';

import { userService } from '../../../../services';
import { AxiosResponse } from 'axios';
import { UserData } from '../../../../types/uses';


export const useGetAllUsers = () => {
  const { data, error, isLoading, refetch } = useQuery<AxiosResponse<UserData[]>>(
   ["allUsers"],
    () => userService.getAllUsers(),
  );
  localStorage.setItem("allUsers", JSON.stringify(data?.data));

  return {
    allUsers: data?.data,
    loading: isLoading,
    refetch: async () => {
      await refetch();
    },
    error,
  };
};
