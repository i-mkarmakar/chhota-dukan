import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

// fetch user data from API
const fetchUser = async () => {
  const response = await axiosInstance.get("/api/logged-in-user");
  return response.data;
};

const useUser = () => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["luser"],
    queryFn: fetchUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Retry once on failure
  });
  return { user, isLoading, isError, refetch };
};

export default useUser;
