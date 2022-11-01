import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios'

export default function Hello () {
  // useEffect(() => {
  //   axios.get('https://openapi.twse.com.tw/v1/opendata/t187ap03_L').then(res => {
  //     console.log(res);
  //   })
  // })
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div style={{ width: '80%' }}>
          O’Glamping
          2021年O’glamping誕生在台灣海角的最南端，墾丁貓鼻頭國家公園內。這是一座愛露營人的夢幻天堂，有說走就走免裝備的野營服務，有專業露營車位，及DIY營位。獨樹一幟的獨門、獨院、獨戶的營位，保有露營的隱私，及降低聲音干擾，更備有多功能的種種設施及營區活動，讓露營更舒適及豐富動態。 遠眺大尖山，鄰近海灘，無光害的最佳觀星點，園主創造了一處人人皆可露的桃花源，邀您一起吹海風，戲灘，探索自然，盡享野營趣味。位於臺灣左腳最南端貓鼻頭公園旁，占地總面積約4公頃
        </div>

      </div>
    </Layout>
  );
}