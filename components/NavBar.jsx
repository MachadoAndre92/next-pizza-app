import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width={32} height={32}/>
        </div>
        <div className={styles.texts}>
          <div className={styles.texts}>ENCOMENDE JÁ!</div>
          <div className={styles.texts}>244 000 111</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItems}>Homepage</li>
          <li className={styles.listItems}>Produtos</li>
          <li className={styles.listItems}>Menu</li>
          <Image src="/img/logo2.png" alt="" width="160" height="69"/>
          <li className={styles.listItems}>Eventos</li>
          <li className={styles.listItems}>Blog</li>
          <li className={styles.listItems}>Contactos</li>
        </ul>
      </div>
      <div className={styles.item}>right</div>
    </div>
  )
}

export default NavBar