import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { SideBar, Header } from "./components";
import { HomePage, Booking } from "./pages";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
      <div>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1 flex-col lg:pl-64">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/*  content */}
                <div className="py-4 flex flex-col">
                  <Routes>
                    <Route path="/booking" element={<Booking/>} />
                    <Route path="/" element={<HomePage />}/> 
                  </Routes>
                </div>
                {/* /End content */}
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}

export default Layout;