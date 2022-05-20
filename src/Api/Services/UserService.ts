import { ApiResponse, User } from "../../Types";
import { Logger } from "../../Utils";
import Client from "../Client"

class UserService extends Client{
   
    async saveUser(user : User) {
        const formData = new FormData()
        for(let key in user){
            Logger.message({ data: key});
            if(Object.hasOwnProperty.call(user, key)){
                formData.append(key, user[key as keyof User])
            }
        }
        console.log(...formData);
        
        // Logger.message({key: 'FormData', data: ...formData});
        // return await this.instance.post('')
    }
}

export default new UserService()