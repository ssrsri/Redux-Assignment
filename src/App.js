import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from './redux/features/postSlice';
import { useEffect } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const {posts}=useSelector((state)=>state.post)

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts())
  },[])
  return (
    <div >
      {posts.map((item)=>(
      <h4 className='text-center'>
        {item.id}<br/>
        {item.userId}<br/>
        {item.title}<br/>
        {item.body}
        </h4>
      ))}
    </div>
  );
}

export default App;
