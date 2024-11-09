import logo from '../../assets/img/logo-footer.png'

const Footer = () => {
    return (
        <div className="bg-black h-full ">
            <div className="pt-52 px-12 lg:px-32">
                <div className='flex justify-center'>
                    <img className='border-2  border-dashed border-white' src={logo} alt="" />
                </div>
                {/* contetnt after img */}
                <div className='lg:flex justify-between items-start pt-16'>
                    <div className='space-y-3'>
                        <h1 className='text-white font-bold text-xl'>About Us</h1>
                        <p className='text-white opacity-70'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>

                    </div>

                    <div className='space-y-3'>
                        <h1 className='text-white font-bold text-xl'>Quick Links</h1>
                        <ol className='text-white list-disc pl-5 space-y-3 opacity-70'>
                            <li><a className='text-white opacity-70' href="">Home</a></li>
                            <li><a className='text-white opacity-70' href="">Services</a></li>
                            <li><a className='text-white opacity-70' href="">About</a></li>
                            <li><a className='text-white opacity-70' href="">Contact</a></li>
                        </ol>
                        

                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-white font-bold text-xl'>Subscribe</h1>
                        <p className='text-white opacity-70'> Subscribe to our newsletter for <br /> the latest updates.</p>
                        <div className=' flex justify-center items-center bg-white rounded-xl'>
                        <input className=' w-full   rounded-xl bg-white p-3' type="email" name="" placeholder='Enter your Email' id="" />
                        <button className='  text-black bg-gradient-to-r from-[#facb54] to-[#e78fbb]    p-3 rounded-r-lg'>Subscribe</button>

                        </div>

                    </div>


                </div>
                

            </div>
            <br /><br />
            <hr className='opacity-50' />
                <br />
                <div className='text-center '>
                    <h1 className='text-white text-sm opacity-70'>@2024 RR-Ratul All Rights Reserved.</h1>
                </div>
                <br />
           
        </div>
    );
};

export default Footer;