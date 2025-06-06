
import { useState, useEffect } from 'react'




function Timer() {
  const [session, setSession] = useState(5)
  const [timer, setTimer] = useState(2)
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

  function automaticChange(interval: number) {
    clearInterval(interval)
    if (timerMode === 'pomodoro') {
      setTimerMode('break')
      setIsRunning(true);
    } else if (timerMode === 'break') {
      setTimerMode('pomodoro')
      setIsRunning(true);
    }
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
      }, 1000);
      if (timer === 0) {
        sessionDecrement()
        setIsRunning(false)
        if (timerMode === 'pomodoro') {
          setTimerMode('break')
          resetTimer()
          setIsRunning(true);
        } else if (timerMode === 'break') {
          setTimerMode('pomodoro')
          resetTimer()
          setIsRunning(true);
        }
      }
      
      return () => clearInterval(interval)
      
    }
  }, [isRunning, session, timer])

  useEffect(() => {
    setResetTime(timer)
  }, [])


  const [timerMode, setTimerMode] = useState('pomodoro')

  const handlePomodoroClick = () => {
    setTimerMode('pomodoro')
    setTimer(1500)
    setIsRunning(false);
    setResetTime(1500)
  }

  const handleBreakClick = () => {
    setTimerMode('break')
    setTimer(300)
    setIsRunning(false);
    setResetTime(300)
  }

  console.log(timerMode)


  return (
    <div className="bg-primary-white w-100 ml-[32px] rounded-md h-130">
      
      <div className="flex items-center justify-center pt-10 pb-1 text-[20px] ">

        <button className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-37 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'pomodoro' ? 'bg-light-pink border-primary-pink' : 'border-light-brown hover:bg-light-pink'}`} onClick={() => handlePomodoroClick()}>POMODORO</button>
        <button className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-37 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'bg-accent-green border-accent-dark-green ' : 'hover:bg-accent-green border-light-brown'}`} onClick={() => handleBreakClick()}>BREAK</button>

      </div>
      

      <h1 className={`text-[110px] font-bubbly flex items-center justify-center font-semibold text-shadow-dark-white text-shadow-sm ${timerMode === 'break' ? 'text-accent-dark-green' : 'text-primary-pink'}`}>{time}</h1>

      <div className="flex items-center justify-center ">
        
        <button onClick={() => setIsRunning(true)} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green' : 'hover:bg-light-pink active:border-primary-pink'}`}>Start</button>
        <button onClick={() => setIsRunning(false)} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green' : 'hover:bg-light-pink active:border-primary-pink'}`}>Pause</button>
        <button onClick={() => resetTimer()} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green' : 'hover:bg-light-pink active:border-primary-pink'}`}>Reset</button>
      </div>
      


      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>


      <div className="bg-primary-pink mx-9 py-10 mt-10 rounded-md">
        
        <div className="flex items-center justify-center">
          <div className="font-bubbly text-2xl text-light-brown  mb-4">SESSION #</div>
          <div className="font-bubbly text-2xl   mb-4 text-light-brown hover:text-primary-white duration-100 ease-linear">{session}</div>
        </div>

        <div className="font-bubbly text-[15px] text-light-brown flex items-center justify-center">
          <button onClick={() => sessionDecrement()} className="mx-4 hover:cursor-pointer hover:text-primary-white active:text-dark-white duration-100 ease-linear">- Remove Session</button>
          <button onClick={() => sessionIncrement()} className="mx-4 hover:cursor-pointer hover:text-primary-white active:text-dark-white duration-100 ease-linear">+ Add Session</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Timer;
