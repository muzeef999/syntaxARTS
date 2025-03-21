"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import banner from "./asserts/homebanner.webp"
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import webdesign from "./asserts/web-design1.jpg"
import webdesign2 from "./asserts/web-design2.jpg"
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import waterimage from "./asserts/whitearrowgif.gif"
import workflow from "./asserts/workflow.webp"
import service from "./asserts/service.jpg"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { TiWaves } from "react-icons/ti";
import { Footer } from "./Footer";
export default function Home() {
  return (
  <div>
     <div >
<div className="home_page">
<div className="container">
<div className="row row-data">

  <div className="col-md-6 home-head">
    <h1 style={{color:"blue",fontWeight:"700"}}>Transform Your Ideas into
    Digital Reality</h1>
    <p>
    Your Vision, Our Expertise - Unleash the Power of Web  Development with a team of our expert developers.
    </p>
    <div>
<button  className="btnss">Contact Us</button>
</div>
  </div>

  <div className="col-md-6 Image_group">

<Image src={banner} className="banner" />

</div>


</div>
 </div>
</div>


<div className="container">
<div className="icon">
   
   <div className="d-flex">
    <div className="linkdin">
    <TiSocialLinkedin />
    </div>
    <div className="linkdin">
    <FaInstagram />
    </div>
    <div className="linkdin">
    <CiMail />
    </div>
   </div>

 
 </div>
</div>

<div className="section ">
<div className="container">
<h2 className="text-center my-3">Explore Syntax Arts </h2>
<p className="text-center">At SyntaxArts, we use software that is captivating, cutting edge, and inventive to break down barriers. We love more than just coding; we love to create engaging digital experiences. As creators propelled by exceptional design, we help businesses attain previously unheard-of levels of success. Join us on an imaginative journey as we use our skills and inventive solutions to redefine what is possible.</p>

<div className="row home-row">
<div className="col-md-6 second-format">
<div className="parent">
  <div className="one">
     <Image src={webdesign} className="img"/>
  </div>
  <div className="two">
     <Image src={webdesign2} className="img"/>
  </div>
  <div className="three">
     <Image src={waterimage}  className="arrow"/>
  </div>
</div>
</div>
<div className="col-md-6 my-5 d-grid justify-content-center top-format">

<h6 style={{color:"blue"}}>Bring your vision to life</h6>
<h1>Our Specialization</h1>
<p className="po">At Syntax Arts, we specialize in web development, graphic design, and digital marketing. We break down barriers using captivating, modern, and innovative software. Our passion goes beyond coding; we create inspiring digital experiences. As innovators driven by superior design, we enable companies to achieve unprecedented success. Join us on a creative adventure as we redefine what's possible with our knowledge and creative solutions.</p>
<p className="po">Our team is dedicated to pushing the boundaries of what's achievable in the digital realm. Whether it's crafting a visually stunning website, designing compelling graphics, or implementing cutting-edge marketing strategies, we bring creativity and expertise to every project. Let Syntax Arts be your partner in navigating the digital landscape and achieving extraordinary results.</p>
<div>
<button className="btns">More about us</button>
</div>
</div>

</div>
</div>

</div>

<div className="container syn ">
<h6 className="text-center">Infinite potential | Unlocked through vision | Skill meets imagination | Custom digital masterpieces | Captivate | Inspire | Innovate | Break boundaries</h6>
<h6 className="text-center">Together we build it At Syntax Arts</h6>
</div>


<div className="scroll">

  <div className="d-flex justify-content-center align-items-center scr" style={{gap:"20px"}}>
    <span>SERVICE || WEB DEVELOPMENT || SERVICE || GRAPHICE DESIGN || SERVICE || DIGITAL MARKETING ||</span> 
  
    <span className="span2">SERVICE || WEB DEVELOPMENT || SERVICE || GRAPHICE DESIGN || SERVICE || DIGITAL MARKETING || </span>
    <span> </span>
  </div>

</div>


{/* build */}

<div className="container">
<div className="row build">
<div className="col-md-3 b">
<div className="d-flex justify-content-center">
<div className="build-box">
<FaRegLightbulb />
</div>
</div>
<div>
  <h5 className="text-center my-3">Customized solution</h5>
  <p style={{textAlign:"center"}}>At SyntaxArts, we totally understand that every business is unique and different, which is why we offer customized website solutions to meet your specific needs, goals, and requirements.</p>
</div>
</div>
<div className="col-md-3 b">
<div className="d-flex justify-content-center">
<div className="build-box">
<FaRegHandshake />
</div>
</div>
<div>
  <h5 className="text-center my-3">Quality Control</h5>
  <p style={{textAlign:"center"}}>As a company committed to maintaining high quality standards, our quality control process entails ensuring that a website adheres to specific criteria for excellence, usability, functionality, and performance .</p>
</div>
</div>
<div className="col-md-3 b">
<div className="d-flex justify-content-center">
<div className="build-box">
<FaChartColumn />
</div>
</div>
<div>
  <h5 className="text-center my-3">Value pricing</h5>
  <p style={{textAlign:"center"}}>We determine what makes the client's website unique and how it will deliver value to their business, such as driving sales, generating leads, or improving customer engagement.</p>
</div>
</div>
<div className="col-md-3 b">
<div className="d-flex justify-content-center">
<div className="build-box">
<RiTeamLine />

</div>
</div>
<div>
  <h5 className="text-center my-3">Expert Team</h5>
  <p style={{textAlign:"center"}}>Our team of experienced professionals works closely with you to understand your goals, target audience, and brand identity, ensuring that we create a website that reflects your unique vision and objectives.</p>
</div>
</div>
</div>
</div>

{/* heelo */}

<div className="container my-4">
<h3 className="text-center"style={{color:"blue",fontWeight:"600"}}>Exploring Trends & Our Perspectives</h3>
<p className="text-center">Journey with us through the intersections of innovation, design, and market dynamics. Access timely articles, expert insights, and actionable strategies to drive your business aspirations.</p>
</div>

{/* workflow */}
<div className="workflow">
<div className="container">
<div className="row d-flex justify-content-center align-items-center">
<div className="col-md-6">
<div >
<h1 style={{color:"blue",fontWeight:"600"}} className="usecase">Workflow</h1>
</div>
<Image src={workflow}  className="work"/>
</div>
<div className="col-md-6 point">
<div className="all-box" >
<div className="d-flex all">
<div className="circles">
<span>1</span>
</div>
<div style={{width:"500px"}} className="d-grid justify-content-center align-items-center">
<h5 className="ms-3" style={{color:"blue",fontWeight:"600"}}>Initial Consultation:</h5>
  <p className="ms-3">Start by sharing your ideas and goals with us. We'll listen, understand your needs, and lay the groundwork for success.</p>
</div>
</div>
<div className="d-flex all">
<div className="circles">
<span>2</span>
</div>
<div style={{width:"500px"}} className="d-grid justify-content-center align-items-center">
<h5 className="ms-3" style={{color:"blue",fontWeight:"600"}}>Strategic Blueprint:</h5>
  <p className="ms-3">Utilizing our expertise across various domains—ranging from branding and digital solutions to product development and marketing—we craft a strategic blueprint. This serves as our roadmap, aligning with your goals and industry nuances.</p>
</div>
</div>
<div className="d-flex all">
<div className="circles">
<span>3</span>
</div>
<div style={{width:"500px"}} className="d-grid justify-content-center align-items-center">
<h5 className="ms-3" style={{color:"blue",fontWeight:"600"}}>Execution & Development:</h5>
  <p className="ms-3">Moving forward, our seasoned team swings into action, implementing the devised strategy with precision and creativity. Using state-of-the-art technologies and methodologies, we bring your vision to fruition while adhering to timelines and quality benchmarks.</p>
</div>
</div>
<div className="d-flex all">
<div className="circles">
<span>4</span>
</div>
<div style={{width:"500px"}} className="d-grid justify-content-center align-items-center">
<h5 className="ms-3" style={{color:"blue",fontWeight:"600"}}>Evaluation & Refinement:</h5>
  <p className="ms-3">Our commitment to excellence extends beyond execution. We consistently evaluate outcomes, gather feedback, and refine strategies to ensure optimal results, adaptability, and sustainable growth for your project.</p>
</div>
</div>
</div>


</div>
</div>
</div>
</div>


{/* one step solution */}


<div className="onestep">
<div className="container">
<div className="row d-flex justify-content-center align-items-center">
<div className="col-md-8 handimg">
<div className="d-flex align-items-end">
<div >
<span><TiWaves /></span> <span>Complete Solution</span>
<h2 style={{color:"blue",fontWeight:"600"}}>One-stop solution for all your Digital needs</h2>
</div>
</div>

<div className="container my-3">
<div className="row heros">
<div className="hero col-md-6">
 
   <h3>Fully customized websites</h3>
   <p>Offering businesses the opportunity to create a unique online presence tailored specifically to their brand identity, objectives, and target audience</p>
   
</div>
<div className="hero col-md-6">
<h3>All services under one roof</h3>
   <p>From design and development to hosting and maintenance,SEO Services, Digital Marketing our comprehensive solutions cover every aspect of your online presence.</p>
</div>
<div className="hero col-md-6">
<h3>Highly skilled Team</h3>
   <p>With a deep understanding of cutting-edge technologies and industry best practices, our experts craft websites that stand out in both design and functionality.</p>
</div>
<div className="hero col-md-6">
<h3>On-time delivery</h3>
   <p>Our efficient project management ensure that your website is completed promptly. From concept to launch, we work diligently to meet deadlines and exceed expectations.</p>
</div>
</div>
</div>
</div>
<div className="col-md-4">
<Image src={ service} className="service-img"/>
</div>
</div>
</div>
</div>
  
   <FloatingWhatsApp
      phoneNumber="9959456647" // Replace with your phone number
      accountName="Syntax Arts"
      avatar="./logoicon.png"
      allowEsc
      notification
      notificationSound
    />
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
  </div>
  );
}
