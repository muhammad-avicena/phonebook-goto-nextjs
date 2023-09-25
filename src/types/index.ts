export interface AnimatedProps {
  animation?: string;
}

export interface DataListContact {
  id?: number;
  created_at?: string;
  first_name: string;
  last_name: string;
  phones: string[];
}

export interface ContactData extends DataListContact {}

export interface DataPhoneUser {
  id?: number;
  number: string;
}

export interface FavouriteData {
  contactId: number;
}
