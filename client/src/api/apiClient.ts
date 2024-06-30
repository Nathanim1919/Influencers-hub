import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // Necessary for cookies to be sent with requests
  timeout: 10000, // 10 seconds timeout
});

// Request Interceptor with type assertion
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig<unknown>) => {
    console.log(
      `Sending ${config.method?.toUpperCase()} request to ${config.url}`
    );
    return config as InternalAxiosRequestConfig; // Type assertion
  },
  (error: AxiosError) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // Example error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        "Backend returned code",
        error.response.status,
        "body was:",
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received for request", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }

    // If the token is expired and error 401 is received, you might want to refresh the token here
    // and resend the request. This part needs to be implemented based on your auth logic.

    return Promise.reject(error);
  }
);

export default apiClient;
