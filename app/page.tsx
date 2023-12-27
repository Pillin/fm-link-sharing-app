"use client"

import { Button } from '@components/core/ui/button'
import useModal from '@/lib/hooks/useModal'
import Modal from "@components/core/Modal"

export default function Home() {
  const { open, content, dispatch } = useModal()
  const text = "asdasdasd asd as sad asd as da sd sa d sd s d sad as as d sad asd"

  return (
    <main>
      <Modal open={open} dispatch={dispatch}>
        {content}
      </Modal>

      <div id='test' data-information={text} >{text}</div>
      <br />
      <Button onClick={() => dispatch({ type: "OPEN", content: <div>HELLO</div> })}>asd</Button>
    </main>
  )
}
