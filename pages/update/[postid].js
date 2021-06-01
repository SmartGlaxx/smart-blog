import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Axios from 'axios'
import MyButton from '../../components/button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import {url} from '../../utils/constants'

const Update = ()=>{
    const [page, setPage] = useState([])
    const [pageId, setPageId] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const router = useRouter()
    const url = "https://blog-api-live.herokuapp.com/"
    const id = router.query.postid
    
    const fetchPost = async(pageurl)=>{
    setLoading(true)
    const response = await Axios.get(pageurl + id)
    const {data : {post}} = response
    console.log('response', post)
    setPage(post)
    setLoading(false)
  }

    const editPost =()=>{

    }

  useEffect(() => {
    fetchPost(url)
  }, [])
 
    if(loading){
        return <div style={{display: 'grid', placeItems: 'center', width: '100%', height:'80vh'}}><CircularProgress /></div>
    }
     
    const {title, postbody} = page[0]
    
    return <div className='page'>
            <h3>Edit Post</h3>
       <form onSubmit ={(e)=>e.preventDefault()}>
        <label htmlFor='title'>Post Title</label>
        <input type ='text' name ='title' id='title' className='input' value={title}/><br />
        <label htmlFor='post'>Post</label>
        <TextareaAutosize aria-label="minimum height"  name='postbody'  id='post' className='textarea' rowsMin={3} value={postbody} />
        <div className='btn-container'>
        <MyButton variant="contained" color="primary" type='submit' onClick={editPost}>Edit Post</MyButton>
        </div>
    </form>
    </div>
}

export default Update