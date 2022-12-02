import React, { useEffect, useRef, useState } from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Button, Space } from "antd";
import { audioList } from './mock'
import BrowserOnly from '@docusaurus/BrowserOnly';
import HTMLFlipBook from "react-pageflip";
import styles from "./index.module.css";

export default function MusicPage() {
  const [data, setData] = useState()
  const book = useRef();

  // useEffect(() => {
  //   const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
  //   if (isMobile) {
  //     console.log('當前裝置是移動裝置');
  //   } else {
  //     console.log('當前裝置是桌面裝置');
  //   }
  // })

  return (
    <BrowserOnly>
      {() =>
        <>
          <div className={styles.backLayer}></div>
          {/* <video src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/file/A*mnpLT77ldiIAAAAAAAAAAAAAARQnAQ" /> */}
          <HTMLFlipBook className={styles.container} width={300} height={500} flippingTime={2000}
            drawShadow={true} useMouseEvents={false} ref={book}>
            {audioList.map((item, idx) => {
              return (
                <div className={styles.demoPage} key={idx}>
                  <Button type="primary" className={styles.demoButton} onClick={event => {
                    setData({
                      clearPriorAudioLists: true,
                      quietUpdate: false,
                      audioLists: item.songs,
                    })
                  }}>
                    {item.album}(共有{item.songs.length}首歌)
                  </Button>
                  <img src={item.cover} className={styles.demoImage} />
                  <p className={styles.demoParagraph}>
                    {item.brief}
                  </p>
                </div>
              )
            })}
          </HTMLFlipBook>
          <div className={styles.container}>
            <Space className={styles.pagination}>
              <Button type="primary" onClick={() => {
                book.current.pageFlip().flipPrev()
              }}>Previous page</Button>
              [<span class="page-current">1</span> of <span class="page-total">-</span>{audioList.length}]
              <Button type="primary" onClick={() => {
                book.current.pageFlip().flipNext()
              }}>Next page</Button>
            </Space>
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
