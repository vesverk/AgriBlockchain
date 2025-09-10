import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./pages/Landing"
function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Landing />
  }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
