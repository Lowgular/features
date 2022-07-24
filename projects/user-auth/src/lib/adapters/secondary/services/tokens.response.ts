export interface TokensResponse {
  readonly data: {
    id: string;
    accessToken: string;
    refreshToken: string;
  };
}
