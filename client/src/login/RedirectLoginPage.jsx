import react ,{useEffect}from 'react';
import {useHistory,useParams} from 'react-router-dom'

const RedirectLoginPage=()=>{

    const {id}= useParams();
    const history = useHistory();
    useEffect(()=>{
       history.push(`/${id}`)
    },[])
    return<>   
    </>
}

export default RedirectLoginPage;