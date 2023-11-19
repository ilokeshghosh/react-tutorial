import { useState } from "react";
import {Form, Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import {useForm} from 'react-hook-form';
export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState('');

    const login = async(data)=>{
        setError('')
        try {
           const session = await authService.login(data); 
           if(session){
            const userData = await authService.getCurrentUser();
            if(userData) dispatch(authLogin(userData))
           }
        } catch (error) {
            setError(error)
        }
    }
    return (
        <div>

        </div>
    )
}