export interface UserProps {
  id?: number;
  school_id?: number;
  role_id?: number;
  f_name?: string;
  l_name?: string;
  profile?: string;
  mobile_no?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  status?: number;
}

export interface GlobalRequest extends Request {
  user: UserProps;
}
