
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Players from './components/Players/Players';
import Selecteds from './components/Selecteds/Selecteds';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessToast, showErrorToast, showWarningToast, showErrorToast2 , showWarningToast3} from './App';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


function App() {
  const [selectedBtn, setSelectedBtn] = useState('Available');
  const handleSectionBtn = (button) => {
    setSelectedBtn(button);
  };

  const [credit, setCredit] = useState(0);
  const handleCreditBtn = () => {
    const newCredit = credit + 10000000;
    setCredit(newCredit);
  };

  const [count, setCount] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleChoosePlayer = (player, biddingPrice, playerId) => {
    if (choosePlayer.length >= 6) {
      showWarningToast3()
      return; 
    }
    if (!choosePlayer.find((p) => p.id === playerId)) {
      const price = parseFloat(biddingPrice.replace(/[$,]/g, ''));
      const newCredit = credit - price;

      if (price <= credit) {
        const newPlayer = { ...player, id: playerId }; 
        setChoosePlayer([...choosePlayer, newPlayer]);
        setCount(count + 1);
        setCredit(newCredit);
        showSuccessToast(newPlayer.name)
      } else {
        // alert('Not enough balance');
        showErrorToast()
      }
    } else {
      // alert('Player already added');
      showErrorToast2();
    }
  };

  const handleDeletePlayer = (playerId) => {
    const updatedPlayers = choosePlayer.filter((player) => player.id !== playerId);
    setChoosePlayer(updatedPlayers);
    setCount(updatedPlayers.length);
    showWarningToast()
    const removedPlayer = choosePlayer.find(player => player.id === playerId);
    if (removedPlayer) {
      setCredit(credit + parseFloat(removedPlayer.biddingPrice.replace(/[$,]/g, '')));
    }

  };

  return (
    
    <>
      <ToastContainer position="top-center"/>
      <Header credit={credit}></Header>
      <Main handleCreditBtn={handleCreditBtn} handleSectionBtn={handleSectionBtn} selectedBtn={selectedBtn} count={count}></Main>
      {selectedBtn === 'Available' ? (
        <Players handleChoosePlayer={handleChoosePlayer}></Players>
      ) : (
        <Selecteds choosePlayer={choosePlayer} handleDeletePlayer={handleDeletePlayer} handleSectionBtn={handleSectionBtn}></Selecteds>
      )} <br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br />
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
