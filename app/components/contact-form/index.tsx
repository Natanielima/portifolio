'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Button from '../Button'
import SectionType from '../Section-title'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { handleSubmit, register, reset, formState:{isSubmitting} } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try{
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    }catch(erro){
      toast.error('Ocorreu um erro, tente novamente!')
    }
  }
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionType
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          exit={{opacity:0,  y:50}}
          transition={{duration:0.5}}
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            {...register("email")}
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            {...register("message")}
            maxLength={600}
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-400 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <Button className="mt-6 mx-auto w-max shadow-button" disabled={isSubmitting}>
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
