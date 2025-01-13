import { UserLogin } from "../../store/user/user.state";
export type UserLoginResponse = {
    status: number;
    message: string;
    data: {
      user: UserLogin;
    };
  };