import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './components/Courses'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'

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
      },
      {
        path
        :"/my-learning",
        element:<MyLearning />
      },
      {
        path
        :"/profile",
        element:<Profile />
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
