import { useEffect, useState } from 'react'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
import pic5 from './5.jpg'
let Curosal=()=>{
    let arr=[pic1,pic2,pic3,pic4,pic5]
    let [i,seti]=useState(0)
    let fun=()=>{
        seti((i)=>(i+1)%5)
    }
    useEffect(()=>{
        let id=setInterval(fun,1000)
        return()=>clearInterval(id)
    },[])
    return(
        <div className='cur'><img src={arr[i]}/>

        </div>
    )
}
export default Curosal