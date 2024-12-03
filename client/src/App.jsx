import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './components/Courses'

function App() {
  

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout />,
      children:[{
        path:"/",
        element:<>
        <HeroSection />
        <Courses />
        </>
      },
      {
        path
        :"/login",
        element:<Login />
      }]

    }
  ])

  return (
 <main>
  <RouterProvider router={appRouter} />
 </main>
  )
}

export default App
