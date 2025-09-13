import Button from "./ui/button"
import Corousel from "./ui/Corousel"
import { Shield,Globe,Zap, Leaf ,ChartColumnIncreasing ,Users, Lock, Smartphone, Truck} from "lucide-react"
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
    <h1 className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent text-7xl font-bold ">
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
  <section className="bg-gradient-to-b from-[#F0FDF4] via-[#FFFFFF] to-[#F0FDF4] min-h-[300vh] w-full flex flex-col items-center ">
          <h1 className="text-5xl font-bold mt-25"><span className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent">Innovation</span> in Agriculture</h1>
          <p className="text-2xl py-4 text-black/45 ">Discover how blockchain technology is revolutionizing farming practices worldwide</p>
         <Corousel />
          <div>
          {/* Video section */}
          <div>

          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="ms-[45vw] mt-40">
              <h1 className="text-6xl font-bold ">See TrueHarvest in<br /><span className="text-green-600 text-6xl font-bold">Action</span></h1>
              <p className="mt-6 text-xl text-black/45">Watch how our blockchain-powered platform transforms traditional farming <br /> into smart, sustainable agriculture with real-time data and complete <br /> transparency.</p>
              <div className="mt-10 ">
                <div className="flex justify-start py-5">
                  <Shield size={48} className="bg-green-100 text-green-600 rounded-xl p-3" />
                  <div className="ms-4">
                      <h1 className="text-xl font-semibold">Secure & Transparent</h1>
                      <p className="mt-1 text-black/65">Immutable blockchain records ensure data integrity and complete supply chain <br /> visibility.</p>
                  </div>  
                </div>
                <div className="flex justify-start py-5">
                  <Zap size={48} className="bg-sky-100 text-blue-600 rounded-xl p-3" />
                  <div className="ms-4">
                      <h1 className="text-xl font-semibold">Real-time Monitoring</h1>
                      <p className="mt-1 text-black/65">IoT sensors provide instant updates on crop conditions, weather, and soil health.</p>
                  </div>  
                </div>
                <div className="flex justify-start py-5">
                  <Globe size={48} className="bg-yellow-100 text-yellow-400 rounded-xl p-3" />
                  <div className="ms-4">
                      <h1 className="text-xl font-semibold">Global Network</h1>
                      <p className="mt-1 text-black/65">Connect with farmers, suppliers, and buyers worldwide through our decentralized <br />platform.</p>
                  </div>  
                </div>
              </div>
              <div className="mt-5">
                <Button content="Start Free Trial" variant="primary" onClick={()=>{}} className="me-4"/>
                <Button content="Schedule Demo" variant="secondary" onClick={()=>{}} className="ms-4 outline"/>
              </div>
            </div>
           </div>
          </div>

          <div className="mt-30 flex flex-col items-center text-center">
            <h1 className="text-5xl font-semibold">Powerful <span className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent">Features</span></h1>
            <p className=" text-2xl text-black/45 mt-4">Everything you need to modernize your agricultural operations and connect with <br />the global food system</p>
            {/* Cards */}
          <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <Leaf size={48} className="text-green-700 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Smart Crop Management</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
               AI-powered insights for optimal planting, watering, <br />
                and harvesting schedules based on real-time data.
               </p>
            </div>
          </div>
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <ChartColumnIncreasing size={48} className="text-blue-500 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Analytics Dashboard</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
              Comprehensive analytics and reporting tools to  <br />
               track farm performance and optimize operations.
               </p>
            </div>
          </div>
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <Users size={48} className="text-yellow-500 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Community Network</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
               Connect with other farmers, share knowledge, and <br />access a global marketplace for agricultural <br />products.
               </p>
            </div>
          </div>
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <Lock size={48} className="text-green-700 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Secure Transactions</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
                Blockchain-secured payments and contracts <br /> ensure safe, transparent business dealings.
               </p>
            </div>
          </div>
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <Smartphone size={48} className="text-green-500 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Mobile Access</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
              Manage your farm operations from anywhere with <br /> our intuitive mobile application.
               </p>
            </div>
          </div>
          <div className="bg-white h-[25vh] w-[30vw] rounded-xl border border-black/5 p-5">
            <div className="flex items-center">
             <Truck size={48} className="text-amber-700 p-3 bg-gray-100 rounded-xl"/>
                <h1 className="px-4 text-xl font-bold">Supply Chain Tracking</h1>
            </div>
            <div className="mt-4">
              <p className="text-black/45">
                End-to-end traceability from farm to consumer <br /> with immutable blockchain records.
               </p>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-center mt-6 bg-green-200/65 py-2 px-4 rounded-2xl">
            <Leaf className="text-green-700"/>
            <p className="px-2">And many more features coming soon...</p>
          </div>
          </div>
    </section>  
    <section className="bg-white h-[200vh] w-full flex flex-col items-center text-center mt-20">
        <h1 className="text-5xl font-bold">About <span className="bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent">TrueHarvest</span></h1>
        <p className="mt-4 text-xl text-black/45">We're building the future of agriculture by combining blockchain technology with smart <br />farming solutions</p>
        <div className="mt-25 grid grid-cols-2 gap-10">
          <div className="bg-white border-1 border-black/15 h-[15vh] w-[45vw] rounded-xl">
            <h1 className="font-bold te">Our Mission</h1>
          </div> 
          <div className="bg-white border-1 border-black/15 h-[15vh] w-[45vw] rounded-xl">

          </div> 
          <div className="bg-white border-1 border-black/15 h-[15vh] w-[45vw] rounded-xl">

          </div> 
          <div className="bg-white border-1 border-black/15 h-[15vh] w-[45vw] rounded-xl">

          </div> 
        </div>

        <div className="mt-35">
           <div className="bg-gradient-to-r from-green-100/75 to-white h-[60vh] w-[92vw] rounded-xl mt-10 flex flex-col items-center text-center py-10">
            <h1 className="text-3xl font-bold">Our Story</h1>
            <p className="text-xl text-black/45 mt-4">Founded by a team of agricultural experts and blockchain developers, TrueHarvest was born from the vision of <br />
            creating a more transparent, efficient, and sustainable food system. We recognized that traditional agricultural <br />
            supply chains lacked the transparency and traceability needed for today's conscious consumers and <br />
            environmentally aware businesses.</p>
            <p className="text-xl text-black/45 py-10">
              Through cutting-edge blockchain technology, IoT sensors, and AI-powered analytics, we're empowering <br />
             farmers to make data-driven decisions while providing consumers with complete visibility into the journey of <br />
             their food from farm to table.
            </p>
            <Button content="Join Our Mission" variant="primary" onClick={()=>{}} />
        </div>
        </div>
        <hr className="border-t border-gray-300 w-full mt-25" />

        {/* Footer */}
        <div>
          <h1>TrueHarvest</h1>
        </div>
    </section>
    </>
    

  )
}

export default HeroSection
