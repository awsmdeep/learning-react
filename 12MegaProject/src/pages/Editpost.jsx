import React,{useEffect,useState} from 'react'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import appwriteService from '../appwrite/config'
import { useNavigate,useParams } from 'react-router-dom'  



function Editpost() {
    const [post,setPosts]=useState([])
    const {slug}=useParams()
    const navigate=useNavigate()


    useEffect=(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostCard post={post}/>
        </Container>
    </div>
  ) 
  :null
}

export default Editpost