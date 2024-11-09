import bg from '../../assets/img/bg-shadow.png'
import banner from '../../assets/img/banner-main.png'
import './Main.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
const Main = ({handleCreditBtn,handleSectionBtn,selectedBtn,count}) => {
    const notify = () =>  toast.success("Credit Added to your Account")
    
    return (
        <div className='max-w-5xl mx-auto p-4'>
            {/* banner section */}
            <section style={{backgroundImage:`url(${bg})`}}  className='text-center bg-cover bg-black lg:h-[450px] rounded-xl '>
                <div className='space-y-5 pt-10'>
                    <div className='flex items-center justify-center'>
                      <img  src={banner} alt="" />
                    </div>
                    <h1 className='text-white font-bold text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-white font-medium opacity-60'>Beyond Boundaries Beyond Limits</p>
                   <div className='flex justify-center'>
                     <div className='border border-[#E7FE29] w-44 py-2 rounded-xl'>
                         <button onClick={()=>{handleCreditBtn();notify()}} className='text-black bg-[#E7FE29]  p-2 rounded-xl font-bold'>Claim Free Credit</button>
                         
                     </div>
                     
                   </div>
                  <br />
                    {/* <ToastContainer  position="top-center"/> */}
                   
                </div>
                
            </section><br /><br />
            {/* cards section */}
            <section>
                <div className='flex justify-between items-center'>
                <h1 className="font-bold lg:text-2xl">{selectedBtn === 'Available' ? 'Available Players' : `Selected Players(${count}/6)`}</h1>
                    <div className='flex gap-2 border  rounded-xl'>
                        <button onClick={() => handleSectionBtn('Available')} className={`p-2 rounded ${selectedBtn === 'Available' ? 'bg-[#E7FE29] text-black' : 'bg-white text-black'}`}>Available</button>
                        <button onClick={() => handleSectionBtn('Selected')}   className={`p-2 rounded ${selectedBtn === 'Selected' ? 'text-black bg-[#E7FE29]' : 'bg-white text-black'}`}>Selected ({count})</button>
                    </div>
                </div>
            </section> <br />
           
           
            
        </div>
         
    );
};

Main.propTypes={
    handleCreditBtn : PropTypes.func,
    credit : PropTypes.number,
    handleSectionBtn : PropTypes.func,
    selectedBtn : PropTypes.bool,
    count : PropTypes.number

   
}
export default Main;