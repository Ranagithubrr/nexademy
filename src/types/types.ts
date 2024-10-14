// Type definitions for the API response

// Geo location type
interface Geo {
    lat: string;
    lng: string;
  }
  
  // Address type
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  // Company type
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  // Main Post type
  export interface PostType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
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
