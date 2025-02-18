import React, { useState ,useEffect,useRef} from 'react'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EastIcon from '@mui/icons-material/East';
import BrushSharpIcon from '@mui/icons-material/BrushSharp';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import ColorLensSharpIcon from '@mui/icons-material/ColorLensSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import tasveer from '../assets/hasnat.jpeg'
import tasveer2 from '../assets/hasanat.jpeg'
import circle from '../assets/circlee(1).png'
import image1 from '../assets/image 1.jpg'
import image2 from '../assets/image 2.jpg'
import image3 from '../assets/image 4.jpg'
import image4 from '../assets/hasnat3.jpg'
import bgwebdesign from '../assets/webdesign.jpg'
import bgwebdevo from '../assets/webdevelopment.jpg'
import bgmobdevlop from '../assets/mob-development.png'
import bggraphics from '../assets/graphics.jpg'

// FUNCTION FOR CURSER ANIMATION
function CursorDot() {
  const dotRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
    
      posX.current += (mouseX.current - posX.current) * 0.1;
      posY.current += (mouseY.current - posY.current) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posX.current}px, ${posY.current}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-50">
      <div className="w-3 h-3 bg-white rounded-full" />
    </div>
  );
}

export default function App() {
  return (
    <div className="cursor-none">
      <CursorDot />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl">Move your cursor!</h1>
      </div>
    </div>
  );
}




export const Main = () => {

  const projects = [
    {
      title: "Website Design",
      description: "Web Design, App Design",
      image: image1,
    },
    {
      title: "Website Design",
      description: "Web Design, App Design",
      image: image2,
    },
    {
      title: "Dashboard Design",
      description: "Web Design, App Design",
      image: image3,
    },
  ];


  const Services = [
    {
      title: "Website Design",
      description: "Designing intuitive and aesthetic web interfaces with a focus on user experience, creativity, and modern UI/UX principles",
      bgimage: bgwebdesign,
      Icon: <BrushSharpIcon style={{ color: 'white', height: '28px', width: '28px' }} />
    },
    {
      title: "Website Development",
      description: " Building dynamic and responsive websites using modern frameworks and technologies to ensure seamless user experiences.",
      bgimage: bgwebdevo,
      Icon: <CodeSharpIcon style={{ color: 'white', height: '28px', width: '36px' }} />
    },
    {
      title: "Mobile App Development",
      description: "Creating high-performance, user-friendly mobile applications for Android and iOS using native and cross-platform solutions",
      bgimage: bgmobdevlop,
      Icon: <PhoneIphoneSharpIcon style={{ color: 'white', height: '28px', width: '28px' }} />
    },
    {
      title: "Graphics Design",
      description: "Crafting visually appealing designs, including logos, branding materials, and digital content, to enhance brand identity.",
      bgimage: bggraphics,
      Icon: <ColorLensSharpIcon style={{ color: 'white', height: '28px', width: '28px' }} />
    }
  ];

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };
 
  const [open,setIsopen] = useState(false)
const handelopen =()=>{
  setIsopen(!open)

}

   
const [heading, setHeading] = useState('veloper');
const iterationRef = useRef(0);

const handleAnimationIteration = () => {
  iterationRef.current += 1;
  // Since we are using alternate-reverse,
  // odd iterations are reverse (erasing) cycles.
  if (iterationRef.current % 2 === 1) {
    setHeading(prev => (prev === 'veloper' ? 'signer' : 'veloper'));
  }
};

   

  return (

    <div className='w-full min-h-screen font-sans'>
      <CursorDot/>
      {/* NAVBAR START */}
      <div className=" bg-blue-950 pl-12 pr-2 fixed w-full z-50 flex items-center h-[80px] md:h-[120px]  " >
        <div className=" py-6 text-white w-[70%] lg:w-[35%] ">
          <h1 className="text-xl md:text-4xl font-bold">NOOR UL HASANAT</h1>
          </div>
          <div className="hidden lg:flex lg:w-[45%] space-x-7  justify-end pr-4 text-white w-[0%] b">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')}>HOME</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>ABOUT ME</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>PROJECTS</a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')}>SERVICES</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT ME</a>
          </div>        
          <div className='w-[20%] justify-end flex '>
            <button className="hidden lg:flex bg-blue-400 text-white ml-6 px-6 py-4 rounded-[44px] hover:bg-gray-900 hover:border-2 border-white font-semibold" onClick={(e) => handleScroll(e, 'contact')}>
              LETS' TALK </button>
              <button className=' lg:hidden' onClick={handelopen}> <ListSharpIcon style={{ color: ' white',height: '32px', width: '32px', border:'1px solid white', borderRadius :'8px',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}/></button>
          </div>       
      </div>
      {/* NAVBAR END HERE */}


      {/* PARENT DIV SECTION */}
      <div className='bg-red-400'>

        {/* DROPDOWN NAVBAR */}
      <div className={open?'  bg-[#143d63]  text-white fixed z-50  right-0 flex py-4 mr-2 mt-[80px] rounded-xl':'hidden'}>       
          <ul className='px-5 text-white text-sm'>
          <li className='py-1 '>  <a href="#home" onClick={(e) => {handleScroll(e, 'home');handelopen();}}>HOME</a></li>
          <li className='py-1'>  <a href="#about" onClick={(e) => {handleScroll(e, 'about');handelopen();}}>ABOUT ME</a></li>
          <li className='py-1'>  <a href="#projects" onClick={(e) => {handleScroll(e, 'projects');handelopen();}}>PROJECTS</a></li>
          <li className='py-1'>  <a href="#services" onClick={(e) => {handleScroll(e, 'services');handelopen();}}>SERVICES</a></li>
          <li className='py-1'>  <a href="#contact" onClick={(e) => {handleScroll(e, 'contact');handelopen();}}>CONTACT ME</a></li>
          </ul>         
          </div>
          {/* END OF DROPDOWN NAVBAR */}



        {/*   HOME SECTION START*/}
        <div className="lg:flex bg-[#041c33] p-10 min-h-screen border-b-8 border-white pt-[100px] md:pt-[200px] w-full" id='home'>
          {/* HOME-LEFT */}
          <div className="px-0 sm:px-20  lg:px-5   w-full lg:w-1/2 h-full ">
            <div className="">
              <div className="">
                <h2 className="text-sm font-semibold uppercase bg-[#142c7a] text-white px-2 py-1 inline-block rounded">N O O R - U L - H A S A N A T</h2>
              </div>
              <h3 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white mt-2 mb-6">
                HAY I'M HASANAT </h3>
              <h1 className=" lg:text-6xl md:text-5xl text-3xl mt-2 font-bold text-blue-500" id='has'  onAnimationIteration={handleAnimationIteration}>I'M A De{heading}</h1>
              <p className="text-white my-8  font-semibold lg:text-xl text-lg">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
              </p>
              </div>
              <div className='flex  space-x-10 w-full '>
                <button className="bg-[#0788ff] text-white px-2 lg:px-8 py-1 lg:py-3 rounded-full hover:bg-gray-900 hover:border-2 border-white" onClick={(e) => handleScroll(e, 'contact')}>
                  GET IN TOUCH ~
                </button>
                <div className='flex pt-1 lg:pt-0 space-x-2 items-center'>
                  <a href="https://www.facebook.com/" className="text-gray-600 hover:text-gray-900 transition-colors"><FacebookSharpIcon style={{ color: 'white', fontSize: 35, }} /></a>
                  <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="text-gray-600 hover:text-gray-900 transition-colors"><LinkedInIcon style={{ color: 'white', fontSize: 35 }} /></a>
                  <a href="https://twitter.com/login?" className="text-gray-600 hover:text-gray-900 transition-colors"><XIcon style={{ color: 'white', fontSize: 30 }} /></a>
                </div>
              </div>
            
          </div>
          {/* HOME RIGHT */}
          <div className='w-full lg:w-1/2 h-full px-0 sm:px-6 lg:px-2 py-4 lg:py-0 '>
            <img src={tasveer} alt='hasnat' className='w-full object-center h-fit shadow-xl rounded-3xl' />
          </div>
        </div>
        {/* END OF HOME SECTION */}


        {/*START OF ABOUT ME*/}
       
           <div className='lg:flex bg-[#041c33] p-10 w-full min-h-screen border-b-8 border-white pt-[60px] md:pt-[140px]' id='about'>        
        
              {/* Left Column - Content */}
              <div className="lg:w-1/2 w-full lg:relative px-0 sm:px-20 lg:px-0 py-8 lg:py-0 ">
                <div className='lg:absolute w-full h-full'>
                  {/* Background Image (Circle) */}
                  <div className="lg:absolute w-1/2 h-full  left-10   lg:flex items-end hidden ">
                    <img src={circle} className=" w-[100%] h-[55%]  animate-slow" alt="Background" />
                  </div>
                  {/* Foreground Image (Tasveer2) */}
                  <div className="lg:absolute lg:w-[70%] lg:h-[85%] w-full h-full top-0 left-40 z-10">
                    <img src={tasveer2} className="w-full h-full shadow-xl rounded-3xl" alt="Foreground" />
                  </div>
                </div>
              </div>
              {/* Right Column - Stats */}
              <div className="lg:w-1/2 w-full flex">
                <div className='w-[75%] sm:pl-20 lg:pl-0 lg:justify-normal'>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">ABOUT US</h2>
                  <h3 className="text-lg md:text-4xl font-semibold mb-2 text-white "> I AM AVAILABLE FOR</h3>
                  <h1 className="block text-lg md:text-4xl font-semibold text-blue-500 mb-2">UI UX DESIGN</h1>
                  <h1 className='text-lg md:text-4xl font-semibold text-white'>PROJECTS</h1>
                  <p className="text-white my-8">
                    The standard chunk of Loren Ipsum used since the 1500s is reproduced below for those
                    interested. Sections 110.32 and 110.33 from de Finibus Bonorum et Malorum by Cicero are
                    also reproduced in their exact original form, accompanied by English versions from the
                    1914 translation by H.Rackham.   </p>
                  <div>
                    <div className='md:flex gap-4 gap-y-1 grid w-full '>
                      <div className=" bg-slate-800 rounded-xl pl-4 py-3 flex-1">
                        <h2 className="text-3xl md:text-3xl font-medium text-white">280+</h2>
                        <h1 className="mt-2 font-medium text-white">Google <br />Review</h1>
                      </div>
                      <div className=" bg-slate-800 rounded-xl pl-4 py-3 flex-1">
                        <h1 className="text-3xl md:text-3xl font-medium text-white">15+</h1>
                        <h1 className="mt-2 font-medium text-white">Years <br />Experience</h1>
                      </div>
                      <div className="bg-slate-800 rounded-xl pl-4 py-3 flex-1">
                        <h2 className="text-3xl md:text-3xl font-medium text-white">49+</h2>
                        <h1 className="mt-2 font-medium text-white">Awward <br />Winning</h1>
                      </div>
                    </div>
                    <div className='w-full pt-6 pb-4'>
                      <button className="bg-[#0788ff] text-white  px-2 lg:px-8 py-1 lg:py-3 rounded-full hover:bg-gray-900 hover:border-2 border-white w-fit" onClick={(e) => handleScroll(e, 'contact')}>
                        GET IN TOUCH ~
                      </button>
                    </div>
                  </div>
                </div>
                <div className='w-[25%] pr-4'>
                  <img src={circle} alt='hasnat' className='w-full object-center h-fit animate-slow ' />
                </div>
              </div>
          
        </div>
        {/*END OF ABOUT ME  */}


        {/* START OF PROJECTS */}
        <div className='pl-8 sm:pl-20 pb-8 bg-[#041c33]  border-b-8 border-white pt-[60px] md:pt-[140px] w-full' id='projects'>
          <div className="">
            <h2 className="text-sm font-semibold uppercase bg-blue-500 text-white px-2 py-1 inline-block rounded">MY WORK</h2>
            <h3 className="md:text-5xl text-xl font-bold mt-2 text-white">RECENT PROJECT</h3>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 px-2">
            {projects.map((project) => (
              <div key={project} className="bg-white  rounded-xl overflow-hidden shadow-lg ">
                <div className="  rounded-xl overflow-hidden p-2 h-[250px]">
                  <img src={project.image} alt={project.title} className="w-full h-full hover:scale-110 transition-transform rounded-xl" />
                </div>
                <div className="p-4 pt-6 text-black flex ">
                  <div className=' flex-grow'>
                    <h4 className="font-bold text-xl">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <div className="  justify-center items-center flex">
                    <button className=" rounded-[100%] border-2 border-black bg-blue-600 px-3 py-3"><EastIcon style={{ color: 'white' }} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END OF PROJECTS  */}


        {/* START OF SERVICES */}
        <div className='pl-8 sm:pl-20 pt-[60px] md:pt-[140px] pb-8 bg-[#041c33]  border-b-8 border-white w-full' id='services'>
          <div className="">
            <h2 className="text-sm font-semibold uppercase bg-blue-800 text-white px-2 py-1 inline-block rounded">S E R V I C E S</h2>
            <h3 className="md:text-4xl text-xl font-bold mt-2 text-white">DESIGN <span className='text-blue-500' >SERVICES</span> I AM PROVIDING </h3>
          </div>
          <div className="mt-8 grid md:grid-cols-4 gap-3 px-2">
            {Services.map((service) => (
              <div key={service} className=" bg-black  rounded-xl overflow-hidden shadow-lg">
                <div className="  rounded-xl overflow-hidden p-2 h-[250px] items-end flex bg-cover bg-center" style={{ backgroundImage: `url(${service.bgimage})` }}>
                  <div className=' bg-black px-4 py-4 rounded-md shadow-xl ml-6 '>
                    {service.Icon}
                  </div>
                </div>
                <div className="p-4 pt-6  flex ">
                  <div className=' flex-grow'>
                    <h4 className="font-bold text-xl text-white ">{service.title}</h4>
                    <p className=" text-white mt-4">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END OF SERVICES */}


        {/* contact me */}
        <div className='pt-[60px] md:pt-[140px] bg-[#041c33]' id='contact'>        
            <div className=' px-0 sm:px-20 py-20 lg:flex lg:flex-row bg-[#04294a] rounded-2xl shadow-lg w-full flex flex-col-reverse'>
              {/* left */}
              <div className="w-full lg:w-[30%] lg:justify-center lg:grid lg:pl-6 flex py-10 lg:py-0 px-10 sm:px-24 lg:px-0">
                <div className="w-60 h-72 overflow-hidden rounded-lg hidden md:flex">
                  <img src={image4} alt="Profile" className="w-full h-full  object-center" />
                </div>
                <div className='pl-4 lg:pl-0'>
                  <h2 className="text-white mt-4 text-lg font-light">WRITE AN E-MAIL</h2>
                  <p className="text-white text-xl font-bold">noorulhasanat123@gmail.com</p>
                  <h2 className="text-white mt-4 text-lg font-light">CALL ME</h2>
                  <p className="text-white text-lg font-bold">+92 335 0978139</p>
                  <div className=' flex space-x-2 items-center mt-4'>
                  <a href="https://www.facebook.com/" className="text-gray-600 hover:text-gray-900 transition-colors"><FacebookSharpIcon style={{ color: 'white', fontSize: 35, }} /></a>
                  <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="text-gray-600 hover:text-gray-900 transition-colors"><LinkedInIcon style={{ color: 'white', fontSize: 35 }} /></a>
                  <a href="https://twitter.com/login" className="text-gray-600 hover:text-gray-900 transition-colors"><XIcon style={{ color: 'white', fontSize: 30 }} /></a>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className=' w-full lg:w-[70%] px-0 sm:px-20 lg:px-0'>
                <div className='px-8'>
                  <h1 className="text-xl md:text-4xl font-bold text-white">Let's Discuss Your Project</h1>
                  <p className="text-gray-400 mt-2">Always available for freelancing if the right project comes along, <br />Feel free to contact me.</p>
                </div>
                {/* <!-- Right Section: Contact Form --> */}
                <div className='px-8 pt-8'>
                  <form className="space-y-4 w-full bg-[#04335c] px-4 py-4 rounded-lg shadow-2xl" >
                    <div className='w-full flex gap-2'>
                      <div className='flex-1'>
                        <label className="block text-gray-200 w-full">Name</label>
                        <input type="text" placeholder="Name *" className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div className='flex-1'>
                        <label className="block text-gray-200 w-full">Your Email</label>
                        <input type="text" placeholder="Email *" className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                    <div className='w-full'>
                      <label className="block text-gray-200 w-full">SUBJECT</label>
                      <input type="text" placeholder="Subject *" className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-gray-200">YOUR MESSAGE</label>
                      <textarea placeholder="Your message *" className="w-full p-3 h-32 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className='justify-center flex'>
                    <button type="submit" className="w-1/2 bg-blue-500 hover:bg-gray-900 hover:border-2 border-white text-white py-1 lg:py-5 rounded-full font-normal lg:font-semibold">SEND MESSAGE</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          
        </div>
        {/* End of cntact me  */}



      </div>
      {/* end of main */}
    </div>
  )
}
