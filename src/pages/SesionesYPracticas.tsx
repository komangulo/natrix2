import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"

const SesionesYPracticas = () => {

  const practicas = [
    "Castigo Corporal (Whipping, Spanking, Caning, Training etc.)",
    "Electro-play/Electro-torture",
    "CBT (Tortura Genital, Cinturón de Castidad CB)",
    "Tortura de pezones (Nipple torture)",
    "Tease and denial",
    "Strapon training",
    "Sissy training, Cross-dressing, Transformation",
    "Role play: Guardiana/prisionero, Enfermera/paciente, Profesora/alumno",
    "Perro, Pony boy, Pony Girl, play pig",
    "Disciplina inglesa",
    "Medical: Urethra fucking, Dilatación de la uretra, Catheterization, Sound",
    "Heavy medical play (Sondas, Agujas, Needle play etc.)",
    "Water sports (Lluvia dorada)",
    "Fetichismo (Foot/shoe/boots worship, Fetichismo de látex, de cuero, de guantes...)",
    "Humiliation (verbal y física)",
    "Cera caliente (Candle wax)",
    "Bastinado",
    "Branding (marcado a fuego con mi símbolo)",
    "Breath control (control de respiración)",
    "Reclusión",
    "Immobilization",
    "Mummification",
    "Pushing limits",
    "Face sitting",
    "Sensory deprivation",
    "Interrogation scenes",
    "Degradación verbal",
    "Mobiliario Humano",
    "Bondage",
    "Suspensión",
    "Trampling",
    "Secuestro",
    "Spitting",
    "Face slapping (Bofetadas)",
    "Bisexualidad forzada",
    "Sodomización"
  ]

  const limites = [
    "Mis prácticas y sesiones absolutamente NO incluyen sexo convencional",
    "No realizo sesiones con menores de edad o personas con impedimentos físicos o mentales",
    "No realizo sesiones con animales",
    "No realizo ninguna práctica que atente contra la salud y la integridad física o mental",
    "No scat, No adult baby, No pongo enemas",
    "No realizo lucha erótica"
  ]

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
                <h1 className="text-4xl md:text-5xl font-bold text-gothic-gold gothic-heading mb-4">
                  SESIONES Y PRÁCTICAS
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Descubre las experiencias que ofrezco
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto text-center">
          {/* Mis Sesiones Section */}
          <section className="mb-16 p-8 bg-gothic-gray rounded-lg border border-gothic-gold">
            <h2 className="text-4xl font-bold text-gothic-gold gothic-heading mb-8 text-center">
              MIS SESIONES
            </h2>
            
            <div className="prose prose-invert max-w-none text-lg leading-relaxed space-y-6 text-foreground">
              <p>
                Para mí, el <strong className="text-gothic-gold">BDSM es parte de mi vida</strong>, por lo que todas las sesiones que realizo son algo que disfruto y vivo con intensidad.
              </p>
              
              <p>
                Creo que por ambas partes ha de existir <strong className="text-gothic-gold">implicación total</strong>, para ello es indispensable sentir el instinto de Dominación o sumisión, eso es algo que no se aprende, se tiene o no.
              </p>
              
              <p>
                Lo que sí se aprende es la destreza en las distintas prácticas, saber interpretar las miradas y gestos del sumiso, saber hasta dónde puedes llegar en cada momento, dentro de los límites pactados, eso es <strong className="text-gothic-gold">Experiencia</strong>.
              </p>
              
              <p>
                Cuando entras en mis dominios, me gusta que al igual que yo, pierdas la noción del tiempo, sea un paréntesis en tu vida cotidiana, y que al pensar en ese tiempo que has pasado ante mí, desees con ahínco volverlo a repetir.
              </p>
              
              <p className="text-center text-xl font-bold text-gothic-gold">
                Todos somos distintos, por lo que mis sesiones también lo son.
              </p>
              
              <p className="text-center text-2xl font-bold text-gothic-gold border-t border-b border-gothic-gold py-4 mt-8">
                SSC - SEGURO, SANO, CONSENSUADO
              </p>
            </div>
          </section>

          {/* Mis Prácticas Section */}
          <section className="mb-16 p-8 bg-gothic-black rounded-lg border border-gothic-gold">
            <h2 className="text-4xl font-bold text-gothic-gold gothic-heading mb-8 text-center">
              MIS PRÁCTICAS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicas.map((practica, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gothic-gray rounded-lg border border-gothic-gold/30">
                  <div className="w-2 h-2 bg-gothic-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground leading-relaxed">{practica}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mis Límites Section */}
          <section className="mb-16 p-8 bg-red-950/20 rounded-lg border border-red-500/30">
            <h2 className="text-4xl font-bold text-red-400 gothic-heading mb-8 text-center">
              MIS LÍMITES
            </h2>
            
            <div className="space-y-4">
              {limites.map((limite, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-red-950/40 rounded-lg border border-red-500/20">
                  <div className="text-red-400 text-xl font-bold flex-shrink-0">✗</div>
                  <p className="text-red-100 leading-relaxed font-semibold">{limite}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center p-8 bg-gradient-gold rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-black gothic-heading mb-4">
              ¿Preparado para Experimentar la Verdadera Dominación?
            </h3>
            <p className="text-lg text-gothic-black mb-6">
              Cada sesión es única, adaptada a tus límites y deseos más profundos. 
              Contacta conmigo para discutir tu fantasía y convertirla en realidad.
            </p>
            <div className="text-sm text-gothic-black/80">
              <p>Recuerda: Seguro, Sano y Consensuado siempre.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SesionesYPracticas