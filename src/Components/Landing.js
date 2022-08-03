import React from 'react'
import bgMobile from './images/mobile/image-host.jpg'
import logo from './images/desktop/logo.svg'
import spotify from './images/desktop/spotify.svg'
import apple from './images/desktop/apple-podcast.svg'
import google from './images/desktop/google-podcasts.svg'
import pocket from './images/desktop/pocket-casts.svg'
import bgTablet from './images/tablet/image-host.jpg'
import bgDesktop from './images/desktop/image-host.jpg'
import dots from './images/desktop/bg-pattern-dots.svg'

const Landing = () => {
  return (
    <div className="flex w-screen h-[667px] absolute md:h-screen md:bg-[#121725] overflow-clip lg:h-[900px] lg:overflow-x-hidden">
       <img className='w-screen h-full relative md:opacity-0' src={bgMobile} alt=''></img>
       <img className='absolute top-0 right-0 opacity-0 md:opacity-100 lg:opacity-0' src={bgTablet} alt=''></img>
       <img className='opacity-0 lg:opacity-100 lg:w-[888px] lg:h-[640px] lg:mt-[130px]' src={bgDesktop} alt=''></img>
       <div className='h-screen absolute inset-0 bg-gray-900 bg-opacity-80 md:opacity-0'></div>
       <img className='mx-auto my-[62px] md:w-[134px] md:h-[56px] md:mx-0 md:ml-[39px] lg:opacity-0 lg:mr-[-150px]' src={logo} alt=''></img>
       <div className='absolute w-screen h-screen'>
            <img className='mx-auto my-[62px] md:w-[134px] md:h-[56px] md:mx-0 md:ml-[39px] lg:ml-[169px] lg:mt-[109px]' src={logo} alt=''></img>
            <div id='MD-DIV' className='opacity-0 absolute z-30 w-[635px] h-[509px] bg-[#121725] md:opacity-100 md:ml-[39px] md:mt-[81px] lg:ml-[165px] lg:w-[723px] lg:mt-[35px]'>
                <h2 className='opacity-0 md:opacity-100 text-[#54E6AF] text-[26px] text-center font-chivo leading-[38px] md:z-0 md:text-[48px] md:text-left md:mt-[60px] md:leading-[56px]'>PUBLISH YOUR PODCASTS <span className='text-white'>EVERYWHERE</span></h2>
                <p className='opacity-0 md:opacity-100 text-[17px] text-[#C2CBE5] leading-[28px] text-center mx-[24px] mt-[16px] md:text-[18px] md:leading-[28px] md:text-left md:ml-0 md:w-[445px] md:mt-[31px]'>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
            <form className='mt-[33px] md:flex md:mt-[40px]'>
                <input required type='email' placeholder='           Email address' className='opacity-0 md:opacity-100 bg-[#2C344B] w-[327px] h-[46px] rounded-3xl ml-[24px] font-chivo font-bold text-[14px] md:ml-0 md:mt-[40px] md:w-[427px] md:absolute md:h-[56px]'></input>
                <button type='submit' value='submit' className='opacity-0 md:opacity-100 w-[326px] h-[46px] bg-[#54E6AF] rounded-3xl mt-[16px] ml-[24px] text-[14px] font-chivo font-bold md:mt-[45px] md:w-[162px] md:h-[46px] md:ml-[260px] md:relative'>Request Access</button>
            </form>
                <div className='opacity-0 md:opacity-100 w-screen h-[17px] flex flex-row mt-[33px] md:mt-[64px]'>
                    <img className='opacity-0 md:opacity-100 ml-[30px] md:w-[96px] md:h-[26px] md:ml-0 md:mr-[12px]' src={spotify} alt=''></img>
                    <img className='opacity-0 md:opacity-100 ml-[23px] md:w-[79px] md:h-[29px] md:mr-[12px]' src={apple} alt=''></img>
                    <img className='opacity-0 md:opacity-100 ml-[25px] w-[73px] h-[11px] md:w-[125px] md:h-[18px] md:mr-[15px]' src={google} alt=''></img>
                    <img className='opacity-0 md:opacity-100 ml-[16px] w-[77px] h-[15px] md:w-[129px] md:h-[26px]' src={pocket} alt=''></img>
                </div>
            </div>
            <img className='opacity-0 ml-[39px] md:opacity-100 md:mt-[885px] lg:opacity-100 lg:mt-[553px] lg:ml-[1455px]' src={dots} alt=''></img>
            <h2 className='opacity-100 md:opacity-0 text-[#54E6AF] text-[26px] text-center font-chivo leading-[38px] md:z-0'>PUBLISH YOUR PODCASTS <span className='text-white'>EVERYWHERE</span></h2>
            <p className='opacity-100 md:opacity-0 text-[17px] text-[#C2CBE5] leading-[28px] text-center mx-[24px] mt-[16px]'>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
            <div className='opacity-100 md:opacity-0 w-screen h-[17px] flex flex-row mt-[33px]'>
                <img className='opacity-100 md:opacity-0 ml-[30px]' src={spotify} alt=''></img>
                <img className='opacity-100 md:opacity-0 ml-[23px]' src={apple} alt=''></img>
                <img className='opacity-100 md:opacity-0 ml-[25px] w-[73px] h-[11px]' src={google} alt=''></img>
                <img className='opacity-100 md:opacity-0 ml-[16px] w-[77px] h-[15px]' src={pocket} alt=''></img>
            </div>
            <form className=' opacity-100 md:opacity-0mt-[33px]'>
                <input required type='email' placeholder='           Email address' className='opacity-100 md:opacity-0 bg-[#2C344B] w-[327px] h-[46px] rounded-3xl ml-[24px] font-chivo font-bold text-[14px]'></input>
                <button type='submit' value='submit' className='opacity-100 md:opacity-0 w-[326px] h-[46px] bg-[#54E6AF] rounded-3xl mt-[16px] ml-[24px] text-[14px] font-chivo font-bold'>Request Access</button>
            </form>
       </div>
    </div>
  )
}

export default Landing