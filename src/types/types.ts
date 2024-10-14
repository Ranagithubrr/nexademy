export interface GoogleCredentialResponseType {
  clientId: string;
  access_token: string;
}
export interface DecodedUser {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  exp: number;
  iat: number;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  jti: string;
}
