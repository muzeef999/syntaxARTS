import React from 'react'

const page = () => {
  return (
    <div>
        <div className="container">
        <div className='about-box'>
       <h2>Service</h2>
      </div>
<div className="row my-5">
  <div className="col-md-8">
    <div className="container">
      <div className="row gap-3">
        <div className="col-md-6 service_box">
           <div className='' style={{position:"absolute",padding:"10px",zIndex:"999"}}>
           <h3 className='text-center'>Web Development</h3>
           <p>We craft visually stunning, user-friendly websites that captivate your audience and drive business growth.</p>
           </div>
           <div className='box_2'>

           </div>
        </div>
        <div className="col-md-6  service_box digi" >
        <div className='' style={{position:"absolute",padding:"10px",zIndex:"999"}}>
           <h3 className='text-center'>Digital Marketing​</h3>
           <p>Our data-driven strategies ensure your brand stands out in the crowded digital landscape, driving engagement, conversions, and ROI.</p>
           </div>
           <div className='box_2'>

           </div>
        </div>
        <div className="col-md-6 ui service_box">
        <div className='' style={{position:"absolute",padding:"10px",zIndex:"999"}}>
           <h3 className='text-center'>UI/UX</h3>
           <p>With our expertise in website designing we are able to design websites which are easy to use and customizable to client needs.</p>
           </div>
           <div className='box_2'>

           </div>
        </div>
        <div className="col-md-6 design service_box">
        <div  style={{position:"absolute",padding:"10px",zIndex:"999"}}>
           <h3 className='text-center'>Designing</h3>
           <p>Our creative team breathes life into your brand with captivating visuals, graphics, and user experiences.</p>
           </div>
           <div className='box_2'>

           </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 allservice">
   <div className="services">All Services</div>
   <div className="services">Web Development</div>
   <div className="services">Digital Marketing</div>
   <div className="services">UI/UX</div>
   <div className="services">Graphic Design</div>
  </div>
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