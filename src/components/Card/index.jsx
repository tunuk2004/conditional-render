import React from 'react'
import './Card.css'
 export const Card = ({data}) => {
    // return (
    //     <div className='card' style={{backgroundColor:data.color}} >
    //         {data.title}
    //     </div>
    // )
//     1-case
//     if(data.color){
//         return <div className='card' style={{backgroundColor:data.color}}>
//             {data.title}
//         </div>
//     }else{
//         return <div className='card' style={{backgroundImage: `url(${data.img})`}}>
//         {data.title}
//     </div>
    // }
    // 2-case
    // switch(data.color){
    //     case null:
    //         return(
    //          <div className='card' style={{backgroundImage: `url(${data.img})`}}>
    //      {data.title}
    // </div>
    //         )
    //         default:
    //             return(
    //                 <div className='card' style={{backgroundColor:data.color}}>
    //          {data.title}
    //     </div>
    //             )
    // }
    // 3-case

    return(
        <>
        {
            data.color
            ?
            <div className='card' style={{backgroundColor:data.color}}>
                      {data.title}
                 </div>
                 :
                 <div className='card' style={{backgroundImage: `url(${data.img})`}}>
                      {data.title}
                 </div>

        }
        </>
    )
}

