import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import freecodecamplogo from './images/freecodecamp-logo.png'

import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [screenValue, setScreenValue] = useState('')
  const symbols = ['+', '-', '*', '/', '.']

  const buttonClick = (v) => {
    let hasdecimaldot = false

    if(v == '.'){
      const array_number = [];
      let numsaver = ''
      
      for (let l of screenValue) {
        if (l !== '+' && l !== '-' && l !== '*' && l !== '/') {
          numsaver = numsaver + l
        } else {
          array_number.push(numsaver)
          numsaver = ''
        }
      }
      if (numsaver !== '') {
        array_number.push(numsaver)
        numsaver = ''
      }
        
      for (let x of array_number[array_number.length - 1]) {
        if (x == '.') {
          hasdecimaldot = true
        }
      }
    }
    if(hasdecimaldot){
      return
    }

    if (!symbols.includes(String(screenValue).slice(-1))) {
      setScreenValue(screenValue + String(v))
    } else if (!symbols.includes(v)) {
      setScreenValue(screenValue + String(v))
    }

  }

  const showResult = () => {
    try {
      setScreenValue(evaluate(screenValue))

    } catch (error) {

    }
  }

  const resetScreen = () => {
    setScreenValue('')
  }
  return (
    <div className="App">
      <div className='image-container'>
        <img className='freecodecamp-logo'
          src={freecodecamplogo}></img>
      </div>
      <div className='calculadora-container'>
        <div className='calculadora-container-box'>
          <Screen value={screenValue} />
          <div className='buttons-container'>
            <Button
              value={1}
              isOp={false}
              handleInput={() => { buttonClick(1) }}
            />
            <Button
              value={2}
              isOp={false}
              handleInput={() => { buttonClick(2) }}

            />
            <Button
              value={3}
              isOp={false}
              handleInput={() => { buttonClick(3) }}

            />
            <Button
              value={'+'}
              isOp={true}
              handleInput={() => { buttonClick('+') }}

            />
            <Button
              value={4}
              isOp={false}
              handleInput={() => { buttonClick(4) }}

            />
            <Button
              value={5}
              isOp={false}
              handleInput={() => { buttonClick(5) }}

            />
            <Button
              value={6}
              isOp={false}
              handleInput={() => { buttonClick(6) }}

            />
            <Button
              value={'-'}
              isOp={true}
              handleInput={() => { buttonClick('-') }}

            />
            <Button
              value={7}
              isOp={false}
              handleInput={() => { buttonClick(7) }}

            />
            <Button
              value={8}
              isOp={false}
              handleInput={() => { buttonClick(8) }}

            />
            <Button
              value={9}
              isOp={false}
              handleInput={() => { buttonClick(9) }}

            />
            <Button
              value={'*'}
              isOp={true}
              handleInput={() => { buttonClick('*') }}

            />
            <Button
              value={'='}
              isOp={false}
              handleInput={showResult}
            />
            <Button
              value={0}
              isOp={false}
              handleInput={() => { buttonClick(0) }}

            />
            <Button
              value={'.'}
              isOp={false}
              handleInput={() => { buttonClick('.') }}

            />
            <Button
              value={'/'}
              isOp={true}
              handleInput={() => { buttonClick('/') }}

            />
          </div>

          <Button
            value='Clear'
            isOp={false}
            handleInput={resetScreen}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
