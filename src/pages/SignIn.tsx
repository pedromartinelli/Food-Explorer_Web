import { Envelope } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

export function SignIn() {
  return (
    <div className='h-screen w-screen bg-background_900'>
      <div className='min-h-screen flex items-center justify-between mx-96'>
        <img src={logoImage} alt="Food Explorer" />

        <form className=' bg-background_800 p-16 rounded-xl border border-sky-900'>
          <h1 className='text-4xl text-white font-poppins '>
            Faça seu login
          </h1>

          <div className="flex flex-col">
            <div className='flex items-center mt-16'>
              <Envelope
                size={24}
                // color='#7C7C8A'
              />
              <input
                className="w-96 px-3 py-2 placeholder:text-gray_300 placeholder:text-base text-white bg-background_700 rounded-xl"
                placeholder="E-mail"
                type="email"
              />
            </div>

            <input
              className="w-96 px-3 py-2 mt-12 placeholder:text-gray_300 text-white bg-background_700 rounded-xl"
              placeholder="Senha"
              type="password"
            />
          </div>
        </form>

      </div>
    </div>
  )
}

