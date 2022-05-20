export interface ApiResponse<T>{
    success: boolean
    message?: string
    error?: string
    data?: T
    error_code?: string
}

export interface Entity{
    id: string
    created_at: string
    updated_at: string
}

export interface User extends Entity{
    first_name: string
    last_name: string
    mobile: string
    email: string
    picture: string
    dob: string
    description: string 
    type: UserType
    password: string 
}

export type UserType = 'client' | 'admin' | 'manager'

export interface IChangePassword{
    old_password: string
    password: string
    password_confirmation: string
}

