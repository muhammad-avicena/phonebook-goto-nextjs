export interface AnimatedProps {
  animation?: string;
}

export interface DataListContact {
  id?: number;
  created_at: string;
  first_name: string;
  last_name: string;
  phones: string[];
  __typename?: string;
}

export interface DataPhoneUser {
  id?: number;
  number: string;
  __typename?: string;
}
