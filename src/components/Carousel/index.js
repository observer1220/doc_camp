import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css'
import styles from './styles.module.css';

export default function CarouselComponent () {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
    <Carousel afterChange={onChange} autoplay effect="fade" dotPosition="right">
        <img src='./img/camp/a-4.jpg' />
        <img src='./img/camp/b-4.jpg' />
        <img src='./img/camp/c-3.jpg' />
        <img src='./img/camp/d-2.jpg' />
        <img src='./img/camp/e-5.jpg' />
        <img src='./img/camp/f-5.jpg' />
    </Carousel>
 )
}