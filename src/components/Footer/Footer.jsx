import React from 'react'

function Footer() {
  return (
    <>
     <div className="hp-footerBottom px-24 py-6 flex justify-between text-white text-sm font-medium max-md:flex-col max-md:gap-2 max-md:pt-0 max-md:pr-4 max-md:pl-4 max-md:pb-8 bg-black w-full h-[115px] pl-[5rem] pr-[5rem]
" style={{backgroundColor: 'black',color: 'white'}}> 
        <div className="hp-leftContainer flex space-x-4  items-center">
          <div style={{color: 'white'}}>Privacy Policy</div>
          <div className="border border-white h-[12px] m-[10px]"></div>
          <div style={{color: 'white'}}>Terms and Conditions</div>
        </div>
        
        <div className="hp-rightContainer flex items-center space-x-4 max-md:space-x-1 max-md:flex-wrap text-white" style={{color: 'white'}}>
          <div className="footerLinkedIn max-md:flex max-md:basis-full ">
            <a href="https://www.linkedin.com/company/medtrix-healthcare" target="_blank" rel="noopener noreferrer">
              {/* <img src={hplinkedInwhite} alt="LinkedIn" className="w-6 h-6"/> */}
            </a>
          </div>
          <div className=''>© 2024. All rights reserved</div>
          <div className="border border-white h-[12px] m-[10px]"></div>
          <div>Medtrix Healthcare</div>
        </div>
      </div>
    </>
  )
}

export default Footer