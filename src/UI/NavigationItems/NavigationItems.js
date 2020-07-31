import React from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems=(props)=>{
  
   
    return(
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Products</NavigationItem>
        <NavigationItem link="/">Features</NavigationItem>
        <NavigationItem link="/">Use Cases</NavigationItem>
        <NavigationItem link="/">Pricing</NavigationItem> 
        <NavigationItem  link="/">Login</NavigationItem>
     </ul>
    )
}

export default NavigationItems