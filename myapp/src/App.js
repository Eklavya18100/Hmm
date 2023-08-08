import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';



function App() {
  const [inputEValue, setInputEValue] = useState('');
  const [inputDValue, setInputDValue] = useState('');
try {
 

  const handleEChange = (event) => {
    setInputEValue(event.target.value);
  };

  const encrypt = () => {

    let obj = {
      A: 'hh',
      B: 'hm',
      C: 'mh',
      D: 'mm',
      E: 'hhh',
      F: 'hhm',
      G: 'hmh',
      H: 'hmm',
      I: 'mhh',
      J: 'mhm',
      K: 'mmh',
      L: 'mmm',
      M: 'hhhh',
      N: 'hhhm',
      O: 'hhmh',
      P: 'hhmm',
      Q: 'hmhh',
      R: 'hmhm',
      S: 'hmmh',
      T: 'hmmm',
      U: 'mhhh',
      V: 'mhhm',
      W: 'mhmh',
      X: 'mhmm',
      Y: 'mmhh',
      Z: 'mmhm',
      a: 'hh',
      b: 'hm',
      c: 'mh',
      d: 'mm',
      e: 'hhh',
      f: 'hhm',
      g: 'hmh',
      h: 'hmm',
      i: 'mhh',
      j: 'mhm',
      k: 'mmh',
      l: 'mmm',
      m: 'hhhh',
      n: 'hhhm',
      o: 'hhmh',
      p: 'hhmm',
      q: 'hmhh',
      r: 'hmhm',
      s: 'hmmh',
      t: 'hmmm',
      u: 'mhhh',
      v: 'mhhm',
      w: 'mhmh',
      x: 'mhmm',
      y: 'mmhh',
      z: 'mmhm'
    };

    let ans = "", w = "";
    let p = inputEValue.split(' ');

    for (let i = 0; i < p.length; i++) {
      
      for (let j = 0; j < p[i].length; j++) {
        // console.log(p[i][j]);
        if(w.length==0)w +=obj[p[i][j]];
        else
        w += "."+obj[p[i][j]];
      }
      ans =ans+ w + " ";
      w = "";
    }
    // console.log(p);

    return ans;

  }

  const handleDChange = (event) => {
    setInputDValue(event.target.value);
  };

  const decrypt = () => {
    let encryptedValue=inputDValue;
    let obj = {
      hh: 'a',
      hm: 'b',
      mh: 'c',
      mm: 'd',
      hhh: 'e',
      hhm: 'f',
      hmh: 'g',
      hmm: 'h',
      mhh: 'i',
      mhm: 'j',
      mmh: 'k',
      mmm: 'l',
      hhhh: 'm',
      hhhm: 'n',
      hhmh: 'o',
      hhmm: 'p',
      hmhh: 'q',
      hmhm: 'r',
      hmmh: 's',
      hmmm: 't',
      mhhh: 'u',
      mhhm: 'v',
      mhmh: 'w',
      mhmm: 'x',
      mmhh: 'y',
      mmhm: 'z'
    };
  
    let ans = "";
    let words = encryptedValue.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      let letters = words[i].split('.');
      let w="";
      for (let j = 0; j < letters.length; j++) {
        {
          w += obj[letters[j]];
        }
      }
      ans += w+" ";
      
    }
  
    return ans.trim();
  }

  return (
    <div className="App">
      <h1>"Hmm machine"</h1>

      <div className="container">
        <h3>Encode</h3>
        <div>
          <input type="text" value={inputEValue} onChange={handleEChange} />
          <p> Encrypted result:{encrypt()}</p>
        </div>

      </div>
      <div className="container">
        <h3>Decode</h3>
        <div>
          <input type="text" value={inputDValue} onChange={handleDChange} />
          <p> Decrypted result:{decrypt()}</p>
        </div>

      </div>

    </div>
  );
} catch (error) {
  alert("I am a lazy developer. No conditon checks. Fix your shit coz my code won't be fixed...Hmm")
}
}


export default App;
