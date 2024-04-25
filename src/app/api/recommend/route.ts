'use server'
import { response } from 'express'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

type Props = {}

const route = (props: Props) => {

    const [userID, setUserID] = useState('')

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