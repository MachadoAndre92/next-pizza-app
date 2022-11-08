import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from 'next/image'

const Featured = () => {
    const images=[
        "/img/featured.png",
        "/img/featured2.png",
        
    ];
  return (
    <div className={styles.container}>
        
        <div className={styles.wrapper}>  
            {console.log(images)}          
            {images.map((img, i)=>(
                <div className={styles.imgContainer} key={i}>
                    <Image src={img}  alt="" fill  objectFit='contain'/>
                </div>   
            ))}  
        </div>
        <div className={styles.ArrowContainer} style={{left:0}}>
            <Image src="/img/arrowl.png" alt="" fill/>
        </div>
        <div className={styles.ArrowContainer} style={{right:0}}>
            <Image src="/img/arrowr.png" alt="" fill/>
        </div>
    </div>
  )
}

export default Featured