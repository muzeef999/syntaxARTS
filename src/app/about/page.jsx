import React from 'react'
import Image from "next/image"
import about from "../asserts/aboutus.webp"
const page = () => {
  return (
    <div className='about'>
     <div className='container'>
      <div className='about-box'>
       <h2>About Us</h2>
      </div>
      <div className='row about-row'>
        <h3 className='my-4' style={{color:"blue",fontWeight:"700"}}>About Us</h3>
        <p style={{textAlign:"justify"}}>At Syntax Arts, our mission is intricately woven around empowering businesses with state-of-the-art custom software solutions. We are steadfastly committed to delivering excellence, innovation, and value to our clients. Concurrently, our vision aspires to establish Syntax Arts as a paramount entity in the realm of custom software development, epitomizing creativity, technological prowess, and unwavering dedication to client success. Through strategic foresight and operational excellence, we aim to set industry benchmarks, foster enduring relationships, and contribute meaningfully to the digital evolution of businesses worldwide.</p>
     <div className="col-md-6">
       <div style={{textAlign:"justify"}}>
          <span style={{textAlign:"justify"}}><b>Our Mission : </b> At Syntax Arts, our primary mission is to empower businesses by delivering cutting-edge custom software solutions. We are dedicated to understanding the unique needs of each client and providing tailored services that drive efficiency, productivity, and growth. Our team of skilled developers and designers work collaboratively to create innovative solutions that not only meet but exceed expectations. We believe in the power of technology to transform businesses, and we are committed to being a trusted partner in our clients' digital journeys.</span>
       </div>
       <div className='my-3' style={{textAlign:"justify"}}>
          <span style={{textAlign:"justify"}}><b>Our Vission : </b> Our vision at Syntax Arts is to be recognized as a beacon of creativity and technology in the custom software development industry. We aspire to set industry standards for excellence, innovation, and customer satisfaction, continually pushing boundaries and reshaping the future of digital solutions. By fostering a culture of continuous improvement and staying at the forefront of technological advancements, we aim to provide solutions that are not only effective but also sustainable and scalable. Our goal is to build long-lasting relationships with our clients, helping them to navigate the complexities of the digital world and achieve unprecedented success. We envision a future where businesses of all sizes can leverage our expertise to drive their growth and transformation in the ever-evolving digital landscape.</span>
       </div>
     </div>
     <div className="col-md-6">
      <Image src={about} className='about_img'/>
     </div>
      </div>
     </div>


     {/* start */}
  <div className='about-ser'>
  <div className='container'>
  {/* <div className='about-box'>
       <h2>About Us</h2>
      </div> */}
    {/* <div className='row about-rows'>
      <div className="col-md-4">

      </div>
      <div className="col-md-4">

      </div>
      <div className="col-md-4">

      </div>
    </div> */}
     </div>
  </div>

  <div className="container">
<div className='service-box'>
       <div><h1>News Letter</h1></div>
       <div className='input_box'>
         <div >
          <input type="text" name="" id="" className='input_one' placeholder='Enter Your Email' />
         </div>
         <div className='input_two'>
          <h6>Subscribe</h6>
          
         </div>
       </div>
      </div>
   
</div>
      
      <div className="container my-5 ">
         <h5 className='text-center'>Shaikmuzeef9999@gmail.com</h5>
         <h2 className='text-center' style={{color:"blue",fontWeight:"700"}}>Lets Talk About The Project</h2>
         <p className='text-center'>Expertise in web design and development, combined with a proven track record of successful projects, make our digital agency the ideal choice for creating a professional and impactful website.</p>

         <div className='d-flex justify-content-center'>
         <button style={{padding:"50px"}} className='btns'>LET'S TALK</button>
         </div>
      </div>
  
    </div>
  )
}

export default page