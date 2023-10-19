import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <div className="flex items-center hover:underline">
          <Image
            src="/assets/blog/artisan-labs/artisanLogo_1690404109154_0_72dpi.png"
            alt="ArtisanLabs.io"
            width={50}
            height={50}
            className="underline hover:text-blue-600 duration-200 transition-colors ml-2"
          />
          <span className="ml-2">Vocal Resonance</span>
          .
        </div>
      </Link>
      
    </h2>
  )
}

export default Header
