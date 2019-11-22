import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNASAimg } from '../store/actions/index'
import '../css/Container.css'


function Container () {


    const [objects, setObjects] = useState<any[]>([]);    
    

    //redux options hooks
    const nasa = useSelector((state: any) => state.nasa);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNASAimg());
    }, [])

    useEffect(() => {        
        setObjects(nasa); 
    }, [nasa]);
    

  
    console.log(objects);
    

    return(
       <div className="container">
           {objects.map((item) => {
               return item.map((elem: any, index: number) => {
                //    console.log(elem)
                   return(
                      //  <div className='contaienr_item-box' key={index} style={{backgroundimage: `url(${{item.href}}`}}) >     
                      <div className="container_item" key={index}>
                          <img src={elem.links[0].href} alt="" key={index}/>                
                          
                      </div>
                  
               )})   

               })
           }
           
           
       </div>
    )
}

export default Container;
