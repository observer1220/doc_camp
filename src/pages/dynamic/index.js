import React, { useState } from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Button } from "antd";
import { audioList1, audioList2 } from './mock'

export default function DemoPage () {
  const [data, setData] = useState()

  const onChangeToFirstAudioList = (index) => {
    setData({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    })
  }

  const onChangeToSecondAudioList = () => {
    setData({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    })
  }

  return <>
    <div className="settings">
      <Button type="button" onClick={onChangeToFirstAudioList}>
        西洋最新 ({audioList1.length})
      </Button>
      <Button type="button" onClick={onChangeToSecondAudioList}>
        周杰倫 八度空間 ({audioList2.length})
      </Button>
    </div>
    <ReactJkMusicPlayer
      {...data}
      mode={"full"}
      autoHiddenCover={true}
      showLyric={true}
      volumeFade={{ fadeIn: 500, fadeOut: 500 }}
    />
  </>
}
