import BlocklyWorkspace from "./BlocklyWorkspace"

export default function App() {
  return (
    <>
      <div className="flex w-full max-w-[100vw] h-[calc(100vh-100px)]">
        <BlocklyWorkspace />
      </div>
    </>
  )
}
