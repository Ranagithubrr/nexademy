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
    address: string;
    phone: string;
    website: string;
    company: string;
  }
  