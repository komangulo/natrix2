import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ListaDeseos() {
  const [showCrypto, setShowCrypto] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gothic-gold gothic-heading mb-4">
                  LISTA DE DESEOS
                </h1>
                <p className="text-xl text-muted-foreground italic mb-8">
                  Haz que mis deseos se hagan realidad
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              { name: 'Vuelo Europa', price: '€500+', description: 'Para visitar ciudades europeas' },
              { name: 'Airbnb Luxe', price: '€300+', description: 'Alojamiento de lujo' },
              { name: 'Vuelo Worldwide', price: '€1000+', description: 'Destinos internacionales' },
              { name: 'Cuidados', price: '€200+', description: 'Tratamientos de belleza y bienestar' },
              { name: 'Criptos', price: 'Variable', description: 'Criptomonedas (BTC, ETH, etc.)', colSpan: 'lg:col-span-2' },
            ].map((item, index) => (
              <Card key={index} className={`bg-gothic-black border-gothic-gold p-6 hover:shadow-gold transition-shadow ${item.colSpan || ''}`}>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gothic-gold">{item.name}</h3>
                  {item.price && <span className="bg-gold-800/30 text-gold-400 px-3 py-1 rounded-full text-sm">{item.price}</span>}
                </div>
                <p className="text-muted-foreground mt-2 text-left">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-gothic-black border-gothic-gold p-8">
            <h2 className="text-2xl font-bold text-gothic-gold gothic-heading mb-6">
              Instrucciones Importantes
            </h2>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p>
                Para recibir mi atención personalizada, es necesario realizar una <strong className="text-gothic-gold">aportación mínima</strong> a través de mi lista de deseos de Amazon.
              </p>
              
              <div className="border-l-4 border-gothic-gold pl-4 py-2 bg-gothic-gray/50">
                <p className="font-semibold">Por favor, ten en cuenta que:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Se requiere una aportación mínima para recibir mi atención personalizada.</li>
                  <li>Al realizar tu aportación, <strong className="text-gothic-gold">debes incluir en los comentarios del pedido</strong>:</li>
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>La hora exacta de la donación</li>
                    <li>La fecha de la donación</li>
                    <li>Tu nombre o seudónimo</li>
                  </ul>
                  <li>Sin esta información, no podré verificar tu donación.</li>
                </ul>
              </div>

              <p>
                Tu generosidad será recompensada con mi atención. Cuanto más generoso seas, más especial será tu recompensa.
              </p>
              
              <p className="mt-4">
                <strong>Una vez hagas el pedido en la lista de deseos, en el campo "Mensaje del regalo" añade tu correo para poder comunicarnos.</strong>
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-gothic-gold text-gothic-black hover:bg-gothic-gold/90 text-lg py-6 px-8">
                  <a 
                    href="https://www.amazon.es/hz/wishlist/ls/13LOQVJ4SF5CM?ref_=wl_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver mi lista de deseos en Amazon
                  </a>
                </Button>
                
                <div className="relative inline-block text-left">
                  <Button 
                    type="button" 
                    className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8"
                    onClick={() => setShowCrypto(!showCrypto)}
                  >
                    Donar con Cripto
                  </Button>
                  
                  {showCrypto && (
                    <div 
                      className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-gothic-black border border-gold-500 shadow-lg p-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="text-sm text-muted-foreground mb-2">Elige tu red preferida:</p>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground mb-2">Monedas aceptadas:</p>
                        
                        {/* Ethereum */}
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-white">Ethereum (ETH)</p>
                          <div className="flex items-center">
                            <input
                              type="text"
                              readOnly
                              value="0x2A21f3052A12CeB43c372B7d2BD6a098b0053554"
                              className="bg-gothic-gray text-xs p-2 rounded flex-1 font-mono text-amber-300"
                              onClick={(e) => e.currentTarget.select()}
                            />
                            <Button
                              size="sm"
                              variant="ghost"
                              className="ml-2 text-amber-300 hover:bg-gold-800/30"
                              onClick={() => {
                                navigator.clipboard.writeText('0x2A21f3052A12CeB43c372B7d2BD6a098b0053554');
                                // Optional: Add toast notification here
                              }}
                            >
                              Copiar
                            </Button>
                          </div>
                        </div>
                        
                        {/* BNB */}
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-white">BNB Chain (BNB)</p>
                          <div className="flex items-center">
                            <input
                              type="text"
                              readOnly
                              value="0x2A21f3052A12CeB43c372B7d2BD6a098b0053554"
                              className="bg-gothic-gray text-xs p-2 rounded flex-1 font-mono text-amber-300"
                              onClick={(e) => e.currentTarget.select()}
                            />
                            <Button
                              size="sm"
                              variant="ghost"
                              className="ml-2 text-amber-300 hover:bg-gold-800/30"
                              onClick={() => {
                                navigator.clipboard.writeText('0x2A21f3052A12CeB43c372B7d2BD6a098b0053554');
                                // Optional: Add toast notification here
                              }}
                            >
                              Copiar
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground pt-2">
                          * Asegúrate de enviar solo ETH o BNB a sus respectivas direcciones.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (max-width: 640px) {
                    .crypto-dropdown {
                      left: 50%;
                      transform: translateX(-50%);
                    }
                  }
                `
              }} />

              <div className="mt-8 pt-6 border-t border-gothic-gold/30">
                <p className="text-sm text-muted-foreground italic">
                  * Al hacer clic en el botón, serás redirigido a Amazon.es. Asegúrate de estar conectado con tu cuenta de Amazon para realizar la donación correctamente.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
