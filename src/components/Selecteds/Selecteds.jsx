import Selected from "../Selected/Selected";

const Selecteds = ({choosePlayer,handleSectionBtn, handleDeletePlayer}) => {
    return (
        <div className=" px-2 lg:px-32 mx-auto">
            <div>
                {
                    choosePlayer.map(player => <Selected key={player.playerId}  player={player} handleDeletePlayer={handleDeletePlayer} ></Selected>)
                }
                

            </div>
            <div className='border border-black w-40 flex justify-center py-1 rounded-xl'>
                <button onClick={() => handleSectionBtn('Available')} className='text-black bg-[#E7FE29] p-2 rounded-xl font-bold'>Add More Player</button>
                         
            </div>
            
        </div>
    );
};

export default Selecteds;