// IMAGE CARDS, LINH
import React from 'react'; //import React library

export function ImageCards(props) {

    const IMG_ARRAY = [
        {url: "../img/sunflowers.jpg", alt: "sunflowers", imgID:1},
        {url: "../img/rose.jpg", alt: "roses", imgID:2}
    ]

    const ImgCardElems = IMG_ARRAY.map((ImgObj) => {
        const element = <ImgCard key={ImgObj.imgID} url={ImgObj.url} alt={ImgObj.alt}/>
        return element;
    });

    return (
        <div className="image-container">
            {ImgCardElems}
        </div>
    )
}

function ImgCard(props) {
    return (
        <div className="image">
            <img src={props.url} alt={props.alt}/>
        </div>
    )
}