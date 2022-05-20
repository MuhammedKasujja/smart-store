import { ApiResponse } from "../../Types"
import { Logger } from "../../Utils";
import Client from "../Client"

class AuthService extends Client{
   async  login(email:string, password: string): Promise<ApiResponse<any>> {
       const res = await this.instance.post('/login', { email, password });
       Logger.message({key: 'Login', data:res})
       return res
   }
}

export default new AuthService()