import Child from "./child";

export default class User {
  _id: string;
  name: string;
  email: string;
  phone: number;
  children: Child[];
  languages: string[];
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
    number: number;
  }
}