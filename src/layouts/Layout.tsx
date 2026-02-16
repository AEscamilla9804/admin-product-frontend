import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header className="bg-slate-800">
        <div className="text-center w-full p-10">
          <h1 className="text-4xl font-bold text-white">
            Products Administrator
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto w-[90%] md:w-[80%] p-10 mb-5 bg-white shadow rounded-2xl md:rounded-none">
        <Outlet />
      </main>
    </>
  )
}

export default Layout