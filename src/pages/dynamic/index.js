import React, { useState } from "react";
import Layout from "@theme/Layout";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Button } from "antd";

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
]

const audioList2 = [
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  }
]

export default function DemoPage () {
  const [data, setData] = useState()
  
  const updateParams = (params) => {
    const newData = {
      ...data, params
    }
    setData({
      params: newData
    })
  }

  const onChangeToFirstAudioList = () => {
    console.log('1');
    updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    })
  }

  const onChangeToSecondAudioList = () => {
    console.log('2');
    updateParams({  
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    })
  }
  return <>
    <div className="settings">
      <Button type="button" onClick={onChangeToFirstAudioList}>
        前張專輯 ({audioList1.length})
      </Button>
      <Button type="button" onClick={onChangeToSecondAudioList}>
        下張專輯 ({audioList2.length})
      </Button>
    </div>
    <ReactJkMusicPlayer
    {...data}
      // audioLists={audioList1}
      mode={"full"}
      autoHiddenCover={true}
      showLyric={true}
      onAudioPlayTrackChange={(event) => {
        console.log(event);
      }}
      volumeFade={{ fadeIn: 500, fadeOut: 500 }}
    />
  </>
}
