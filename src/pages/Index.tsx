import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import mistressPortrait from "@/assets/mistress-portrait.jpg"
import gothicLogo from "@/assets/gothic-logo.png"

const Index = () => {
  // El componente AgeWarning ahora maneja su propia lógica de visibilidad
  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header with Logo */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Main Portrait */}
              <div className="w-full md:w-1/2">
                <img 
                  src={mistressPortrait} 
                  alt="Mistress Johanna - Dominatrix Profesional Madrid"
                  className="h-80 w-auto object-cover rounded-lg gothic-border shadow-2xl mx-auto"
                />
              </div>
              
              {/* Logo and Title */}
              <div className="w-full md:w-1/2 text-center">
                <img 
                  src={gothicLogo} 
                  alt="Mistress Johanna Logo"
                  className="h-32 w-auto mx-auto mb-4"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gothic-gold gothic-heading mb-2">
                  MISTRESS JOHANNA
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Dominatrix Profesional
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div className="px-8 py-12 max-w-4xl mx-auto text-center">
          <section id="inicio" className="mb-12">
            <div className="prose prose-invert max-w-none space-y-6 mx-auto">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-8">
                Inicio
              </h2>
              
              <div className="text-lg leading-relaxed space-y-6 text-foreground max-w-3xl mx-auto">
                <p className="text-xl font-semibold text-gothic-gold">
                  Femdom, esa simple palabra resume a la perfección mi manera de ver no solamente mis sesiones, sino además mi vida en general. La mayoría de los que estéis leyendo estos párrafos, sabéis de lo que hablo, pero quizás haya algún despistado que no tenga muy claro este concepto.
                </p>
                
                <p>
                  Para mí, la mujer es por naturaleza superior al hombre, aunque físicamente el hombre posea mayor fuerza, toda mujer que sepa usar su belleza, manejará al hombre, y por lo tanto será también la dueña de la fuerza del varón. A lo largo de la historia tenemos múltiples casos, en que el hombre, seducido por los encantos de una mujer, se ha convertido en su más fiel servidor. Sin darse cuenta, acaba realizando cualquier acto para complacer a su amada.
                </p>
                
                <p>
                  El poder que tenemos las mujeres que sabemos usar las cualidades que la naturaleza nos dio, es enorme. En el mundo que vivimos, como en casi cualquier apartado de la vida, no todo el mundo piensa así. Por eso, soy muy estricta en elegir y seleccionar a mis esclavos o sumisos. Al igual que mi naturaleza es totalmente Dominante, exijo que mis servidores tengan un alma sumisa, y deseosa de complacerme.
                </p>
                
                <p>
                  Puedo aceptar que sean inexpertos, pero siempre, con respeto. Has de saber, que si entras en mis Dominios, lo haces para someterte a mi voluntad, y así, a su vez, tener el placer de postrarte a mis pies.
                </p>
                
                <p className="text-xl font-bold text-gothic-gold text-center py-6 border-t border-b border-gothic-gold">
                  Bienvenido al modo de vida Femdom, bienvenido al mundo de Mistress Johanna.
                </p>
              </div>
            </div>
          </section>

          {/* Keywords Section */}
          <section className="mb-12 p-6 bg-gothic-gray rounded-lg border border-gothic-gold text-center">
            <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-4">
              Especialidades
            </h3>
            <div className="text-sm text-muted-foreground space-y-2 max-w-3xl mx-auto">
              <p>
                <strong className="text-gothic-gold">BDSM SPAIN, BDSM MADRID, FemDom, MISTRESS JOHANNA MADRID, BDSM, DOMINATRIX, DOMINACIÓN,</strong> Dominación Madrid, Dominación Spain, Romanian goddesses, SM, OWK, LATEX, CUERO, AMA, Ama en Madrid, DOMINA, Mistress, Mistress en Madrid, Tacones Altos, FINDOME, FINDOMME, DUNGEON, FETISH, FETICHISMO, RUBBER, Ama Cruel, Traveling, Travel Domme, Sesiones online, Skype, Mazmorra propia, Gabinete BDSM, WhatsApp Session, Online Domination, Dungeon, Sumisión, esclavo, Domination.
              </p>
            </div>
          </section>

          {/* Location Section */}
          <section className="mb-12 p-6 bg-gothic-black rounded-lg border border-gothic-gold text-center">
            <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-4">
              Ubicación
            </h3>
            <p className="text-lg text-foreground mb-4">
              <strong className="text-gothic-gold">Mazmorra ubicada en la Sierra de Madrid.</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Realizo sesiones de Dominación en toda España: A Coruña, Albacete, Alicante, Almería, Asturias, Ávila, Badajoz, Barcelona, Burgos, Cáceres, Cádiz, Cantabria, Castellón, Ciudad Real, Córdoba, Cuenca, Girona, Granada, Guadalajara, Guipúzcoa, Huelva, Huesca, Ibiza, Jaén, La Rioja, Las Palmas, León, Lleida, Lugo, Madrid, Málaga, Mallorca, Menorca, Murcia, Navarra, Ourense, Pontevedra, Salamanca, Tenerife, Segovia, Sevilla, Soria, Tarragona, Teruel, Toledo, Valencia, Valladolid, Vizcaya, Zamora, Zaragoza.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Index