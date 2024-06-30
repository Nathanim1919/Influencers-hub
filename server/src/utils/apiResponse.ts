interface ApiResponseInterface {
    statusCode: number;
    message: string;
    success: boolean;
}


class ApiResponse<T> implements ApiResponseInterface {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;

    constructor(statusCode: number, data: T, message = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
    }
}

export default ApiResponse;