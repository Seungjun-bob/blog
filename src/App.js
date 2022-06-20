/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let posts = "강남 고기 맛집";
  let [hit, hitChange] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }
  function 순서바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '강남 우동 맛집';
    newArray[1] = '남자 코트 추천';
    글제목변경( newArray );
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color: 'blue', fontSize : '30px'} }>개발 Blog</div>        
      </div>
      <button onClick={ 제목바꾸기 }> 제목 버튼 </button><br></br>
      <button onClick={ 순서바꾸기 }> 순서 버튼 </button>
      <div className='list'>      
        <h3>{ 글제목[0] }<span onClick={ ()=>{ hitChange(hit + 1) } }>👍</span> {hit} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>      
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>      
        <h3>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
