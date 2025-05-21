import repair from '../assets/repair.jpg'

export default function LandingSection() {
  return (
    <div className="w-full bg-greeen">
      <div className="flex flex-col md:flex-row h-auto md:h-screen text-white justify-center items-center rounded-3xl my-10 px-4 py-10 md:py-0 max-w-screen-xl mx-auto">
        {/* Title for small screens only */}
        <h1 className="block md:hidden text-4xl font-bold w-full text-center mb-6">
          WATCHES REPAIR & SERVICE
        </h1>

        {/* Left Div */}
        <div className="w-full md:w-1/3 flex flex-col justify-center p-4 md:p-10 space-y-6 items-end md:items-end text-end md:text-end">
          {/* Title for md+ screens */}
          <h1 className="hidden md:block text-4xl font-bold w-full md:w-auto text-center md:text-end">
            WATCHES REPAIR & SERVICE
          </h1>
          
          {/* Show image below title on small screens */}
          <div className="w-full flex justify-center md:hidden">
            <img
              src={repair}
              alt="Big"
              className="w-60 h-60 object-cover rounded-lg shadow-lg my-4"
            />
          </div>
          
          <p className="text-lg w-full md:w-[600px] text-center md:text-end">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <button className="bold bg-white text-greeen px-5 py-2 rounded font-bold hover:bg-green-100 transition self-end">
            ENQUIRE
          </button>
        </div>

        {/* Right Div: show image only on md+ screens */}
        <div className="md:w-[1/3] relative items-center justify-center hidden md:flex">
          <img
            src={repair}
            alt="Big"
            className="w-72 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}