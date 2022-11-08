import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from 'next/image'

const Featured = () => {
    const images=[
        "/img/featured.png",
        "/img/featured.png",
        "/img/featured.png",
    ];
  return (
    <div className={styles.container}>
        <div className={styles.ArrowContainer} style={{left:0}}>
            <Image src="/img/arrowl.png" alt="" fill/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {images.map((img, i)=>
                    <Image src={img} key={i} alt="" fill/>
                    
                )}
                
            </div>
        </div>
        <div className={styles.ArrowContainer} style={{right:0}}>
            <Image src="/img/arrowr.png" alt="" fill/>
        </div>
    </div>
  )
}

export default Featured