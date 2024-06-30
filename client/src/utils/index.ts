import { AxiosResponse } from "axios";
import {ApiSuccessResponse } from "../interfaces/api";



export const requestHandler = async<T>(
    api: () => Promise<AxiosResponse<ApiSuccessResponse<T>, any>>,
    setLoading: ((loading: boolean) => void) | null,
    onSuccess: (data: T) => void,
    onError: (error: string) => void
) => {
    // Show loading spinner, if setLoading function is provided in the arguments
    setLoading && setLoading(true);

    try {
        // Make the API request
        const response = await api();
        const {data} = response;

        if (data?.success) {
            // Call the onSuccess function with the data
            onSuccess(data.data);
        }
    } catch (error: any) {
        if ([401, 403].includes(error?.response.data?.statusCode)){
            // Handle unauthorized or forbidden errors
            // Redirect to login page or show a message
        }

        // Call the onError function with the error
        onError(error?.response?.data?.message || "Something went wrong");
    } finally {
        // Hide loading spinner, if setLoading function is provided in the arguments
        setLoading && setLoading(false);
    }
}