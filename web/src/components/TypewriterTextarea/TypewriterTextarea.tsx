import { Textarea } from '@mantine/core'
import { useRef } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
// import Typewriter from 'typewriter-effect'
import TypeWriterEffect from 'react-typewriter-effect'

const TypewriterTextarea = ({ content }: { content: string }) => {
  if (!content) return null
  return (
    <div className="p-4 border border-gray-400 rounded">
      <TypeWriterEffect
        textStyle={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 400 }}
        startDelay={100}
        cursorColor="black"
        text={content}
        typeSpeed={35}
      />
    </div>
  )
  // return (
  //   <Typewriter
  //     onInit={(typewriter) => {
  //       typewriter.typeString(content).start()
  //     }}
  //   />
  // )
  // if (!content) return null
  // console.log(content.split(' '))
  // const [text] = useTypewriter({
  //   words: content.split(' '),
  //   typeSpeed: 80,
  //   loop: 1,
  //   onLoopDone: () => console.log(`loop completed `),
  // })

  // return (
  //   <div>
  //     <h1>Hello</h1>
  //     <span>{text}</span>
  //   </div>
  // )
}

export default TypewriterTextarea
