import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const imageArray = [
  'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
]

const Agence = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const imageIndex =
          self.progress < 1
            ? Math.floor(self.progress * imageArray.length)
            : imageArray.length - 1
        imageRef.current.src = imageArray[imageIndex]
      },
    })
  })

  return (
    <div className='font-[font2]'>

      <div ref={sectionRef} className='relative'>

        {/* Sticky image — left of center, sits BEHIND text */}
        <div className='sticky top-[23vh] flex justify-start pl-[31%]'>
          <div className='overflow-hidden lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:rounded-3xl rounded-xl'>
            <img
              ref={imageRef}
              className='h-full w-full object-cover'
              src={imageArray[0]}
              alt='Team member'
            />
          </div>
        </div>

        {/* Title — pushed down more, text renders above image via z-10 */}
        <div className='relative z-10 mt-[7vw]'>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
            Soixan7e <br /> Douze
          </h1>
        </div>

        {/* Paragraph — above the image */}
        <div className='relative z-10 pl-[41%] mt-20 p-3'>
          <p className='text-6xl leading-14'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros
            egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité,
            une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on
            la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour
            bâtir des marques influentes.
          </p>
        </div>

      </div>

      <div id='page2' className='h-screen' />

    </div>
  )
}

export default Agence