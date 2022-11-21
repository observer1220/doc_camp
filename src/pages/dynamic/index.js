import React from "react";
import Layout from "@theme/Layout";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

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
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
      )
    },
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
]

export default function DemoPage () {
  const updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
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
    <section className="settings">
      <button type="button" onClick={onChangeToFirstAudioList}>
        change to first audio list ({audioList1.length})
      </button>
      <button type="button" onClick={onChangeToSecondAudioList}>
        change to second audio list ({audioList2.length})
      </button>
    </section>
    <ReactJkMusicPlayer
      audioLists={audioList1}
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
