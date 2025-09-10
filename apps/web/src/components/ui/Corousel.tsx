import Button from "./button"

function Corousel() {
  return (
    <div className="relative mt-10">
  <img
    src="HeroImage.png"
    alt="Hero1"
    className="h-[60vh] w-[75vw] object-cover opacity-60 rounded-2xl mx-auto"
  />

  <div className="absolute top-1/4 left-12 max-w-xl text-left">
    <h1 className="text-xl md:text-3xl font-extrabold text-gray-900">
      Sustainable Agriculture
    </h1>
    <p className="mt-2 text-lg md:text-xl text-black/55 leading-relaxed">
      Build a sustainable future with data-driven farming decisions and verified
      environmental impact tracking.
    </p>
    <div className="mt-6">
        <Button content="Get Started" variant="primary" onClick={()=>{}} className="px-8 rounded-xl"/>
    </div>
  </div>
</div>

  )
}

export default Corousel
