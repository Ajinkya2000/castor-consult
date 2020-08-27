import React from 'react'
import ServiceComponent from './ServiceComponent'

const Services = () => {
  return (
    <div className="services">
      <ServiceComponent heading="Architecture" imgClass="image1"/>
      <ServiceComponent heading="Engineering" imgClass="image2"/>
      <ServiceComponent heading="Project Management" imgClass="image3"/>
      <ServiceComponent heading="Consultancy" imgClass="image4"/>
      <ServiceComponent heading="Infrastructure" imgClass="image5"/>
    </div>
      
  )
}

export default Services
