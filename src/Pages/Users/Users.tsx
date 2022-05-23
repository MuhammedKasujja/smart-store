import { useEffect, useState } from "react"
import { AuthService, UserService } from "../../Api"
import { CustomButton, CustomDropdown, TextInput } from "../../Components"
import Sidebar from "../../Layout/Sidebar"
import { User } from "../../Types"
import { Logger } from "../../Utils"


const Users: React.FC = ()=>{
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState<boolean>(false)
    const [loggingIn, setLoggingIn] = useState<boolean>(false)
    
    useEffect(()=>{
       setUser({first_name:'Kasujja', last_name:'Muhammed', mobile:'+256 774262923', description:'', dob:'', picture:'',
       email:'admin@davinon.com',created_at:'222-07-92',updated_at:'45', id:'5678', type:'admin', password:'123456'},)
    },[])

    const loadData = () => {
       setLoading((prevLoading)=> !prevLoading)
       UserService.saveUser(user!)
      };

      const login = () => {
        setLoggingIn((prevLoading)=> !prevLoading)
        AuthService.login(user?.email!, user?.password!)
       };

    return(<>
    <Sidebar/>
    <h1 className="text-3xl font-bold underline">Hello Client</h1>
       <p>{user?.first_name}</p>
       <p>{user?.last_name}</p>
       <p>{user?.email}</p>
       <p>{user?.description}</p>
       <p>{user?.mobile}</p>
       <TextInput hint="First name" handleChange={(value)=>{
          Logger.message({key:'first_name', data:value})
         //  setUser((preUser)=>{...preUser, preUser.})
       }}/>
       <TextInput hint="Last name" handleChange={(value)=>{
          
         }}/>
       <TextInput hint="Mobile" type="tel" handleChange={(value)=>{
          
         }}/>
       <TextInput hint="Email" type="email" handleChange={(value)=>{
          // setUser({...user, { email: value }})
         }}/>
         <TextInput hint="Password" type="password" handleChange={(value)=>{
          
        }}/>
         {/* <input type="checkbox" className="accent-pink-500" checked> Customized</input> */}
       <CustomDropdown items={[{id:40, name:'Male'},{id:45, name:'Female'},{id:49, name:'Others'}]}/>
       <CustomButton label="Submit" loading={loading} onClick={loadData}/>

       <CustomButton label="Login" loading={loggingIn} onClick={login}/>
    </>)
}

export default Users