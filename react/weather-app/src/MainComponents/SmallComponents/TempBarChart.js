import React from 'react';

export default ({data}) => {
    if(data){
        const days = ['S','M','T','W','T','F','S']
        const {hi, lo} = data.reduce((a,v)=>(
            {
                hi: (a.hi > v.high ? a.hi : v.high),
                lo: (a.lo < v.low ? a.lo : v.low) 
            }),
            { hi: -200, lo: 200 })
            const pixelsPerDegree = 100/(hi-lo)
            return data.map((day,key)=>{
                let date1 = new Date()
                date1.setTime(day.time*1000)
                const dayIndication = days[date1.getDay()]
                return (
                    <span key={key}> 
                        <span style={{
                            height: parseInt((hi-day.high)*pixelsPerDegree),
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end'

                        }}>{parseInt(day.high)}</span>
                        <span style={{
                            backgroundColor: 'grey',
                            height: parseInt((day.high-day.low)*pixelsPerDegree)
                        }}></span>
                        <span style={{
                        }}>{parseInt(day.low)}</span> 
                        <span style={{
                            height: 60,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',

                        }}>{dayIndication}</span>
                    </span>)})
                
    
    }
    else{
        return (
            <span></span>
        )
    }
}