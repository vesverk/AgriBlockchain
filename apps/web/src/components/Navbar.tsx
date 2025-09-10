import {Leaf,Moon} from "lucide-react"
import { Link } from "react-router-dom"
import Button from "./ui/button"
function Navbar() {
  return (
  <>
    <div className="flex justify-between py-6 ">
    <div className="flex items-center justify-center ms-10">
      <Leaf className="h-8 w-8 text-green-700"/>
      <h1 className="font-semibold text-3xl bg-gradient-to-r from-[#1A7F37] to-[#0080FF] bg-clip-text text-transparent px-1">TrueHarvest</h1>
    </div>

    <div className="flex items-center justify-between"> 
    <Link to="/" className=" px-3 font-medium hover:text-[#1A7F37]/65">Home</Link>
    <a href="#features" className=" px-3 font-medium hover:text-[#1A7F37]/65">Features</a>
    <a href="#About" className=" px-3 font-medium hover:text-[#1A7F37]/65">About</a>
    <a href="#Contact" className=" px-3 font-medium hover:text-[#1A7F37]/65">Contact</a>
    </div>

    <div className="flex items-center justify-between">
        <Moon className="h-4 w-4 hover:text-green-400 me-12"/>
        <Button variant="secondary" content="Sign In" onClick={()=>{}} className="me-6"/>
        <Button variant="primary" content="Get Started" onClick={()=>{}} className="me-6"/>
    </div>
    </div>
    
  </>
  )
}

export default Navbar
