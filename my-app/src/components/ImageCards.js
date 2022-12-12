import React from 'react'; //import React library
import { useState, useEffect } from 'react'; //import React library]

import {
    ref,
    listAll,
    getDownloadURL
  } from "firebase/storage";
  import { storage } from "./firebase";

export function ImageCards(props) {
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);

    return (
        <div className="image-container">
                    {imageUrls.map((url) => {return <ImgCard url={url} />;})}
        </div>
        
    )
}

function ImgCard(props) {
    return (
        <div className="image">
            <img src={props.url} />
        </div>
    )
}
