import React, { useRef, useState } from "react";
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

  return (
    <BrowserOnly>
      {() => <div>
        <HTMLFlipBook className={styles.container} width={300} height={500} drawShadow={true} flippingTime={2000} ref={book} useMouseEvents={false}>
          {audioList.map((item, idx) => {
            return (
              <div className={styles.demoPage} key={idx}>
                <Button type="primary" className={styles.demoButton} onClick={event => {
                  // event.stopPropagation();
                  // event.preventDefault();
                  // event.nativeEvent.stopImmediatePropagation();
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
          <Space style={{ margin: '5px' }} >
            <Button type="primary" onClick={() => {
              book.current.pageFlip().flipPrev()
            }}>Previous page</Button>
            {/* [<span class="page-current">1</span> of <span class="page-total">-</span>{audioList.length}] */}
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
      </div>}
    </BrowserOnly>
  )
}
