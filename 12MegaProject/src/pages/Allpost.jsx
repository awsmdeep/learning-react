import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'


function Allpost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    })
  return (
    <div className='pu-8'>
        <Container>
            <div className='flex flex-wrap'> 
                {posts.map((post)=>(
                    <div key={posts.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}

            </div>
        </Container>
    </div>
  )
}

export default Allpost