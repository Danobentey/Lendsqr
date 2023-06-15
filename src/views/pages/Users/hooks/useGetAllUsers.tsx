
import { useQuery } from 'react-query';

import { userService } from '../../../../services';
import { AxiosResponse } from 'axios';

export interface UserData {
  Organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  verification_status: string;
}

export interface UserData {
  Organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  verification_status: string;
}

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
