import Logo from "./assets/components/Logo";
import ScreenMokup from "./assets/components/ScreenMokup";

const App = () => { 
  return(
    <div className="bg-contain bg-no-repeat bg-white min-h-screen">
      <header className="container mx-auto px-4">
      <div className="flex justify-between pt-8">
        <svg><Logo/></svg>
        <button className=" text-pink-500 ">Try it free</button>

      </div>
      <div className="flex justify-center pt-10 mt-10">
        <h1 className="text-4xl font-black text-black">Build The Comunity Your Fans Will Love</h1>
      </div>
      <div className="flex flex-col items-center pt-4 mt-4">
    <h1 className="text-2x1 font-semibold text-black">Huddle re-imagines the way we building communities. You have a</h1>
    <h1 className="text-2x1 font-semibold text-black">voice, but so does your audience. Create connections with your</h1>
    <h1 className="text-2x1 font-semibold text-black">user as you engage in genuine discussion.</h1>
      </div>
      </header>
      <main className="container mx-auto px-4 mt-16">
      <article className="flex justify-center">
        <button className="rounded-full border-2 border-pink-500 font-semibold bg-pink-500 text-white text text-2xl py-4 px-12">Get started for free</button>
      </article>
      <section>
        <svg><ScreenMokup/></svg>
      </section>
      </main>

    
    </div>
  )
 }
 export default App;