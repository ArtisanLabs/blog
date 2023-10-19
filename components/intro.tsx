import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Vocal Resonance.
      </h1>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div>The Potential of Voice-Based Models at Artisan Labs</div>
        <div className="flex items-center mt-2">
          <span>Blog by </span>
          <a href="https://lab.artisanlabs.io">
            <Image
              src="/assets/blog/artisan-labs/artisanLogo_vertical_name_32dpi.png"
              alt="ArtisanLabs.io"
              width={200}
              height={200}
              className="underline hover:text-blue-600 duration-200 transition-colors ml-2"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro