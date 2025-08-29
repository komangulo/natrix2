import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { Card } from "@/components/ui/card"

const DominacionDistancia = () => {
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
                  DOMINACIÓN A DISTANCIA
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Control total sin límites geográficos
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto text-center">
          <Card className="p-8 bg-gothic-black border-gothic-gold">
            <div className="prose prose-invert max-w-none space-y-8">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading">
                Sesiones Online
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Los tiempos cambian a pasos agigantados, y nos adaptamos a nuevas tecnologías constantemente.
                  Internet facilita el contacto con personas que se encuentran lejos de nosotros, con lo cual, ya es posible tener una sesión de BDSM, con alguien que está en otra ciudad española, o a miles de kilómetros.
                </p>

                <p>
                  Yo hace ya bastante tiempo que las realizo, pero aún hay muchos esclavos o sumisos que me preguntan en qué consisten o cómo se llevan a cabo.
                </p>

                <p>
                  Si bien es cierto que hay unas limitaciones evidentes, ya que no estás físicamente en el mismo espacio que el sumiso, y por lo tanto hay sentidos que no pueden participar, el tacto y el olfato en una sesión online no tienen relevancia alguna, no debéis olvidar que el sentido dominante es la vista, y ese está totalmente presente.
                </p>

                <p>
                  Pero aún iría más allá, aún teniendo claro que el físico juega un papel importante, para mí, es la mente el factor que más interviene en cualquier relación, y por supuesto aún más en una relación Ama - esclavo.
                </p>

                <p>
                  Tengo esclavos con los que mantengo una relación únicamente online, y no en todos los casos es porque residen muy lejos, sino porque disfrutan más de esta manera. Al igual que hay otros que prefieren las sesiones presenciales y se desplazan cientos de kilómetros para estar a mis pies.
                </p>

                <p className="text-xl italic text-gothic-gold font-medium">
                  "Permitidme la vulgaridad, pero yo siempre me he considerado una folladora de mentes, y es lo que me excita de verdad, controlar la mente del esclavo, saber que está en mi poder, y que su voluntad me pertenece, y para conseguirlo, no necesito que estemos cara a cara."
                </p>

                <p>
                  Tener una sesión online, o ser sometido a distancia regularmente, es una experiencia única, y como tal, has de vivirla en tu propia piel, nadie podrá decirte cómo te sentirás.
                </p>

                <p className="text-xl font-semibold text-gothic-gold">
                  No pongas fronteras a tus deseos y fantasías, no te reprimas y rompe cualquier tabú mental que tengas, ese es el camino a la felicidad, y en la época en la que vivimos, la distancia ya no es una excusa.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gothic-gold">
                <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-6">
                  ¿Listo para comenzar tu experiencia?
                </h3>
                <p className="text-lg">
                  Contáctame para más información sobre mis sesiones de dominación a distancia y descubre una nueva forma de sumisión.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default DominacionDistancia
