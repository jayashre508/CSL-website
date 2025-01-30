import React from 'react'
import medtrixLogo from '../../assets/medtrix_logo.png'
import card1 from  '../../assets/card1.png'
import card2 from  '../../assets/card2.png'
import card3 from  '../../assets/card3.png'
import { IoSearch } from "react-icons/io5";
import Card from '../card/Card';
import Footer from '../Footer/Footer'
function Home() {

  const cardData = [
    {
      title: 'BPDCN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: card1,
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
      image: card2,
      buttons: [
        { text: 'Option One', },
        { text: 'Option Two', },
        { text: 'Option Three', },
        { text: 'Optio Four', },
        { text: 'Full Video', },
      ],
    },
    {
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: card3,
      buttons: [
        { text: 'Option One', },
        { text: 'Option Two', },
        { text: 'Option Three', },
        { text: 'Optio Four', },
        { text: 'Optio Five', },
        { text: 'Full Video', },
      ],
    },
  ];
  return (
    <>
    <section className='sectionOne '>
<div className="pl-[3rem] bg-[url('./assets/shutterstock_bg.png')] bg-cover bg-[length:100%_100%] bg-[position:90%_31%] h-screen w-full">
<header className='flex justify-between pt-[2rem]  pr-[2rem]  pb-[2rem] pl-0'>
<div className='w-[15%]'><img src={medtrixLogo} alt=""  className='w-full'/></div>
<div className=' w-1/2 flex h-[40.415px] p-[11.729px] items-center gap-[6.856px] self-stretch rounded-[14.661px] border-[2.285px] border-[#DDD] bg-[rgba(248,248,248,0.93)] !border-2 !border-black flex self-center'><IoSearch /><input className='bg-[rgba(248,248,248,0.93)] !border-none focus:outline-none w-1/2' type="text" placeholder="Search Topic"/></div>
</header>


<div className='pt-[70px]'><h1 className='text-[65px] text-[#BE1E2D]'>Ask The</h1> <p className='text-[151px] mb-[20px] text-[#BE1E2D]'>Expert</p><div className='w-1/2 pt-2
 borderline border-t-2 border-t-black '></div><div className="w-1/2 mt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque minus id suscipit qui, veritatis enim, magni eligendi velit quae animi quia sed hic tenetur ipsum est deleniti, perspiciatis rerum!</div></div>


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
  
    </section>
    <Footer/>
    </>
  )
}

export default Home