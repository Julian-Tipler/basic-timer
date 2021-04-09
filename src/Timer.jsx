import React from 'react'
import { useState, useEffect } from 'react'

export default function Timer() {
    const [seconds,setSeconds] = useState(10000);

    useEffect(() => {
        let interval
        if(seconds > 0) {
            interval = setInterval(()=> {
                setSeconds(prevTime => {
                    if(prevTime>0) {
                        return prevTime - 1
                    }
                    else {
                        return prevTime
                    }
                })
            }, 1000)
        }
        return () => {
            clearInterval(interval)
        }
    }, [])

    const formatTime = () => {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds%60
        if(minutes>99){
            minutes = 99
            secs = 60
        }
        return (minutes>=10 ? String(minutes) : '0' + String(minutes)) + ':' + (secs>=10 ? String(secs) : '0' + String(secs))
    }

    return (
        <div>
            {formatTime()}
        </div>
    )
}
