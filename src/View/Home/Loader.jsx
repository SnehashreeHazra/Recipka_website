import React from 'react'
import './Home.css'
const Loader = () => {
  return (
    <>
      <div className='loader_container' style={{
        height:'100vh',
        background:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'fixed',
        top:0,
        width:'100%',
        zIndex:999,
      }}>
        <div className='loader' style={{
            zIndex:9999
        }}></div>
      </div>
    </>
  )
}

export default Loader
