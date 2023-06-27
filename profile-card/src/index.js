import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return (
    < >
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList/>
        </div>
      </div>
    </>
  )
}

function SkillList(){
  return (
      <div className="skill-list">
        <Skill skill="Unity" emoji="💪" color="cyan"/>
        <Skill skill="PHP" emoji="💪" color="orange"/>
        <Skill skill="React" emoji="🐥" color="yellow"/>
        <Skill skill="MySQL" emoji="💪" color="orangered"/>
      </div>
  )
}

function Skill(props){
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

function Intro(){
  return (
    <div>
      <h1>คณัสนันท์ กมลรัตนพิสุทธิ์</h1>
      <p>
          นักศึกษาคณะวิทยาศาสตร์ สาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร
          มหาวิทยาลัยอุบลราชธานี ชื่นชอบในการใช้คอมพิวเตอ์รและการเขียนโปรแกรม
          งานอดิเรก นอน..ดูหนัง
      </p>
    </div>
  )
}

function Avatar(){
  return <img className='avatar' src="beru.jpg" alt="My Avatar" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);