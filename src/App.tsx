import Links from './components/Links'

function App() {

  const handleClickScroll = (id : string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  window.addEventListener('load', () => {
      selector: document.querySelector('.js-slider-wrapper')
 });

  const Card = () => {
    return (
      <div className="flex justify-center w-full mb-8 shrink-0 ">
        <div className="rounded-lg shadow-lg bg-brand-400 max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-xl font-medium mb-2">Project Title</h5>
            <p className="text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>)}

  return (
    <div className='bg-gradient-to-b from-brand-900 to-brand-600 text-white flex flex-col snap-mandatory snap-y'>
      <div className='fixed w-full py-10 px-10 flex justify-between'>
        <div>
          <button className='mr-5' onClick={() =>handleClickScroll("home")}>
            Home
          </button>
          <button className='mr-5' onClick={() =>handleClickScroll("about")}>
            About
          </button>
          <button className='mr-5' onClick={() =>handleClickScroll("skills")}>
            Skills
          </button>
          <button className='mr-5' onClick={() =>handleClickScroll("projects")}>
            Projects
          </button>
        </div>
        <div>
          <Links/>
        </div>
      </div>
      <section id='home' className="section">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em] ">
            <h1>Daniel Fernandes </h1>
          </div>
          <div className="text-center">
            <div className="items-center">
              <div className="mt-12 text-m">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className="section">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <h1>About</h1>
          </div>
          <div className="text-center">
            <div className="items-center">
              <div className="mt-12 text-m">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi deserunt ducimus vitae aperiam architecto perspiciatis quae est consequatur at cupiditate voluptatum, ea praesentium, nesciunt pariatur voluptatibus molestias! Nihil, enim.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skills' className="section">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <h1>Skills</h1>
          </div>
          <div className="text-center">
            <div className="items-center">
              <div className="mt-12 text-m">
                 JavaScript • React
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className="section">
        <div className='flex-col items-center w-full'>
          <div className="flex justify-center text-xl mb-10 tracking-[.50em]">
            <h1>Projects</h1>
          </div>
          <div className="text-center">
            <div className="cards">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default App
