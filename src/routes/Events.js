import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './EventsStyles.css';
import { useEffect } from 'react';

const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      
      {/* Header Section */}
      <div className="w-3/4 m-auto mt-20">
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">EVENTS</h1>
        </div>

        {/* Slider */}
        <div className='mt-10 mb-20'>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-custom-blue2 h-[480px] text-black rounded-xl">
                <div className="h-56 rounded-t-xl bg-custom-blue1 flex justify-center items-center">
                  <img src={d.img} alt="" className="h-44 w-120 rounded-xl" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.content}</p>
                  <Link to={d.linkid}>
                    <button className="bg-custom-blue1 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const data = [
  {
    name: 'MOCK PLACEMENTS',
    img: '/EventsImg/intro-bg.JPG',
    content: 'Content for Event 1',
    linkid: '/mockplacement',
  },
  {
    name: 'FORED',
    img: '/EventsImg/intro-bg.JPG',
    content: 'Content for Event 2',
    linkid: '/fored',
  },
  {
    name: 'SEMINAR',
    img: '/EventsImg/intro-bg.JPG',
    content: 'Content for Event 3',
    linkid: '/seminar',
  },
];

export default Events;


// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import './EventsStyles.css';

// const Events = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <div className="fixed top-0 left-0 w-full z-10">
//         <Navbar />
//       </div>
      
//       {/* Header Section */}
//       <div className="w-3/4 m-auto mt-20">
//         <div className="text-center mt-20">
//           <h1 className="text-3xl font-bold">EVENTS</h1>
//           {/* <hr className="border-t-2 border-custom-blue1 mx-auto w-1/3 mt-4" /> */}
//         </div>

//         {/* Slider */}
//         <div className='mt-10 mb-20'>
//           <Slider {...settings}>
//             {data.map((d) => (
//               <div key={d.name} className="bg-custom-blue2 h-[480px] text-black rounded-xl">
//                 <div className="h-56 rounded-t-xl bg-custom-blue1 flex justify-center items-center">
//                   <img src={d.img} alt="" className="h-44 w-120 rounded-xl" />
//                 </div>
//                 <div className="flex flex-col justify-center items-center gap-4 p-4">
//                   <p className="text-xl font-semibold">{d.name}</p>
//                   <p>{d.content}</p>
//                   <Link to={d.linkid}>
//                     <button className="bg-custom-blue1 text-white text-lg px-6 py-1 rounded-xl">
//                       Read More
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// const data = [
//   {
//     name: 'MOCK PLACEMENTS',
//     img: '/EventsImg/intro-bg.JPG',
//     content: 'Content for Event 1',
//     linkid: '/fored',
//   },
//   {
//     name: 'FORED',
//     img: '/EventsImg/intro-bg.JPG',
//     content: 'Content for Event 2',
//     linkid: '/fored',
//   },
//   {
//     name: 'ABC',
//     img: '/EventsImg/intro-bg.JPG',
//     content: 'Content for Event 3',
//     linkid: '/fored',
//   },
// ];

// export default Events;


// import React from 'react'
// import Navbar from "../components/Navbar"
// import Footer from '../components/Footer'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router-dom';


// const Events = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div>
//       <div className="fixed top-0 left-0 w-full z-10">
//         <Navbar/>
//       </div>   
//         <div className='w-3/4 m-auto' >
//           <div className='mt-40 mb-12'>
//           <Slider {...settings}> 
//             {data.map((d) => (
//               <div className='bg-white h-[480px] text-black rounded-xl'>
//                 <div className=' h-56 rounded-t-xl bg-lightpink flex justify-center items-center'>
//                   <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
//                 </div>

//                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
//                   <p className='text-xl font-semibold'>{d.name}</p>
//                   <p>{d.content}</p>
//                   <Link to={d.linkid}>
//                   <button className="bg-custom-purple text-white text-lg px-6 py-1 rounded-xl">Read More</button>
//                   </Link>
//                 </div>
//               </div>
//             ))
//             }
//           </Slider>
//           </div>       
//         </div > 
        
//         <div>
//       <Footer />
//       </div>
//     </div> 
//   );
// };

// const data = [
//   {
//     name: 'A',
//     img:'/EventsImg/event1.jpg',
//     content: 'Content for Event 1',
//     linkid: '/fored'
//   },
//   {
//     name: 'b',
//     img:'/EventsImg/event1.jpg',
//     content: 'Content for Event 2',
//     linkid: '/fored'
//   },
//   {
//     name: 'c',
//     img:'/EventsImg/event1.jpg',
//     content: 'Content for Event 3',
//     linkid: '/fored'
//   }
// ]

// export default Events
