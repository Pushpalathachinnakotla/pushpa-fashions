import axios from "axios"
import { useEffect, useState } from "react"
import "./Dummy.css"

export default function Dummy() {
    let [cart,setCart]=useState([])
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setCart(res.data)
        console.log(res.data)
    }).then((err)=>{
        console.log(err)
    })

    },[])
  return (
    <div>
        {cart.map((item,index)=>{
           return(<table>
            <tr>
            <td className="para">{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            </tr>
            </table>
           )
        })}
    </div>
  )
}
