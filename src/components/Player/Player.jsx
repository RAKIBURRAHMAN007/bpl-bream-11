


const Player = ({player,handleChoosePlayer}) => {
    

    

    const {name,country,image,role,battingType,bowlingType,biddingPrice,playerId} = player;
    return (
        <div className="border-2 rounded-xl ">
            <div className="p-2 space-y-3">
                <img className="h-52 w-full rounded-xl" src={image} alt="" />
                <div className="flex items-center gap-1">
                    <div>
                        <img className="w-7 h-7" src="https://img.icons8.com/?size=100&id=99268&format=png&color=000000" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold">{name}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                 <div className="flex items-center gap-1">
                    <div>
                        <img className="w-4 h-4 opacity-60" src="https://img.icons8.com/?size=100&id=2755&format=png&color=000000" alt="" />
                    </div>
                    <div>
                        <h1 className="opacity-75">{country}</h1>
                    </div>

                </div>
                <div>
                    <button className="rounded-md bg-gray-100 py-2 px-4">{role}</button>
                </div>
              </div>
              <div className="bg-gray-200 h-[1px]">
               
              </div>
              <div>
                <h1 className="font-bold text-sm">Rating</h1>
              </div>
              <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-sm">{battingType}</h1>

                </div>
                <div>
                    <h1 className="font-bold opacity-50 text-sm">{bowlingType}</h1>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-sm font-bold">Price : {biddingPrice}</h1>

                </div>
                <div>
                    <button  onClick={() => handleChoosePlayer(player,biddingPrice,playerId)} className="border p-2 border-gray-200 rounded-md sk hover:bg-[#E7FE29]">Choose Player</button>

                </div>
              </div>
              <br />

            </div>
           
            
        </div>
    );
};

export default Player;