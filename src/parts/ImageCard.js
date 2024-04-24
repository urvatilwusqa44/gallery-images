import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCalendar} from '@fortawesome/free-solid-svg-icons';
import styles from './Image.module.css';
const ImageCard=({image})=>{
    return (<div className={styles.card}>
        <img src={image.imageUrl}
         alt="Card"/>
         <h1>{image.name}</h1>
         <p>{image.description}</p>
         <div>
            <p>
            <FontAwesomeIcon icon={faUser} style={{color: "#3e32ec"}} />
            <span>{image.author}</span>
            </p>
            <p>
            <FontAwesomeIcon icon={faCalendar} style={{color: "#3e32ec"}} />
            <span>{image.date}</span>
            </p>
         </div>
    </div>
    );
};
export default ImageCard;