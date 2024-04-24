// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/awsmdeep')
    //     .then(response=>response.json())
    //     .then(data=>{setData(data)
    //     })

    // },[])
  return (
    <div className='rounded-full stext-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center items-center  '>
    <div className="text-3xl font-semibold">
        Github Username: {data.login} 
        <img className=' rounded-full mt-4' src={data.avatar_url} alt="" />
    </div>
   
</div>

  )
}

export default Github

export const githubinfoloader=async()=>{
    const res=await fetch('https://api.github.com/users/awsmdeep')
    return res.json()
}