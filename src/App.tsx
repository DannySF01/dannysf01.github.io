import Links from './components/Links'

function App() {

  const handleClickScroll = (id : string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div className='bg-gradient-to-b from-brand-900 to-brand-500 text-white flex flex-col'>
      <div className='fixed w-full py-10 px-10 flex justify-between'>
        <div>
          <button className='mr-5' onClick={() =>handleClickScroll("me")}>
            Me
          </button>
          <button className='mr-5' onClick={() =>handleClickScroll("about")}>
            About
          </button>
          <button className='mr-5' onClick={() =>handleClickScroll("projects")}>
            Projects
          </button>
        </div>
        <div>
          <Links/>
        </div>
      </div>
      <section id='me' className="p-10 h-screen flex items-center">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <div>Daniel Fernandes </div>
          </div>
          <div className="text-center">
            <div className="grid gap-12 items-center">
              <div className="mt-12 text-m">
              </div>
            </div>
          </div>
        </div>
      </section><section id='about' className="p-10 h-screen flex items-center">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <div>About</div>
          </div>
          <div className="text-center">
            <div className="grid gap-12 items-center">
              <div className="mt-12 text-m">
                Daniel Fernandes • 21yo • Web Developer • JavaScript • React
              </div>
            </div>
          </div>
        </div>
      </section><section id='projects' className="p-10 h-screen flex items-center">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <div>Projects</div>
          </div>
          <div className="text-center">
            <div className="grid gap-12 items-center">
              <div className="mt-12 text-m">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
