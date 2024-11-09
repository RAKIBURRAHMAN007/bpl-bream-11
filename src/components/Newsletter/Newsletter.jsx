import bg from '../../assets/img/bg-shadow.png'


const Newsletter = () => {
    return (
       <div className='absolute lg:mx-28 md:w-10/12 md:mx-20  lg:w-10/12  -mt-40 backdrop-blur-sm bg-white bg-opacity-20 '>
            {/* newsletter div */}
            <div className=' border-2 lg:h-80 text-white border-white  p-4 rounded-xl '>
              <div style={{backgroundImage:`url(${bg})`}} className='h-full bg-cover rounded-xl bg-white p-2 lg:p-20 space-y-5'>
                     <div className='text-center space-y-5'>
                        <h1 className='text-black text-xl font-bold'>Subscribe to our Newsletter</h1>
                        <p className='text-black  opacity-55 font-medium'>Get the latest updates and news right in your inbox!</p>
                     </div>
                     <div className=' lg:flex justify-center items-center gap-5 space-y-2'>
                        <input className='border w-full lg:w-2/5 lg:pr-28 rounded-xl bg-white p-3' type="email" name="" placeholder='Enter your Email' id="" />
                        <button className='w-full lg:w-1/6 text-black bg-gradient-to-r from-[#e78fbb]   to-[#facb54] p-3 rounded-xl'>Subscribe</button>

                     </div>
              </div>
            
            </div>
            
       </div>
        
    );
};

export default Newsletter;