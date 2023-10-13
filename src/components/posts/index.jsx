import './style.css';
import { useEffect } from 'react';

export function Posts() {
    const posts = new Array(41).fill('img')
    return (
        <div className='posts'>
            { posts?.map((num, index) => <img src={`/imgs/posts/${index+1}.png`} alt="" />)}
        </div>    
    )

}