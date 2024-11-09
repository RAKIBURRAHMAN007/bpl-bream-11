const Selected = ({player,handleDeletePlayer}) => {
  const { image, role, name, biddingPrice, playerId } = player;
    return (
        <div className="w-full lg:max-w-5xl lg:mx-auto">
          
                <div key={playerId} className="border rounded-md flex justify-between items-center mb-2">
                  <div className="flex justify-between p-3 gap-4">
                    <div>
                        <img className="w-24 h-full rounded-md" src={image} alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">{name}</h1>
                        <h1 className="text-sm opacity-70">{role}</h1>
                        <h1 className="font-bold">Price : {biddingPrice}</h1>
                    </div>
                  </div>
                  <div>
                    <button onClick={()=>handleDeletePlayer(playerId)}>
                      <img className="w-10" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" alt="" />
                    </button>
                  </div>
                </div>
              
          
        </div>
    );
};

export default Selected;
