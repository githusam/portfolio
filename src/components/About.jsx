import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0097b2]'>About</p>  
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Husam, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I'm focused on specializing in full-stack development, covering both front-end and backend aspects of application creation. I'm proficient in web languages like HTML/CSS, JavaScript, Java, and PHP. and I also have experience with APIs and databases using SQL. My goal is to become a well-rounded developer who can create complete and seamless applications, constantly growing and learning in the field of software engineering.                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About