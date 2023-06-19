import { useQuery } from "@tanstack/react-query";
import { articleService } from "./articleService";

export const useArticles = () => {

    const {isLoading, data, error} = useQuery({
        queryKey: ["BringArticles"],
        queryFn: articleService,
        refetchOnMount: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false
    })

    return {isLoading, data, error};
}
