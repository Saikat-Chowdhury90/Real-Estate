import axios from 'axios'

const API_URL = "http://localhost:8000/api/"

//Register user

const register = async (userData) => {
    const response = await axios.post(API_URL + "register",userData)

    if(response.data)
    {
        localStorage.setItem('user' , JSON.stringify(response.data))
    }

    return response.data
 }

//login
const login = async (userData) => {
    const response = await axios.post(API_URL + "login",userData)
    
    if(response.status === 200 )
    {
        localStorage.setItem('user' , JSON.stringify(response.data))
    }
    else
    {
        window.alert("email or password is incorrect");
        return 
    }

    return response.data
 }

//logout

 const logout =  async () => {
    const response = await axios.get(API_URL + "logout")
    if(response.status === 200)
    localStorage.removeItem('user')
 }
 const authService = {
    register,
    logout,
    login
 }
 export default authService