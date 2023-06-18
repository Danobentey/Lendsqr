
import { useQuery } from 'react-query';

import { userService } from '../../../../services';
import { AxiosResponse } from 'axios';
import { UserData } from '../../../../types/uses';


export const useGetAllUsers = () => {
  const localStorageData = localStorage.getItem("allUsers");
  const initialData = localStorageData ? JSON.parse(localStorageData) : null;

  const { data, error, isLoading, refetch } = useQuery<AxiosResponse<UserData[]>>(
    ["allUsers"],
    () => userService.getAllUsers(),
    { initialData } // Pass the initialData to useQuery as the initial value
  );

  const store = () => {
    if (data?.data) {
      localStorage.setItem("allUsers", JSON.stringify(data.data));
    }
  };

  return {
    store,
    allUsers: data?.data,
    loading: isLoading,
    refetch: async () => {
      await refetch();
    },
    error,
  };
};

