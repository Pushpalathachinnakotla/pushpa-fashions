import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
import pic5 from './5.jpg'

import './Course.css'
let Course=()=>{
    let data=[{"title":"Frock","ship":"1 week","logo":pic1},{"title":"Western","ship":"2week","logo":pic2},{"title":"Kindsware","ship":"1week","logo":pic3},{"title":"Sarees","ship":"4days","logo":pic4},{"title":"Gold","ship":"6days","logo":pic5}]
    return(
        <div className='course'>
            <h1>List of Products</h1>
            {
                data.map((item)=>{
                    return(
                        <div className='card'>
                            <div className='img'>
                            <img src={item.logo}/>
                            <h1>{item.title}</h1>
                            <h2>{item.ship}</h2>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}
export default Course