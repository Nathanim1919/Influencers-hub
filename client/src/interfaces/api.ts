export interface ApiSuccessResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}