import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthService } from "../../Api";
import { AppState, Status, User } from "../../Types";

interface UsersState {
    names: String[]
}

// const initState: ApiState<UsersState> = {
//     data: { names: ['kato', 'Muhammed', 'John'] },
//     status: Status.idle,
//     error: null,
//     message: null
// }

// initState.init()

const initialState: AppState<UsersState> = {
    data: { names: ['kato', 'Muhammed', 'John'] },
    status: Status.idle,
}

const usersSlice = createSlice({
    name: 'usersReducers',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.status = Status.loading
            setTimeout(() => {
                state.data?.names.push(action.payload)
                alert(action.payload)
            }, 2000);
            state.data?.names.push(action.payload)
            state.status = Status.succeeded
            //   alert(action.payload)
        },
        remove: (state) => {
            state.data?.names.pop()
        },
        loginUser: (state, action: PayloadAction<User>) => {
            AuthService.login(action.payload.email, action.payload.password).then((res) => {
                if (res.success) {
                    console.log(res.data.user);
                    state.data?.names.push(res.data.user.name)
                }
            })
        }
    }
})

export default usersSlice.reducer

export const { add, remove, loginUser } = usersSlice.actions


// export const slice = createSlice({
//     name: "slice-name",
//     initialState: {
//         // ...
//     },
//     reducers: {
//         func01: (state) => {
//             // ...
//         },
//     }
// });

// export const { func01 } = slice.actions;
// export default slice.reducer;