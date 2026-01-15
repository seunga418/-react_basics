// 루트 커포넌트
import './App.css';
import Header from './components/Header'; // 리액트에서는 확장자 삭제 가능
import Main from './components/main';
import Footer from './components/Footer';
import Button from './components/Button'
import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');
  
  console.log(light);
  return (
    <div>
      {light === 'ON'? (
        <h1 style = {{backgroundColor: 'orange'}}>ON</h1>
      ) : (
        <h1 style = {{backgroundColor : 'gray'}}>OFF</h1>
      )}

        <button 
          onClick = {() => {
            setLight(light === "ON"? "OFF" : "ON");
          }}
        >
          {light === 'ON'? '끄기' : '켜기'} {/* light = light === 'ON'? "끄기":"켜기" -- 리렌더링이 안됨 */}
        </button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick = {() => {
          setCount(count + 1);
        }}>
          +
        </button>
      </div>
      <Counter />
    </>
  )
}

function App() {

  return(
    <>
      <Bulb />
      <Counter />
    </>
  );
};

export default App