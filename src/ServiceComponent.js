import React from 'react'

const ServiceComponent = ({heading, imgClass}) => {
  return (
    <div className={`service-card ${imgClass} image`} >
      <h2>{heading}</h2>
    </div>
  )
}

export default ServiceComponent
