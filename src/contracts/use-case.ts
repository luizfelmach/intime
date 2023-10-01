export interface UseCase<Request, Response> {
  perform(body: Request): Promise<Response>;
}
