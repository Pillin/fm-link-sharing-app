import { useEffect, useRef } from 'react'


const Modal = ({ children, open, dispatch }: any) => {
  const ref = useRef();

  useEffect(() => {
    if (!open) {
      ref?.current?.close()
    } else if (!ref?.current?.open && open) {
      ref?.current?.showModal()
    }
  }, [ref, open])

  useEffect(() => {
    const handleEvent = (e: any) => {
      if (!open) return
      const element = document.getElementById('modal-description');
      if (element && !element.contains(e.target)) {
        dispatch({ type: "CLOSE" });
      } else {
        e?.stopPropagation()
      }
    };

    document.addEventListener("pointerdown", handleEvent);

    return () => {
      document.removeEventListener("pointerdown", handleEvent);
    };

  }, [open, dispatch]);

  return <dialog
    ref={ref}
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description">
    <section id='modal-description' className="bg-slate-100 rounded-xl p-8 ">
      <button onClick={() => {
        dispatch({ type: "CLOSE" })
      }} >X</button>
      {children}
    </section>

  </dialog>
}

export default Modal