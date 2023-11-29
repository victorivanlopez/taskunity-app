
export const BenefitsSection = () => {
  return (
    <main className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mx-4 md:mx-8 lg:mx-0">
          <div className="md:max-w-2xl md:mx-auto space-y-6 text-center mb-20">
            <h2 className="text-4xl font-bold">Características clave de TaskUnity</h2>
            <p className="text-lg">Desde la gestión de tareas hasta la colaboración en equipo, te presentamos un enfoque integral para la gestión de proyectos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-last">
              <img src="/assets/taskunity-dashboard.png" alt="Taskunity Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:mr-20 lg:mr-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Estadísticas y seguimiento de los proyectos</h3>
              <p className="text-lg">Accede a estadísticas detalladas de tus proyectos, y mantén un seguimiento en tiempo real del progreso con conteos precisos de tareas en proceso y por finalizar.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-first">
              <img src="/assets/taskunity-collaborators.png" alt="Taskunity Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:ml-20 lg:ml-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Trabaja en tiempo real con tu Equipo</h3>
              <p className="text-lg">Añade colaboradores a tus proyectos y trabaja en tiempo real. Ya no hay barreras para la comunicación y la cooperación.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-24">
            <div className="md:col-span-7 shadow-md md:order-last">
              <img src="/assets/taskunity-tasks.png" alt="Taskunity Dashboard" />
            </div>
            <div className="md:col-span-5 space-y-4 md:flex md:flex-col md:justify-center md:mr-20 lg:mr-28 mt-10 md:mt-0">
              <h3 className="text-2xl font-bold">Crea tareas y define plazos con precisión</h3>
              <p className="text-lg">Planifica cada tarea de tu proyecto. Indica tiempos de finalización y mantén a tu equipo en sintonía con un flujo de trabajo impecable.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}