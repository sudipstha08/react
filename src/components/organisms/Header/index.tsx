import { FC } from "react"

const Header: FC = () => {
  return (
    <header className="px-4 py-6 bg-no-repeat dark:bg-[#0B1120]">
      <div className="container flex justify-between">
        <img src="/assets/imgs/dnd3.png" width="200" alt="logo"/>
        <h1 className="text-5xl text-slate-400 header ">Dungeons & Dragons</h1>
      </div>
    </header>
  )
}

export { Header }