import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import Axios from 'axios'
import MyButton from '../../components/button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import {url} from '../../utils/constants'

const Update = ()=>{
    const [page, setPage] = useState({})
    const [pageId, setPageId] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const router = useRouter()
    const titleRef = useRef()
    

    const url = "https://blog-api-live.herokuapp.com/"
    const id = router.query.postid
    
    const fetchPost = async(pageurl)=>{
    setLoading(true)
    const response = await Axios.get(pageurl + id)
    const {data : {post}} = response
    console.log('response', post)
    setPage(post[0])
    setLoading(false)
  }

    const editPost = async(id, title, postbody)=>{
        const patchid = id
        const patchParams = {
            title : title,
            postbody : postbody
        }

          await Axios.put('https://blog-api-live.herokuapp.com/'+patchid , patchParams)
            .then(result =>{
                router.replace("/");
                // setReload(prev =>{
                //   return !prev
                // })
            })
            .catch(error=>{
                setError(true)
                alert(error)
                setTimeout(() => {
                    setError(false)
                }, 5000);
            })
    }

    const setUpdateBalues = (e)=>{
        const name = e.target.name
        setPage(prev => {
            return {...prev, [name] : e.target.value}
        })
    }

  useEffect(() => {
    fetchPost(url)
  }, [])
 
    if(loading){
        return <div className='spinner'><CircularProgress /></div>
    }
     
    const {_id, title, postbody} = page

    return <div className='formpage'>
            <h3>Edit Post</h3>
       <form onSubmit ={(e)=>e.preventDefault()}>
        <label htmlFor='title' className='label'>Post Title</label>
        <input type ='text' name ='title' id='title' className='input' value={title} onChange={setUpdateBalues}/><br />
        <label htmlFor='post' className='label'>Post</label>
        <TextareaAutosize aria-label="minimum height"  name='postbody'  id='post' className='textarea' rowsMin={3} value={postbody} onChange={setUpdateBalues} />
        <div className='btn-container'>
        <MyButton variant="contained" color="primary" type='submit' onClick={()=>editPost(_id, title, postbody)}>Edit Post</MyButton>
        </div>
    </form>
    </div>
}

export default Update