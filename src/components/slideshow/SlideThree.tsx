// import { slideStyles } from 'components/slideshow'
import Image from 'next/image'

const SlideThree = () => {
  return (
    <div>
      <div className="content">
        <Image
          priority={true}
          alt="slideshow image"
          src="/slideshow/website-hosting.svg"
          width={400}
          height={300}
        />
        <div css={{ textAlign: 'center' }}>
          <h1>Mobile and Desktop</h1>
          <p>Supports both mobile and desktop layouts</p>
        </div>
      </div>
    </div>
  )
}

export default SlideThree
