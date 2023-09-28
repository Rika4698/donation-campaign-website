/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


const Banner = ({handleSearch, setSearchCategory }) => {
  
    return (
        <div className=" ">
            <div className="h-[80vh] w-100%  bg-[url('https://i.ibb.co/TghQnFJ/people-meeting-community-center.jpg')] bg-cover bg-center ">
                <div className="h-[80vh] w-100% flex  justify-center items-center bg-white/90 backdrop-brightness-75">
                    <div className="grid ">
                        <div className="font-bold text-3xl text-[#0B0B0B] text-center lg:text-5xl"> <h1>I Grow By Helping People In Need</h1></div>
                        <div  className="join justify-center items-center mt-10 w-auto ">
                            <div>
                                <div >
                                    <input className="input input-bordered join-item lg: w-80" placeholder="Search here...."
                                  
                                   onChange={(e) => setSearchCategory(e.target.value)}
                                    />
                                    
                                </div>
                            </div>

                            <div  onClick={handleSearch}  className="">

                                <button 
                                 className="btn join-item  capitalize text-white text-sm bg-[#FF444A] font-semibold">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;