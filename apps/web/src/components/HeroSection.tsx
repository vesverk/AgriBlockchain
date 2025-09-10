import Button from "./ui/button"
import Corousel from "./ui/Corousel"

function HeroSection() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative min-h-screen w-full">
  {/* Background image */}
  <img
    src="HeroImage.png"
    alt="Hero Farm image"
    className="absolute inset-0 w-full h-full object-cover opacity-45"
  />

  {/* Overlay text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent text-7xl font-bold">
      Revolutionary
    </h1>
    <h2 className="text-5xl md:text-6xl lg:text-7xl text-black/70 font-bold mt-2">
      Agricultural Blockchain
    </h2>
    <p className="text-lg md:text-2xl text-black/45 mt-4 max-w-3xl leading-relaxed">
      Transform farming with cutting-edge blockchain technology. Track, verify,
      and optimize your agricultural supply chain with complete transparency
      and trust.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      <Button
        content="Start Your Journey"
        variant="primary"
        onClick={() => {}}
        className="w-fit px-8"
      />
      <Button
        content="Watch Demo"
        variant="secondary"
        onClick={() => {}}
        className="bg-white/85 px-8"
      />
    </div>
  </div>
</section>

{/* Next Section */}
    <section className="bg-gradient-to-b from-[#F0FDF4] via-[#FFFFFF] to-[#F0FDF4] h-[270vh] w-full flex flex-col items-center text-center absolute">
          <h1 className="text-5xl font-bold mt-25"><span className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent">Innovation</span> in Agriculture</h1>
          <p className="text-2xl py-4 text-black/55 ">Discover how blockchain technology is revolutionizing farming practices <br />worldwide</p>
         <Corousel />
          <div>
          <div>

          </div>
          <div className="flex flex-col items-center justify-start">
          <h1 className="text-4xl font-bold ">See TrueHarvest in </h1>
          <h1 className="text-green-600 text-4xl font-bold">Action</h1>
          <p>Watch how our blockchain-powered platform transforms traditional farming <br /> into smart, sustainable agriculture with real-time data and complete <br /> transparency.</p>
          </div>
          </div>
          
         

    </section>  
    </>
    

  )
}

export default HeroSection
