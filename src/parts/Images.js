import React from "react";
import ImageCard from "./ImageCard";
import styles from "./Image.module.css";
/*const image={
    name:"",
    imageUrl:"",
    description:"",
    author:"",
    date:""

}*/
const Images=({images})=>{
    return (<div className={styles.container}>
        {images.map((element)=>{
            return <ImageCard image={element}/>
        })}
    
        
        
    </div>
    );
};
export default Images;