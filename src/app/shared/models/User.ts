export interface User {
  id: number;
  name: String;
  email: String;
  password:String;
}


export interface CreateUserDTO extends Omit<User, 'id'> {}
