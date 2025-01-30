import React from 'react'
import medtrixLogo2 from '../assets/medtrix_logo2.png'
import { IoSearch } from "react-icons/io5";
import card3 from  '../assets/card3.png'
import card2 from  '../assets/card2.png'
import Card from '../components/card/Card';
import VideoCard from '../components/VideoCard/VideoCard';
import video1 from '../assets/videos/f2.mp4'
import Footer from '../components/Footer/Footer';

function VideoPage() {
    const cardData = [
        {
          title: 'BPDCN',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          image: card2,
          buttons: [
            { text: 'Misdiagnosis', },
            { text: 'ELZONRIS', },
            { text: 'ELZONRIS Study Design', },
            { text: 'ELZONRIS Efficacy', },
            { text: 'Managing CLS', },
            { text: 'ELZONRIS Dosing and Administration', },
            { text: 'Full Video', },
            { text: 'Clinical Presentation', }
          ],
        },
        {
          title: 'lorem fdf',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          image: card3,
          buttons: [
            { text: 'Option One', },
            { text: 'Option Two', },
            { text: 'Option Three', },
            { text: 'Optio Four', },
            { text: 'Full Video', },
          ],
        }
      ];

      const VideosData =  [
        {
            title: "BPDCN",
                  description: "This is an awesome video 1 you should watch!",
          buttons: [
            { text: "Clinical Presentation",  },
                    { text: "Misdiagnosis",  },
                    { text: "ELZONRIS",  },
                    { text: "ELZONRIS Study Design",  },
                    { text: "ELZONRIS Efficacy",  },
                    { text: "Managing CLS",  },
                    { text: "ELZONRIS Dosing and Administration",  },
                    { text: "Full Video",  },
          ],
          videoSrc: video1,
          videoDescription: "This is the first video description, explaining the content.",
          similarVideos: [
            {
              title: "Video 1",
              description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, deserunt?",
              src: video1,
            },
            {
              title: "Video 2",
              description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, deserunt?",
              src: video1,
            },
            {
              title: "Video 3",
              description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, deserunt?",
              src: video1,
            },
          ],
        },
        
      ];

  return (
    <>
   
        <div className='pl-[3rem] pr-[3rem] bg-[black] '>
          <header className='flex justify-between pt-[2rem]  pr-[2rem]  pb-[2rem] pl-0 items-center w-[100%] '>
          <div className='w-[15%]'><img src={medtrixLogo2} alt=""  /></div>
          <div className='w-[85%] flex items-center justify-end'>
            <div className="text-[white] w-[48%] pl-[17%]">
                <ul className='flex justify-around '>
                <li className='inline-block'>Home</li>
                <li className='inline-block'>Similar Videos</li>
                    <li className='inline-block'>More Topics</li>
                   
                </ul>
            
            </div>
            <div className='  flex h-[40.415px] p-[11.729px] items-center gap-[6.856px] self-stretch rounded-[6.661px] border-[2.285px] border-[#DDD] bg-[rgba(248,248,248,0.93)] !border-2 !border-black flex self-center w-[30%]'><IoSearch /><input className='bg-[rgba(248,248,248,0.93)] !border-none focus:outline-none w-1/2' type="text" placeholder="Search Topic"/></div>
          </div>
          </header>

       
        </div>
           {/* section 1  */}

           {/* video card */}
           <div className="flex items-center flex-col  p-8 bg-[#272727B2] gap-[30px] pb-[100px] pt-[60px]">
           {VideosData.map((videoData, index) => (
        <VideoCard
          key={index}
          title={videoData.title}
          description={videoData.description}
          buttons={videoData.buttons}
          videoSrc={videoData.videoSrc}
          videoDescription={videoData.videoDescription}
          similarVideos={videoData.similarVideos}
        />
      ))}
    </div>
 {/* cards section */}
 <div className="flex items-center flex-col  p-8 bg-[#272727B2] gap-[30px] pb-[100px]">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          buttons={card.buttons}
        />
      ))}
    </div>

        <Footer/>
    </>
  )
}

export default VideoPage