'use server'
import { response } from 'express'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {User} from '../interface/interface'

const route = () => {

    const [userID, setUserID] = useState<User>({userID:''})

    const PostUserID = async () => {
        axios.post('http://localhost:3000/api/recommend', userID)
        .then(response => {
            console.log(response)
        })
    }

    

    return Response.json({
        name:'hello world!'
    })
}