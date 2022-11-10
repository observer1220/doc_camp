import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';

export default function ParallaxComponent () {
    return (
        <Parallax bgImage="./img/camp/a-4.jpg" blur={0} strength={1000} style={{ height: '300px' }}>
            視差元件
        </Parallax>
    );
}