import { getCurrentYear } from '../helpers';

export const FooterLanding = () => {
  return (
    <footer className='py-10 bg-taskunity-950'>
      <div className='max-w-6xl mx-auto'>
        <div className='mx-4 md:mx-8 lg:mx-0 flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
          <p className='text-white font-semibold text-sm text-center md:text-left'>©{getCurrentYear()} TaskUnity. Todos los derechos reservados. Desarrollado por Víctor Iván López</p>
          <p className='text-white font-semibold text-sm text-center md:text-left'>Aviso de Privacidad</p>
        </div>
      </div>
    </footer>
  )
}