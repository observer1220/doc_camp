import React, { useState } from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Button } from "antd";
// import { audioList1, audioList2 } from './mock'
import BrowserOnly from '@docusaurus/BrowserOnly';
import HTMLFlipBook from "react-pageflip";
import styles from "./index.module.css";
const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  }
]

const audioList2 = [
  {
    name: '半獸人',
    singer: 'Jay Chou',
    cover:
      'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1669133560/JayChou%EF%BC%8DOctaveSpace/Jay_2002_ablum_cover_ikubuk.jpg',
    musicSrc:
      'https://res.cloudinary.com/dbjxyxxlj/video/upload/v1669133301/JayChou%EF%BC%8DOctaveSpace/%E5%8D%8A%E7%8D%B8%E4%BA%BA_ebxlrb.mp3',
  },
  {
    name: '半島鐵盒',
    singer: 'Jay Chou',
    cover:
      'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1669133560/JayChou%EF%BC%8DOctaveSpace/Jay_2002_ablum_cover_ikubuk.jpg',
    musicSrc:
      'https://res.cloudinary.com/dbjxyxxlj/video/upload/v1669133302/JayChou%EF%BC%8DOctaveSpace/%E5%8D%8A%E5%B3%B6%E9%90%B5%E7%9B%92_jyxwba.mp3',
  },
  {
    name: '火車叨位去',
    singer: 'Jay Chou',
    cover:
      'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1669133560/JayChou%EF%BC%8DOctaveSpace/Jay_2002_ablum_cover_ikubuk.jpg',
    musicSrc:
      'https://res.cloudinary.com/dbjxyxxlj/video/upload/v1669133300/JayChou%EF%BC%8DOctaveSpace/%E7%81%AB%E8%BB%8A%E5%8F%A8%E4%BD%8D%E5%8E%BB_zhagrd.mp3',
  },
  {
    name: '爺爺泡的茶',
    singer: 'Jay Chou',
    cover:
      'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1669133560/JayChou%EF%BC%8DOctaveSpace/Jay_2002_ablum_cover_ikubuk.jpg',
    musicSrc:
      'https://res.cloudinary.com/dbjxyxxlj/video/upload/v1669133300/JayChou%EF%BC%8DOctaveSpace/%E7%88%BA%E7%88%BA%E6%B3%A1%E7%9A%84%E8%8C%B6_ev1pny.mp3',
  },
  {
    name: '最後的戰役',
    singer: 'Jay Chou',
    cover:
      'https://res.cloudinary.com/dbjxyxxlj/image/upload/v1669133560/JayChou%EF%BC%8DOctaveSpace/Jay_2002_ablum_cover_ikubuk.jpg',
    musicSrc:
      'https://res.cloudinary.com/dbjxyxxlj/video/upload/v1669133302/JayChou%EF%BC%8DOctaveSpace/%E6%9C%80%E5%BE%8C%E7%9A%84%E6%88%B0%E5%BD%B9_ososej.mp3',
  },
]

export default function MusicPage() {
  const [data, setData] = useState()

  const onChangeToFirstAudioList = (event) => {
    console.log(event.target);
    setData({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    })
  }

  const onChangeToSecondAudioList = (event) => {
    console.log(event.target);
    setData({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    })
  }

  return (
    <BrowserOnly>
      {() => <>
        <div>
          {/* <Button type="button" onClick={onChangeToFirstAudioList}>
            Latest ({audioList1.length})
          </Button>
          <Button type="button" onClick={onChangeToSecondAudioList}>
            Jay Chou ({audioList2.length})
          </Button> */}
          <HTMLFlipBook width={300} height={500}>
            <div className={styles.demoPage}>
              Latest ({audioList1.length})
            </div>
            <div className={styles.demoPage}>
              Jay Chou ({audioList2.length})
            </div>
            <div className={styles.demoPage}>
              測試 ({audioList2.length})
            </div>
          </HTMLFlipBook>
        </div>
        <ReactJkMusicPlayer
          {...data}
          mode={"full"}
          autoHiddenCover={true}
          showLyric={true}
          volumeFade={{ fadeIn: 500, fadeOut: 500 }}
        />
      </>}
    </BrowserOnly>
  )
}
