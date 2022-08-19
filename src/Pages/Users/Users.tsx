import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserService } from "../../Api"
import { CustomButton, CustomDropdown, FileInput, RadioButton, TextInput } from "../../Components"
import { RootState } from "../../Store"
import { add, loginUser } from "../../Store/features/usersReducers"
import { Message, Status, User } from "../../Types"
import { Logger } from "../../Utils"


const Users: React.FC = () => {
   // const maritalStatus = [
   //    'Married', 'Single', 'Divorced'
   // ]
   const [user, setUser] = useState<User>()
   const [loading, setLoading] = useState<boolean>(false)
   const [loggingIn, setLoggingIn] = useState<boolean>(false)
   const [profileImage, setProfileImage] = useState<File>()
   const [gender, setGender] = useState<string>('49')
   const [maritalStatus, setMaritalStatus] = useState<string>()

   const [name, setName] = useState<string>('')

   const message: Message = {
      id: 56,
      message: 'Kasujja',
      user: {
         id: 453,
         name: 'Muhammed'
      },
   }

   const message2: Message = {
      id: 56,
      message: 'Kasujja',
      user: {
         id: 453,
         name: 'Muhammed'
      },
      file: 'path'
   }

   const messages = [message, message2]

   const dispatch = useDispatch()

   const users = useSelector((state: RootState) => state.users)

   useEffect(() => {
      setUser({
         first_name: 'Kasujja', last_name: 'Muhammed', mobile: '+256 774262923', description: '', dob: '', picture: '',
         email: 'admin@davinon.com', created_at: '222-07-92', updated_at: '45', id: '5678', type: 'admin', password: '123456'
      })
   }, [])

   const loadData = () => {
      setLoading((prevLoading) => !prevLoading)
      UserService.saveUser(user!)
   };

   const login = () => {
      setLoggingIn((prevLoading) => !prevLoading)
      //   AuthService.login(user?.email!, user?.password!)
      dispatch(loginUser(user!))
   };

   const saveUser = () => {
      Logger.message({ key: 'gender', data: gender })

      // if (!name) return
      // dispatch(add(name))
      // setName('')
   }

   const tableRow = () => {
      return users.data.names.map((n) => <tr key={n.toString()}><td>{n}</td>
         <td>Muhammed@mail.com</td>
         <td>0774262923</td>
      </tr>)
   }

   return (<>
      <h1 className="text-3xl font-bold underline">Hello Client</h1>
      <table className="table-auto w-full m-2">
         <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Mobile</th>
            </tr>
         </thead>
         <tbody>
            {tableRow()}
         </tbody>
      </table>
      {users.data.names.map((n) => <p key={n.toString()}>{n}</p>)}
      <hr />
      <p>{user?.first_name}</p>
      <p>{user?.last_name}</p>
      <p>{user?.email}</p>
      <p>{user?.description}</p>
      <p>{user?.mobile}</p>
      <TextInput hint="First name" handleChange={(value) => {
         Logger.message({ key: 'first_name', data: value })
         //  setUser((preUser)=>{...preUser, preUser.})
      }} />
      <TextInput hint="Last name" handleChange={(value) => {

      }} />
      <TextInput hint="Mobile" type="tel" handleChange={(value) => {

      }} />
      <TextInput hint="Email" type="email" handleChange={(value) => {
         // setUser({...user, { email: value }})
      }} />
      <TextInput hint="Password" type="password" handleChange={(value) => {

      }} />

      <FileInput label={"Profile"} onChange={(file) => setProfileImage(file)} />

      <TextInput hint="User Name" value={name} handleChange={(value) => {
         setName(value)
      }} />
      {/* <input type="checkbox" className="accent-pink-500" checked> Customized</input> */}
      <CustomDropdown items={[{ id: 40, name: 'Male' }, { id: 45, name: 'Female' }, { id: 49, name: 'Others' }]} value={gender}
         onChange={(value) => {
            setGender(value)
         }} />
      {/* <CustomButton label="Submit" loading={loading} onClick={loadData} />

      <CustomButton label="Login" loading={loggingIn} onClick={login} />
      <p>{users.data.names.length}</p> */}

      <RadioButton checked={"Married" === maritalStatus} label={"Married"} onChange={setMaritalStatus} />
      <RadioButton checked={"Single" === maritalStatus} label={"Single"} onChange={setMaritalStatus} />
      <RadioButton checked={"Divorced" === maritalStatus} label={"Divorced"} onChange={setMaritalStatus} />

      <CustomButton label="Save" loading={users.status === Status.loading} onClick={saveUser} />
   </>)
}

export default Users