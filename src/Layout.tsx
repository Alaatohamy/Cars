import { useState } from 'react'
import { Metrics, MobileSideBar, StaticSideBar, ProfileDropDown, CarList, YourInfo } from "./components";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
      <div>
        <MobileSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <StaticSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1 flex-col lg:pl-64">
          <ProfileDropDown sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/*  content */}
                <div className="py-4 flex flex-col">
                  <Metrics />
                  <YourInfo />
                  <CarList />
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