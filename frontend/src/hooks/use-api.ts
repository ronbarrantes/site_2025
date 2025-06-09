import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const queryKeys = {
  NOW: "now",
};

type NowData = {
  id: number;
  title: string;
  desc: string;
};

type Signal = {
  signal: AbortSignal | undefined;
};

const API_URL = "http://localhost:8080/api";

export const nowApi = {
  get: async ({ signal }: Signal) => {
    return await axios<NowData[]>({
      method: "get",
      url: `${API_URL}/now`,
      signal,
    });
  },

  post: async ({ body }: { body: NowData }) => {
    return await axios({
      method: "post",
      url: `${API_URL}/now`,
      data: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  },

  delete: async ({ id }: { id: number }) => {
    return await axios({
      method: "delete",
      url: `${API_URL}/now/:${id}`,
    });
  },
};

// ASSIGNMENTS
export const useNow = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error, isPending } = useQuery<NowData[]>({
    queryKey: [queryKeys.NOW],
    queryFn: async ({ signal }) => {
      const res = await nowApi.get({ signal });
      return res.data;
    },
  });

  const postNow = useMutation({
    mutationFn: nowApi.post,
    onSuccess: (resData) => {
      console.info("SUCCESS", resData);
    },

    onError: (resData) => {
      const errorData = resData as AxiosError;
      console.error("ERROR", errorData);
    },
  });

  const deleteNow = useMutation({
    mutationFn: nowApi.delete,
    onSuccess: (resData) => {
      console.info({
        message: "Delete assignment successfully sent",
        status_code: resData.status,
        data: {
          reqUrl: resData.config.url,
          method: resData.config.method,
        },
      });
    },

    onError: (resData) => {
      const errorData = resData as AxiosError;
      console.error("ERROR", errorData);
    },
  });

  const refetchNow = async () =>
    await queryClient.invalidateQueries({
      queryKey: [queryKeys.NOW],
    });

  const getState = () => queryClient.getQueryState<NowData[]>([queryKeys.NOW]);

  return {
    assignments: {
      get: {
        data: data,
        isLoading: isLoading,
        error: error,
        isPending: isPending,
      },
      post: postNow,
      delete: deleteNow,
      refetch: refetchNow,
      getState,
    },
  };
};
