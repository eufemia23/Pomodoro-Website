
import { useState, useEffect } from 'react'




function Timer() {
  const [session, setSession] = useState(5)
  const [timer, setTimer] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)
  const [resetTime, setResetTime] = useState(900)

  let time = new Date(timer * 1000).toISOString().substring(14, 19)

  function sessionIncrement() {
    setSession(prevSession => session + 1)
  }
  function sessionDecrement() {
    if (session > 0) {
      setIsRunning(false)
      setSession(prevSession => prevSession > 0 && prevSession - 1)
    }
  }

  function resetTimer() {
    setIsRunning(false)
    setTimer(resetTime)
  }

  function increment() {
    const newTime = timer + 300
    setIsRunning(false);
    setTimer(newTime);
    setResetTime(newTime)
  }

  function decrement() {
    const newTime = timer - 300
    setIsRunning(false);
    setTimer(newTime);
    setResetTime(newTime)
  }


  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
      }, 1000);
      if (timer === 0) {
        sessionDecrement()
        setIsRunning(false)
      }
      return () => clearInterval(interval)
    }
  }, [isRunning, session, timer])

  useEffect(() => {
    setResetTime(timer)
  }, [])


  return (
    <div className="App" class="bg-primary-white w-100 ml-10 pb-7 ">
      
      <div class="flex items-center justify-center pt-10 pb-1 text-[20px]">

        <button class="border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer hover:bg-light-pink active:bg-primary-pink mx-3 w-37">POMODORO</button>
        <button class="border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer hover:bg-light-pink active:bg-primary-pink mx-3 w-37">BREAK</button>

      </div>
      

      <h1 class="text-[110px] font-bubbly text-primary-pink flex items-center justify-center font-semibold">{time}</h1>

      <div class="flex items-center justify-center ">
        
        <button onClick={() => setIsRunning(true)}  class="border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer hover:bg-light-pink active:bg-primary-pink mx-3 w-20">Start</button>
        <button onClick={() => setIsRunning(false)}  class="border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer hover:bg-light-pink active:bg-primary-pink mx-3 w-20">Pause</button>
        <button onClick={() => resetTimer()}  class="border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer hover:bg-light-pink active:bg-primary-pink mx-3 w-20">Reset</button>
      </div>
      


      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>


      <div class="bg-primary-pink mx-9 py-10 mt-10">
        
        <div class="flex items-center justify-center">
          <div class="font-bubbly text-2xl text-light-brown  mb-4">SESSION #</div>
          <div class="font-bubbly text-2xl   mb-4 text-light-brown hover:text-primary-white">{session}</div>
        </div>

        <div class="font-bubbly text-[15px] text-light-brown flex items-center justify-center">
          <button onClick={() => sessionDecrement()} class="mx-4 hover:cursor-pointer hover:text-primary-white active:text-dark-white">- Remove Session</button>
          <button onClick={() => sessionIncrement()} class="mx-4 hover:cursor-pointer hover:text-primary-white active:text-dark-white">+ Add Session</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Timer;
