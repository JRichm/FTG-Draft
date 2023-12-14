import Image from 'next/image'
import MainHeader from './components/mainHeader'

export default function Home() {
  return (
    <main className='flex flex-col bg-gray-200 min-h-screen'>
      <MainHeader />
      <div className='max-w-[1280px] self-center bg-white'>
        <div className='bg-gray-200 h-[654px] text-white justify-center flex flex-col p-12' style={{backgroundImage: "url(/images/hero.jpg)", backgroundSize: "cover"}}>
          <h1 className='text-3xl font-bold mt-64'>Harvesting Quality, Cultivating Trust</h1>
          <p className='font-medium max-w-[75%] text-shadow font-serif'>From golden fields of wheat to luscious orchards of almonds and walnuts, we bring the bounty of nature to your doorstep. With a passion for sustainable farming and a dedication to delivering premium quality, we cultivate partnerships that stand the test of time.</p>
          <a href="/products" className='bg-white text-black w-fit px-20 py-2 rounded-md hover:bg-transparent hover:outline hover:outline-white hover:outline-1 hover:text-white hover:font-medium transition-all'>Products</a>
        </div>
        <div className='bg-white p-12'>
          <h2 className='text-center font-light text-3xl'>Who we are</h2>
          <p>this is an about area, giving the user an overview of the company and its values</p>
        </div>
        <div className='bg-white p-12'>
          <h2 className='text-center font-light text-3xl'>Our Products</h2>
          <p>products area, showing the user what this company sells</p>
        </div>
        <div className='bg-white p-12'>
          <h2 className='text-center font-light text-3xl'>Sustainability</h2>
          <p>Sustainability area</p>
        </div>
        <div className='bg-white p-12'>
          <h2 className='text-center font-light text-3xl'>Customer Reviews</h2>
          <p>Customer reviews</p>
        </div>
        <div className='bg-white p-12'>
          <h2 className='text-center font-light text-3xl'>More Questions?</h2>
          <p>more questions/FAQ</p>
        </div>
      </div>
      <div className='bg-neutral-600'>
        <p>footer</p>
      </div>
    </main>
  )
}
