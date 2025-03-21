import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image"
import contact from "../asserts/contactform.webp"
const page = () => {
  return (
    <div>
      <div className="container">
      <div className='about-box'>
       <h2>Contact us</h2>
      </div>
      </div>
     <div className="container">
        <div className="row contact-row">
   <div className='col-md-7 contact-box'>
 
   <form>
  <div className='box'>
  <div className="mb-3">
    <input type="text" placeholder='Name ' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" placeholder='Emial ' className="form-control" id="exampleInputPassword1"/>
  </div>
  
  </div>
  <div className='box'>
  <div className="mb-3">
    <input type="number" placeholder='Mobile Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Address' className="form-control" id="exampleInputPassword1"/>
  </div>
  </div>
  <div className='boxs'>
  <div className="mb-3">
    <textarea type="text" placeholder='Comment' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>    
  
  </div>
  <button type="submit" className="btn btn-primary me-auto">Submit</button>
</form>
   </div>
   <div className="col-md-4 cont_img">
<Image src={contact} />
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
