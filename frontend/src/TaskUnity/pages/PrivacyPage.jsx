
export const PrivacyPage = () => {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mx-4 md:mx-8 lg:mx-0 text-lg space-y-8">
          <h1 className="text-5xl font-bold">Aviso de privacidad</h1>
          <p>En TaskUnity, valoramos y respetamos la privacidad de nuestros usuarios. Este Aviso de Privacidad tiene como objetivo informarte sobre cómo gestionamos y protegemos la información que recopilamos a través de nuestro sitio web.</p>

          <h2 className="text-3xl font-bold">Información Recopilada</h2>
          <p>Al utilizar TaskUnity, recopilamos información limitada necesaria para gestionar la autenticación de los usuarios. La información recopilada incluye:</p>
          <ul>
            <li className="flex">
              <span className="bg-taskunity-800 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
              <p>Dirección de correo electrónico.</p>
            </li>
          </ul>

          <h2 className="text-3xl font-bold">Uso de la Información</h2>
          <p>La información recopilada se utilizará exclusivamente para los siguientes fines:</p>
          <ul>
            <li className="flex">
              <span className="bg-taskunity-800 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
              <p><span className="font-bold">Autenticación del Usuario:</span> La dirección de correo electrónico se utilizará para gestionar el proceso de autenticación y proporcionar acceso seguro a la plataforma TaskUnity.</p>
            </li>
          </ul>

          <h2 className="text-3xl font-bold">Protección de la Información</h2>
          <p>En TaskUnity, nos comprometemos a proteger la información de nuestros usuarios. Implementamos medidas de seguridad físicas, electrónicas y administrativas para prevenir el acceso no autorizado, la divulgación, alteración o destrucción de la información recopilada.</p>

          <h2 className="text-3xl font-bold">Compartir Información</h2>
          <p>No compartimos, vendemos ni alquilamos la información personal de nuestros usuarios con terceros, excepto cuando sea necesario para cumplir con obligaciones legales o para mejorar nuestros servicios.</p>

          <h2 className="text-3xl font-bold">Acceso y Control</h2>
          <p>Los usuarios tienen derecho a acceder a su información personal, corregirla o solicitar su eliminación. Para realizar cambios en tu información, por favor, contacta con nosotros a través de contacto@taskunity.com.</p>

          <h2 className="text-3xl font-bold">Cambios en la Política de Privacidad</h2>
          <p>TaskUnity se reserva el derecho de actualizar o modificar este Aviso de Privacidad en cualquier momento. Se notificarán los cambios a través de la plataforma o por correo electrónico.</p>

          <h2 className="text-3xl font-bold">Contacto</h2>
          <p>Si tienes preguntas o inquietudes sobre nuestro Aviso de Privacidad, por favor, contáctanos a través de contacto@taskunity.com.</p>
          <p>Al utilizar TaskUnity, aceptas los términos de este Aviso de Privacidad.</p>
        </div>
      </div>
    </main>
  )
}