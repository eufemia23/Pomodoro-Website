
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
    <div className="bg-[url(img/page.PNG)] bg-contain h-132 w-100 ml-[32px] rounded-md">
      
      <div className="flex items-center justify-center pt-17 pb-1 text-[20px]">

        <button className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-2 w-37 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'pomodoro' ? 'bg-light-pink border-primary-pink' : 'border-light-brown hover:bg-light-pink active:bg-light-pink active:border-primary-pink'}`} onClick={() => handlePomodoroClick()}>POMODORO</button>
        <button className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-2 w-37 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'bg-accent-green border-accent-dark-green ' : 'hover:bg-accent-green border-light-brown active:bg-accent-green active:border-accent-dark-green'}`} onClick={() => handleBreakClick()}>BREAK</button>

      </div>
      

      <h1 className={`text-[110px] font-bubbly flex items-center justify-center font-semibold text-shadow-dark-white text-shadow-sm ${timerMode === 'break' ? 'text-accent-dark-green' : 'text-primary-pink'}`}>{time}</h1>

      <div className="flex items-center justify-center ">
        
        <button onClick={() => setIsRunning(true)} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green' : 'hover:bg-light-pink active:border-primary-pink active:bg-light-pink'}`}>Start</button>
        <button onClick={() => setIsRunning(false)} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green' : 'hover:bg-light-pink active:border-primary-pink active:bg-light-pink'}`}>Pause</button>
        <button onClick={() => resetTimer()} className={`shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] px-1 text-light-brown font-bubbly hover:cursor-pointer mx-3 w-20 duration-100 ease-linear mb-1 active:mb-0 active:shadow-none active:mt-[2px] ${timerMode === 'break' ? 'hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green' : 'hover:bg-light-pink active:border-primary-pink active:bg-light-pink'}`}>Reset</button>
      </div>
      


      <button className='ml-47' onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>


      <div className="shadow-[0px_5px_5px_rgba(132,88,68,0.5)] w-78 flex justify-center mx-auto h-37 bg-darker-white border-4 border-wood-warm rounded-[20px]">
          <div className="h-[139px] border-4 border-darker-white rounded-[17px] bg-wood-warm  ">
            <div className="inset-shadow-[0px_7px_15px_rgba(254,236,213,0.2)] m-[5px] border-accent-white border-3 h-[121px] rounded-[10px] border-dashed text-center font-cursive font-bold text-dark-white text-[40px] pt-5 text-shadow-[0px_3px_5px_rgba(0,0,0,0.4)] shadow-[0px_5px_10px_rgba(0,0,0,0.3)]">



          <div className="flex items-center justify-center">
            <div className="font-bubbly text-2xl text-dark-white  mb-4">SESSION #</div>
            <div className="font-bubbly text-2xl   mb-4 text-dark-white hover:text-primary-white duration-100 ease-linear">{session}</div>
          </div>

          <div className="font-bubbly text-[16px] text-dark-white flex items-center justify-center w-70 h-6">
            <button onClick={() => sessionDecrement()} className="mx-2 hover:cursor-pointer hover:text-primary-white active:text-dark-white duration-100 ease-linear text-shadow-[0px_3px_5px_rgba(0,0,0,0.4)] pt-0 active:text-shadow-none active:pt-0.5">Remove Session</button>
            <button onClick={() => sessionIncrement()} className="mx-3 hover:cursor-pointer hover:text-primary-white active:text-dark-white duration-100 ease-linear text-shadow-[0px_3px_5px_rgba(0,0,0,0.4)] pt-0 active:text-shadow-none active:pt-0.5">Add Session</button>
          </div>




            </div>
          </div>
        </div>
        
        
        
      </div>
      

  );
}

export default Timer;
