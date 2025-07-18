import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/uttamsingh3137')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
        
    //   })
    
      
    // }, [])
    

  return (
    <>
        <div className='text-center bg-gray-800 p-4 text-3xl m-4 text-white'>Git Username : {data.login}

            <img className='m-4 p-4 rounded-full ' src= {data.avatar_url} width={300} />
            <div className='text-center bg-gray-500 p-4 text-3xl m-4 text-white'>Github followers : {data.followers}</div>
            <div className='text-center bg-gray-500 p-4 text-3xl m-4 text-white'>Github followings : {data.following}</div>

        </div>


    </>
  )
}

export default Github

export const githubInfoloader = async() =>{

  const response = await fetch('https://api.github.com/users/uttamsingh3137')

  return response.json()
}