import React, {useEffect, useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { getNASAimg } from '../store/actions/index'
import '../css/Container.css'
import LazyImage from './lazy-image'


function Container () {


    const [objects, setObjects] = useState([]);    

    //redux options hooks
    const nasa = useSelector(state => state.nasa);
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
           {objects.map(elem => {
             return elem.map((item, index) => {
                 return(
                    //  <div className='contaienr_item-box' key={index} style={{backgroundimage: `url(${{item.href}}`}}) >     
                        <LazyImage src={item.links[0].href} alt="" key={index} className='container_item' data-src="lazy.jpg"/>                
                        
                    // </div>
                
             )})   
           })}
           
           
       </div>
    )
}

export default Container;