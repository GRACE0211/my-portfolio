import { useState } from 'react';
import Head from 'next/head'
import NightMode from '../public/icons8-night-94.png';
import Gmail from '../public/icons8-gmail-logo-1500.png';
import Linkedin from '../public/icons8-linkedin-1500.png';
import Github from '../public/icons8-github-1500.png';
import HTML from '../public/html-5.png';
import CSS from '../public/css-3.png';
import Javascript from '../public/js.png';
import React  from '../public/structure.png';
import Vuejs  from '../public/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-24.png';
import Image from 'next/image';
import ProPic from '../public/peeps-avatar-alpha.png';
import Code1 from '../public/icons8-keyboard-1500.png'
import JS from '../public/javaScript.png';
import BreakfastMenu from '../public/breakfast-menu.png';
import SurveyForm from '../public/survey-form.png';
// import ContactList from '../public/contact-list_AdobeExpress_AdobeExpress.mp4';
// import ToDoListVue from '../public/to-do-list-vue_AdobeExpress_AdobeExpress.mp4';
// import ShoppingList from '../public/shopping-list_AdobeExpress_AdobeExpress.mp4';
// import DogImages from '../public/dog-image-app_AdobeExpress_AdobeExpress.mp4';
// import ShoppingCart from '../public/shopping-cart_AdobeExpress_AdobeExpress.mp4';
// import ToDoListReact from '../public/to-do-list-react_AdobeExpress.mp4';
// import ExpenseTracker from '../public/expense-tracker_AdobeExpress_AdobeExpress.mp4';
// import WeatherApp from '../public/weather-app_AdobeExpress_AdobeExpress.mp4';
import VideoPlayer from './VideoPlayer.jsx';



export default function Home() {
  
  const [darkMode, setDarkMode ] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Grace Jhuo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-10 md:px-20 lg:px-72 ' >
        <div className="background bg-white dark:bg-gray-800"></div>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between dark:text-amber-100'>
            <h1 className='text-xl font-burtons'>developedbygrace</h1>
            <ul className='flex items-center'>
              <li>
                <Image src={NightMode} onClick={() => setDarkMode(!darkMode)} width={55} height={55} className='cursor-pointer drop-shadow-md' alt='night-mode'/>
              </li>
              <li><a className='bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-amber-500 font-medium md:text-6xl drop-shadow-md'>Grace Jhuo</h2>
            <h3 className='text-2xl text-amber-700 p-2 md:text-3xl drop-shadow-md'>Front-end developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-amber-100'>
            I am a beginner who has just stepped into the field of programming. Currently, I have accumulated some projects below. 
            If you are interested in viewing them, please click the icon link below to contact me! You can also reach me via email at <a className="font-bold text-amber-700" href='mailto:gracejhuo0211@gmail.com'>gracejhuo0211@gmail.com</a>.
            </p>
          </div>
          <div className='text-5xl flex justify-center items-center gap-5'>
          <a href='mailto:gracejhuo0211@gmail.com'><Image src={Gmail} width={55} height={55} className='mb-10 drop-shadow-md' alt='gmail'/></a>
            <Image src={Linkedin} width={55} height={55} className='mb-10 drop-shadow-md' alt='linkedin'/>
            <Image src={Github} width={55} height={55} className='mb-10 drop-shadow-md' alt='github'/>
          </div>
          <div className='  shadow-md relative mx-auto bg-amber-700 rounded-full w-60 h-60 overflow-hidden md:h-96 md:w-96' data-aos="fade-right" data-aos-once="true">
            <Image src={ProPic} fill style='cover' data-aos="fade-right" data-aos-once="true" alt='propic'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' text-amber-600 text-lg font-bold pt-8 pb-2 md:text-3xl drop-shadow-md'>Skills I have:</h3>
            <p className='text-center md:text-left text-md py-5 leading-8 text-gray-800 md:text-xl mx-10 dark:text-amber-100'>I was self-learning programming during my period of unemployment. The skills I learned included HTML, CSS, JavaScript, Tailwind CSS, Vue.js, and React. I am planning to further improve my skills in VueJS and ReactJS, and learn to use backend frameworks like Node.js and Express in the future.</p>
          </div>
          <div className='  md:flex gap-10 justify-around'>
          <div className=' md:w-1/2 text-center shadow-lg rounded-xl p-10 my-10 bg-gray-100' data-aos="fade-right" data-aos-once="true">
            <Image src={Code1} width={110} height={110} className='mx-auto' alt='keyboard'/>
            <h3 className=' text-amber-600 text-lg md:text-2xl font-bold pt-8 pb-2 drop-shadow-md'>Programming languages</h3>
            <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='py-4 text-lg flex items-center text-gray-500 md:text-xl'>HTML<Image width={26} height={26} src={HTML} className='inline-block pl-1'/></p>
            <p className='py-4 text-lg flex items-center text-gray-500 md:text-xl'>CSS<Image width={26} height={26} src={CSS} className='inline-block pl-1'/></p>
            <p className='py-4 text-lg flex items-center text-gray-500 md:text-xl'>JavaScript<Image width={26} height={26} src={Javascript} className='inline-block pl-1'/></p>
            </div>
          </div>
          <div className='md:w-1/2 text-center shadow-lg rounded-xl p-10 my-10 bg-gray-100' data-aos="fade-left" data-aos-once="true">
            <Image src={JS} width={110} height={110} className='mx-auto' alt='JS'/>
            <h3 className=' text-amber-600 text-lg md:text-2xl font-bold pt-8 pb-2 drop-shadow-md'>Programming languages frameworks</h3>
            <div className='flex flex-col justify-center items-center mx-auto'>
            <p className='py-4 text-lg flex items-center text-gray-500 md:text-xl'>Vue.js<Image width={26} height={26} src={Vuejs} className='inline-block pl-1'/></p>
            <p className='py-4 text-lg flex items-center text-gray-500 md:text-xl'>React<Image width={26} height={26} src={React} className='inline-block pl-1'/></p>
            </div>
          </div>
          </div>
        </section>
        <section>
        <h3 className=' text-amber-600 text-lg md:text-2xl font-bold pt-8 pb-2 drop-shadow-md'>Portfolio:</h3>
        <p className='text-center md:text-left text-md py-5 leading-8 text-gray-800 md:text-xl mx-10 dark:text-amber-100'>
        In my portfolio, you can see some of the projects I have done, such as designing a Breakfast Menu and a Contact List in Vue.js, a Breakfast Order Website, a Weather App, a Expense Tracker in React, and To Do List App both in React and Vue.js. 
        </p>
        <h3 className=' text-lime-600 text-lg md:text-2xl font-bold pt-8 pb-2 drop-shadow-md'>VUE3:</h3>
        <div className='  flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
          <div className='  text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            <Image src={BreakfastMenu} className="rounded-lg object-cover" width={'100%'} height={'100%'} responsive alt='menu'/>
          </div>
          <div className=' items-center flex text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-left" data-aos-once="true">
            <Image src={SurveyForm} className="rounded-lg object-cover" width={'100%'} height={'100%'} responsive surveyform/>
          </div>
          <div className='overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            <VideoPlayer
            src="/contact-list_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className='overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-left" data-aos-once="true">
          
            {/* <iframe src={ToDoListVue} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/to-do-list-vue_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className='overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            {/* <iframe src={ShoppingList} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/shopping-list_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className='overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            {/* <iframe src={DogImages} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/dog-image-app_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
        </div>
        <h3 className=' text-sky-600 text-lg md:text-2xl font-bold pt-8 pb-2 drop-shadow-md'>REACT:</h3>
        <div className='  flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap  mb-20 '>
          <div className='items-center flex overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            {/* <iframe src={ShoppingCart} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/shopping-cart_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className=' overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-left" data-aos-once="true">
            {/* <iframe src={ToDoListReact} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/to-do-list-react_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className=' overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-right" data-aos-once="true">
            {/* <iframe src={ExpenseTracker} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/expense-tracker_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
          <div className=' overflow-hidden text-center shadow-lg rounded-lg bg-gray-100 basis-1/3 flex-1 ' data-aos="fade-left" data-aos-once="true">
            {/* <iframe src={WeatherApp} frameborder="0"  className="rounded-lg object-cover" allowfullscreen/> */}
            <VideoPlayer
            src="/weather-app_AdobeExpress_AdobeExpress.mp4"
            type="video/mp4"
            className="rounded-lg object-cover"
            />
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}


// <a href="https://www.freepik.com/free-psd/3d-web-coding-with-folder_28631291.htm#query=3d%20icon%20javascript&position=13&from_view=search&track=ais">Image by kupixels</a> on Freepik
// <a target="_blank" href="https://icons8.com/icon/eFPBXQop6V2m/gmail-logo">Gmail Logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/LoL4bFzqmAa0/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/ZyHalJg8YHg9/keyboard">Keyboard</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>