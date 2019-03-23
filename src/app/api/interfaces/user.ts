export interface User {
  id: number;
  first_name: string;
  last_name: string;
  type: string;
  email: string;
  jwt_token?: string;
  jwt_token_expired_date?: string;
  jwt_token_type?: string;

}
