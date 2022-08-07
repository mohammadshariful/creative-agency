import { useQuery } from "@tanstack/react-query";

const useQueryDataLoad = (key, url) => {
  const { data, isLoading, isError, refetch } = useQuery([key], () =>
    fetch(url).then((res) => res.json())
  );
  return { data, isLoading, isError, refetch };
};

export default useQueryDataLoad;
