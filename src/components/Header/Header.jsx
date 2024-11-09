import logo from '../../assets/img/logo.png'
import PropTypes from 'prop-types';
import  './Header.css'
const Header = ({credit}) => {
    return (
        <div className=' mx-auto px-3 lg:px-32 py-4 sticky top-0 z-[10] bg-white bg-opacity-60  backdrop-blur-xl'>
           <div className='flex justify-between items-center'>
             <div>
                 <img src={logo} alt="" />
             </div>
            
              <div className='flex items-center gap-10'>
                <div className='hidden lg:block'>
                  <ul className='flex gap-4'>
                      <li className=''><a className='font-medium opacity-60 text-xl' href="">Home</a></li>
                      <li><a className='font-medium opacity-60 text-xl'  href="">Fixture</a></li>
                      <li><a className='font-medium opacity-60 text-xl'  href="">Teams</a></li>
                      <li><a className='font-medium opacity-60 text-xl'  href="">Schedules</a></li>
                  </ul>
                </div>
                <div className='block lg:hidden '>
                 <div className="dropdown rounded-md">
                    <button className="dropbtn"><img className='w-4 h-3' src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="" /></button>
                      <div className="dropdown-content">
                        <li className='list-none'><a className='font-medium opacity-60 text-xl' href="">Home</a></li>
                        <li className='list-none'><a className='font-medium opacity-60 text-xl'  href="">Fixture</a></li>
                        <li className='list-none'><a className='font-medium opacity-60 text-xl'  href="">Teams</a></li>
                        <li className='list-none'><a className='font-medium opacity-60 text-xl'  href="">Schedules</a></li>
                      </div>
                 </div>
                </div>
        
                <button className='flex gap-1 items-center border-2 rounded-xl px-4 py-2 
                text-xs lg:text-base'>{credit} Coin <img className='h-7 w-7' src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" alt="" /></button>
              </div>
           </div>
            
        </div>
    );
};
Header.propTypes={
  credit : PropTypes.number
}
export default Header;