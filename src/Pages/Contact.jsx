import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";

import BeeContact from "../Models/BeeContact";
import Loader from "../Components/Loader";


// import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Fly');

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('Fly');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Shadeau Christensen",
        from_email: form.email,
        to_email: "shadeau100@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ) .then(() => {
        setIsLoading(false)
        setCurrentAnimation('Fly');
        alert("Thank you! I will get back to you as soon as possible.")
        setForm({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      })
  }

  const handleFocus = () => setCurrentAnimation('Fly');
  const handleBlur = () => setCurrentAnimation('Fly');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Give me a Buzz!</h1>

        <form className="w-full flex flex-col gap-6 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500">
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />Name</label>
          <label className="text-black-500">
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="john.doe@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />Email</label>
          <label className="text-black-500">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="textarea"
              placeholder="Message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>Message</label>

          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-[600px] h-[400px]">
        <Canvas camera={{ position: [10, 0, 5], fov: 80, near: 0.15, far: 1000 }} className="w-full h-full">
          <directionalLight position={[5, 10, 5]} intensity={1.75} />
          <ambientLight color={"white"} intensity={0.45} />
          <Suspense fallback={<Loader />}>
            <group position={[1, 0.05, 0.6]} rotation={[3.05, Math.PI * 0.85, -9.46]} scale={[3.95, 3.95, 3.95]}>
              <BeeContact currentAnimation={currentAnimation} />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact