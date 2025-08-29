import { useEffect, useState } from "react"
import { GothicButton } from "./gothic-button"
import { Card } from "@/components/ui/card"

export function AgeWarning() {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    // Verificar si ya ha aceptado previamente
    const hasAccepted = localStorage.getItem('ageVerified') === 'true'
    setShowWarning(!hasAccepted)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true')
    setShowWarning(false)
  }

  if (!showWarning) return null
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 bg-gothic-black border-gothic-gold shadow-2xl">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6">
            ¡Atención!
          </h1>
          
          <div className="space-y-4 text-sm text-foreground">
            <p>
              Es una página web con contenido y escenas sado.
            </p>
            
            <p>
              Si eres menor de edad en tu país de residencia o dicho contenido está prohibido por la ley, te recomiendo que no continúes.
            </p>
            
            <p>
              Algunas imágenes pueden resultar ofensivas para algunas personas, si te consideras sensible a cierto contenido, no continúes.
            </p>
            
            <p>
              Si eres mayor de edad y aceptas las condiciones legales establecidas para páginas webs con contenido para adultos haz click en <strong className="text-gothic-gold">Entrar</strong>.
            </p>
            
            <p>
              En caso contrario te recomiendo que salgas inmediatamente de ésta página web presionando el botón de <strong className="text-primary">salir</strong>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GothicButton 
              variant="elegant" 
              onClick={handleAccept}
              className="flex-1 text-lg py-3"
            >
              Entrar
            </GothicButton>
            
            <GothicButton 
              variant="warning" 
              onClick={() => window.location.href = 'https://disney.com'}
              className="flex-1 text-lg py-3"
            >
              Salir
            </GothicButton>
          </div>
        </div>
      </Card>
    </div>
  )
}