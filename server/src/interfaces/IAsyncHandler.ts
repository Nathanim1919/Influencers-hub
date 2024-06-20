export interface IAsyncHandler {
    (req: any, res: any, next: any): Promise<any>;
}
