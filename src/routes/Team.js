import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Papa from 'papaparse';
import { TeamCard } from "./TeamCard";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import './TeamStyles.css';

const Team = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [teams1, setTeams1] = useState([]);
  const [teams2, setTeams2] = useState([]);
  const [teams3, setTeams3] = useState([]);

  useEffect(() => {
    Papa.parse('/list.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setTeams1(results.data.filter(item => item.type === 'core'));
        setTeams2(results.data.filter(item => item.type === 'senior'));
        setTeams3(results.data.filter(item => item.type === 'member'));
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section className='team' id='teams'>
        <Container>
          <Row>
            <Col>
              <h2>TEAM</h2>
              <p>FORESE Team</p>
              <Tab.Container id="teams-tabs" defaultActiveKey="first">
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                  <Nav.Item>
                    <Nav.Link eventKey="first">Core Members</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Senior Members</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Members</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-center">
                      {teams1.slice(0, 8).map((team1, index1) => (
                        <TeamCard key={index1} {...team1} />
                      ))}
                    </Row>
                    <Row className="justify-content-center">
                      {teams1.slice(8).map((team1, index1) => (
                        <TeamCard key={index1 + 8} {...team1} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {teams2.map((team2, index2) => (
                        <TeamCard key={index2} {...team2} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {teams3.map((team3, index3) => (
                        <TeamCard key={index3} {...team3} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Team;




// import React, { useEffect, useState } from 'react';
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
// import Papa from 'papaparse';
// import { TeamCard } from "./TeamCard";
// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
// import './TeamStyles.css';

// const Team = () => {
//   const [teams1, setTeams1] = useState([]);
//   const [teams2, setTeams2] = useState([]);
//   const [teams3, setTeams3] = useState([]);

//   useEffect(() => {
//     Papa.parse('/list.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         // Filter teams based on type from CSV
//         setTeams1(results.data.filter(item => item.type === 'core'));
//         setTeams2(results.data.filter(item => item.type === 'senior'));
//         setTeams3(results.data.filter(item => item.type === 'member'));
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <section className='team' id='teams'>
//         <Container>
//           <Row>
//             <Col>
//               <h2>TEAM</h2>
//               <p>FORESE Team</p>
//               <Tab.Container id="teams-tabs" defaultActiveKey="first">
//                 <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
//                   <Nav.Item>
//                     <Nav.Link eventKey="first">Core Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="second">Senior Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="third">Members</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="first">
//                     <Row>
//                       {teams1.map((team1, index1) => (
//                         <TeamCard key={index1} {...team1} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="second">
//                     <Row>
//                       {teams2.map((team2, index2) => (
//                         <TeamCard key={index2} {...team2} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="third">
//                     <Row>
//                       {teams3.map((team3, index3) => (
//                         <TeamCard key={index3} {...team3} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Team;





// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
// import { TeamCard } from "./TeamCard";
// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

// const Team = () => {
//   const [teams1, setTeams1] = useState([]);
//   const [teams2, setTeams2] = useState([]);
//   const [teams3, setTeams3] = useState([]);

//   useEffect(() => {
//     Papa.parse('/mem.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         // Filter the data based on the type
//         setTeams1(results.data.filter(item => item.type === 'core'));
//         setTeams2(results.data.filter(item => item.type === 'senior'));
//         setTeams3(results.data.filter(item => item.type === 'member'));
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <section className='team' id='teams'>
//         <Container>
//           <Row>
//             <Col>
//               <h2>TEAM</h2>
//               <p>FORESE Team</p>
//               <Tab.Container id="teams-tabs" defaultActiveKey="first">
//                 <Nav variant="pills" className='nav-pills mb-5 justify-content-center'>
//                   <Nav.Item>
//                     <Nav.Link eventKey="first">Core Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="second">Senior Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="third">Members</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="first">
//                     <Row>
//                       {teams1.map((team1, index) => (
//                         <TeamCard key={index} {...team1} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="second">
//                     <Row>
//                       {teams2.map((team2, index) => (
//                         <TeamCard key={index} {...team2} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="third">
//                     <Row>
//                       {teams3.map((team3, index) => (
//                         <TeamCard key={index} {...team3} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Team;


// import React, { useEffect, useState } from 'react';
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
// import Papa from 'papaparse';
// import { TeamCard } from "./TeamCard";
// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
// import './TeamStyles.css';
// import P1 from "../assets/P1.png"

// const Team = () => {
//   const [teams1, setTeams1] = useState([]);
//   const [teams2, setTeams2] = useState([]);
//   const [teams3, setTeams3] = useState([]);

//   useEffect(() => {
//     Papa.parse('/mem.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         setTeams1(results.data.filter(item => item.type === 'core'));
//         setTeams2(results.data.filter(item => item.type === 'senior'));
//         setTeams3(results.data.filter(item => item.type === 'member'));
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <section className='team' id='teams'>
//         <Container>
//           <Row>
//             <Col>
//               <h2>TEAM</h2>
//               <p>FORESE Team</p>
//               <Tab.Container id="teams-tabs" defaultActiveKey="first">
//                 <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
//                   <Nav.Item>
//                     <Nav.Link eventKey="first">Core Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="second">Senior Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="third">Members</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="first">
//                     <Row>
//                       {teams1.map((team1, index1) => (
//                         <TeamCard key={index1} {...team1} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="second">
//                     <Row>
//                       {teams2.map((team2, index2) => (
//                         <TeamCard key={index2} {...team2} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="third">
//                     <Row>
//                       {teams3.map((team3, index3) => (
//                         <TeamCard key={index3} {...team3} />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Team;

// import React, { useEffect, useState } from 'react';
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
// import Papa from 'papaparse';
// import P1 from "../assets/P1.png";
// import P2 from "../assets/P2.png";
// import P3 from "../assets/P3.png";
// import { TeamCard } from "./TeamCard";
// import './TeamStyles.css';
// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

// const Team = () => {
//   const [teams1, setTeams1] = useState([]);
//   const [teams2, setTeams2] = useState([]);
//   const [teams3, setTeams3] = useState([]);

//   // Image map
//   const imageMap = {
//     P1: P1,
//     P2: P2,
//     P3: P3,
//   };

//   useEffect(() => {
//     Papa.parse('/mem.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         setTeams1(results.data.filter(item => item.type === 'core'));
//         setTeams2(results.data.filter(item => item.type === 'senior'));
//         setTeams3(results.data.filter(item => item.type === 'member'));
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <section className='team' id='teams'>
//         <Container>
//           <Row>
//             <Col>
//               <h2>TEAM</h2>
//               <p>FORESE Team</p>
//               <Tab.Container id="teams-tabs" defaultActiveKey="first">
//                 <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
//                   <Nav.Item>
//                     <Nav.Link eventKey="first">Core Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="second">Senior Members</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="third">Members</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="first">
//                     <Row>
//                       {teams1.map((team1, index1) => (
//                         <TeamCard
//                           key={index1}
//                           imgUrl={imageMap[team1.imgUrl]} // Use the image map here
//                           {...team1}
//                         />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="second">
//                     <Row>
//                       {teams2.map((team2, index2) => (
//                         <TeamCard
//                           key={index2}
//                           imgUrl={imageMap[team2.imgUrl]} // Use the image map here
//                           {...team2}
//                         />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="third">
//                     <Row>
//                       {teams3.map((team3, index3) => (
//                         <TeamCard
//                           key={index3}
//                           imgUrl={imageMap[team3.imgUrl]} // Use the image map here
//                           {...team3}
//                         />
//                       ))}
//                     </Row>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Team;




// import React from 'react'
// import Navbar from "../components/Navbar"
// import Footer from '../components/Footer'
// import Intro from "../assets/intro-bg.JPG"
// import P1 from "../assets/P1.png"
// import P2 from "../assets/P2.png"
// import P3 from "../assets/P3.png"
// import P3_1 from "../assets/P3(1).png"
// import { TeamCard } from "./TeamCard"
// import './TeamStyles.css'

// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

// const Team = () => {

//   const teams1 = [
//     {
//       name: "Eashwar Ramachandran",
//       position: "President",
//       oneliner: "Ability is essential, but Attitude is crucial.",
//       imgUrl: P1,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "SP Ramanthan",
//       position: "General Secretary",
//       oneliner: "9 . 0 6",
//       imgUrl: P2,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//   ];

//   const teams2 = [
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
    
//   ];


//   const teams3 = [
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//   ];


  
//   return (
//     <div>
//     <Navbar />
    
//     <section className='team' id='teams'>
//       <Container>
//         <Row>
//           <Col>
//             <h2>TEAM</h2>
//             <p>FORESE Team</p>
//             <Tab.Container id="teams-tabs" defaultActiveKey="first">
//             <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
//               <Nav.Item>
//                 <Nav.Link eventKey="first">Core Members</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="second">Senior Members</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="third">Members</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content>
//               <Tab.Pane eventKey="first">
//                 <Row>
//                   {
//                     teams1.map(( team1, index1 ) => {
//                       return (
//                         <TeamCard
//                             key={index1}
//                             {...team1}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="second">
//               <Row>
//                   {
//                     teams2.map(( team2, index2 ) => {
//                       return (
//                         <TeamCard
//                             key={index2}
//                             {...team2}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="third">
//               <Row>
//                   {
//                     teams3.map(( team3, index3 ) => {
//                       return (
//                         <TeamCard
//                             key={index3}
//                             {...team3}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//             </Tab.Content>
//             </Tab.Container>
//           </Col>
//         </Row>
//       </Container>
//       {/* <img className='background-image-right' src={color2}></img> */}
//     </section>
//     <Footer/>
//     </div>
//   )
// }

// export default Team;



// import React from 'react'
// import Navbar from "../components/Navbar"
// import Footer from '../components/Footer'
// import Intro from "../assets/intro-bg.JPG"
// import P1 from "../assets/P1.png"
// import P2 from "../assets/P2.png"
// import P3 from "../assets/P3.png"
// import P3_1 from "../assets/P3(1).png"
// import { TeamCard } from "./TeamCard"
// import './TeamStyles.css'

// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

// const Team = () => {

//   const teams1 = [
//     {
//       name: "Eashwar Ramachandran",
//       position: "President",
//       oneliner: "Ability is essential, but Attitude is crucial.",
//       imgUrl: P1,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "SP Ramanthan",
//       position: "General Secretary",
//       oneliner: "9 . 0 6",
//       imgUrl: P2,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//   ];

//   const teams2 = [
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
    
//   ];


//   const teams3 = [
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//     {
//       name: "Apple",
//       oneliner: "One Liner",
//       imgUrl: P3,
//       ln: "https://www.linkedin.com/company/forese/mycompany/",
//     },
//   ];


  
//   return (
//     <div>
//     <Navbar />
    
//     <section className='team' id='teams'>
//       <Container>
//         <Row>
//           <Col>
//             <h2>TEAM</h2>
//             <p>FORESE Team</p>
//             <Tab.Container id="teams-tabs" defaultActiveKey="first">
//             <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
//               <Nav.Item>
//                 <Nav.Link eventKey="first">Core Members</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="second">Senior Members</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="third">Members</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content>
//               <Tab.Pane eventKey="first">
//                 <Row>
//                   {
//                     teams1.map(( team1, index1 ) => {
//                       return (
//                         <TeamCard
//                             key={index1}
//                             {...team1}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="second">
//               <Row>
//                   {
//                     teams2.map(( team2, index2 ) => {
//                       return (
//                         <TeamCard
//                             key={index2}
//                             {...team2}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="third">
//               <Row>
//                   {
//                     teams3.map(( team3, index3 ) => {
//                       return (
//                         <TeamCard
//                             key={index3}
//                             {...team3}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//             </Tab.Content>
//             </Tab.Container>
//           </Col>
//         </Row>
//       </Container>
//       {/* <img className='background-image-right' src={color2}></img> */}
//     </section>
//     <Footer/>
//     </div>
//   )
// }

// export default Team;