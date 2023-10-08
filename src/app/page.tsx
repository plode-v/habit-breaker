import Navbar from "@/components/landing-page/Navbar"
import HeroBanner from "@/components/landing-page/HeroBanner"
import Features from "@/components/landing-page/Features"
import ProductSection from "@/components/landing-page/ProductSection"

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <Navbar />
        <HeroBanner />
        <Features />
        <ProductSection />
    </div>
  )
}
