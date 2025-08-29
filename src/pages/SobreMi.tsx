import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import mistressPortrait from "@/assets/mistress-portrait.jpg"

const SobreMi = () => {

  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gothic-gold gothic-heading mb-4">
                  SOBRE MI
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Conoce a la Mujer detrás de la Dominatrix
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto text-center">
          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Portrait */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={mistressPortrait} 
                alt="Mistress Johanna - Retrato Personal"
                className="w-full max-w-md h-auto object-cover rounded-lg gothic-border shadow-gothic"
              />
            </div>
            
            {/* Biography Text */}
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6">
                  Mi Historia
                </h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-foreground">
                  <p>
                    Mi nombre es <strong className="text-gothic-gold">Mistress Johanna</strong>, y durante los últimos años me he dedicado profesionalmente al arte de la Dominación Masculina. Lo que comenzó como una fascinación natural por el poder y el control, se ha convertido en mi vocación y estilo de vida.
                  </p>
                  
                  <p>
                    Desde muy joven, siempre supe que tenía una personalidad dominante. No fue hasta descubrir el mundo BDSM que entendí completamente mi verdadera naturaleza. La sensación de poder, de control total sobre otro ser humano que se entrega voluntariamente a mis deseos, es algo que me define como persona.
                  </p>
                  
                  <p>
                    Mi enfoque como Dominatrix no se basa únicamente en la fuerza física, sino en la <strong className="text-gothic-gold">dominación psicológica</strong>. Creo firmemente que la verdadera sumisión nace de la mente, no del cuerpo. Por eso, mis sesiones están cuidadosamente diseñadas para explorar los límites mentales y emocionales de mis sumisos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <section className="mb-16 p-8 bg-gothic-gray rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6 text-center">
              Mi Filosofía
            </h3>
            
            <div className="text-lg leading-relaxed space-y-6 text-foreground">
              <p className="text-center text-xl font-semibold text-gothic-gold italic">
                "La verdadera dominación es un arte que requiere inteligencia, creatividad y, sobre todo, respeto."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Dominación Consensual</h4>
                  <p>
                    Cada sesión se basa en el consentimiento mutuo y el respeto por los límites establecidos. La confianza es la base fundamental de cualquier relación D/s exitosa.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Crecimiento Personal</h4>
                  <p>
                    Veo cada sesión como una oportunidad para que mis sumisos exploren aspectos profundos de su personalidad y descubran nuevas facetas de sí mismos.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Profesionalismo</h4>
                  <p>
                    Mantengo los más altos estándares de profesionalismo, higiene y discreción. La privacidad de mis sumisos es sagrada.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Evolución Constante</h4>
                  <p>
                    Estoy en constante aprendizaje, perfeccionando mis técnicas y explorando nuevas formas de dominación psicológica y física.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section className="mb-16 p-8 bg-gothic-black rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6 text-center">
              Más Allá de la Dominación
            </h3>
            
            <div className="text-lg leading-relaxed space-y-4 text-foreground">
              <p>
                Cuando no estoy en sesión, disfruto de actividades que alimentan mi mente y mi alma. Soy una apasionada de la <strong className="text-gothic-gold">literatura clásica</strong>, especialmente obras que exploran la psicología humana y las dinámicas de poder.
              </p>
              
              <p>
                La <strong className="text-gothic-gold">moda gótica y fetichista</strong> es una de mis grandes pasiones. Colecciono piezas únicas de latex, cuero y lencería, cada una cuidadosamente seleccionada no solo por su belleza, sino por el poder psicológico que transmite.
              </p>
              
              <p>
                También dedico tiempo al estudio de <strong className="text-gothic-gold">psicología</strong> y técnicas de dominación, asistiendo a eventos y talleres especializados para mantenerme actualizada en las mejores prácticas del BDSM profesional.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center p-8 bg-gradient-gold rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-black gothic-heading mb-4">
              ¿Listo para Conocer tu Lugar?
            </h3>
            <p className="text-lg text-gothic-black mb-6">
              Si has llegado hasta aquí, es porque algo en tu interior te llama a explorar la sumisión. 
              No esperes más para descubrir el placer de servir a una verdadera Dominatrix.
            </p>
            <div className="text-sm text-gothic-black/80">
              <p>Consulta mis servicios y contacta conmigo para comenzar tu viaje hacia la verdadera sumisión.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SobreMi