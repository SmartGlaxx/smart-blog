import {useRouter} from 'next/router'
import Axios from 'axios'
import {useState, useEffect} from 'react'
import {url} from '../../utils/constants'

const Post = ()=>{
    const [pageData, setPageData] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageIdValue, setPageIdValue] = useState('') 

    const router = useRouter()
    let pageId = router.query.posts
    // setPageIdValue(pageId)

      
  const fetchPost = async(pageUrl)=>{
    // setLoading(true)
    const response = await Axios.get(pageUrl)
    const {data : {post}} = response
    setPageData(post[0])
    setLoading(false)
  }



  useEffect(() => {
    setLoading(true)
    fetchPost(`${url}/${pageId}`)
  }, [])

  const {title, postbody} = pageData

    if(loading==true){
    return  <div 
    style={{ height:"100vh", paddingTop:"5rem", margin: '0 auto', width: "80%"}}
    >LOADING</div>
    }
    return <div style={{ height:"100vh", paddingTop:"5rem", margin: '0 auto', width: "80%"}}>
      <h3>{title}</h3>
      <p>{postbody}</p>
    </div>
  
}

export default Post