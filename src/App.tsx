import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check, RefreshCcw } from "lucide-react";
import { useRef } from "react";

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#1f1f1f] text-white selection:bg-white selection:text-black">
      {/* Hero Section Container */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background - Now restricted to this section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 scale-105"
          >
            <source src="/Neon_moon_pulsing_with_smoke_7058c1eced.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f]/60 via-transparent to-[#1f1f1f]" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
          <div className="flex items-center gap-2">
            <img src="/Moonum_Logo.png" alt="Moonum Logo" className="h-8 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Teenused</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Portfoolio</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Meist</a>
          </div>

          <button className="px-7 py-3 text-white rounded-full text-xs font-semibold animate-border-glow transition-all">
            Kontakt
          </button>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-100 pb-10 h-full flex flex-col justify-between min-h-screen relative z-10">

          {/* Top Section: H1 & Button */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-4xl leading-[1.1] tracking-tighter">
                Kaasahaaravate ja praktiliste veebilehtede tegemine: muudame sinu lennukad ideed reaalsuseks.
              </h1>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all group"
            >
              Alusta projekti
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">

            {/* Bottom Left: Agency Tagline/Mission */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-sm hidden md:block"
            >

            </motion.div>

            {/* Bottom Right: H2 Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full md:max-w-md"
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-3xl space-y-6">
                <h2 className="text-xs md:text-sm leading-relaxed font-light opacity-90">
                  Oleme sinu strateegiline partner veebiarenduse, disaini ja digiturunduse valdkonnas. Loome lahendusi, mis kõnetavad kliente ja toovad tulemusi.
                </h2>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-widest font-semibold opacity-50">Meie teenused</span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Teenused & Hinnakiri Section */}
      <section className="relative min-h-[120vh] pt-40 pb-32 px-6 overflow-hidden bg-[#1f1f1f]">
        {/* Background Heading */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 0.07, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] font-bold uppercase tracking-[-0.05em] whitespace-nowrap leading-none"
          >
            Teenused
          </motion.h2>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
            {/* Pricing Card 1 */}
            <PricingCard
              title="Portfoolio"
              price="700"
              description="Ideaalne loovisikutele ja väikeettevõtetele enda esitlemiseks."
              features={[
                "Kuni 5 alamlehte",
                "Mobiilisõbralik disain",
                "SEO algseadistus",
                "Kontaktvorm",
                "1 kuu tasuta haldust"
              ]}
              delay={0.1}
            />

            {/* Pricing Card 2 (Featured) */}
            <PricingCard
              title="AI-Võimekus"
              price="1900"
              description="Nutikas veebilahendus, mis kasutab AI algoritme suhtluseks."
              features={[
                "AI-vestlusrobot",
                "Dünaamiline sisu",
                "Kasutaja analüütika",
                "Eriotstarbeline arendus",
                "3 kuud tasuta haldust"
              ]}
              delay={0.3}
              isFeatured={true}
            />

            {/* Pricing Card 3 */}
            <PricingCard
              title="E-pood"
              price="1300"
              description="Täismõõtmeline e-kaubanduse platvorm Sinu ärile."
              features={[
                "Piiramatu arv tooteid",
                "Makselahenduste liidestus",
                "Laohalduse süsteem",
                "Klientide haldus",
                "Kiire tarne liidestus"
              ]}
              delay={0.5}
            />
          </div>
        </div>

        {/* Purple/Pink Glow Effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#9000ff]/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-[#ff00ff]/10 blur-[100px] pointer-events-none rounded-full" />
      </section>

      {/* Meie tööloogika Section */}
      <WorkflowSection />

      {/* Subtle Background Grain */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

function WorkflowSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-40 px-6 bg-[#1f1f1f] text-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-40 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#9000ff] text-[10px] uppercase tracking-[0.3em] font-bold mb-4"
        >
          Samm-sammuline lähenemine
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold font-heading"
        >
          Kuidas näeb välja meie protsess?
        </motion.h2>
      </div>

      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[400px] bottom-[400px] w-px bg-white/5 z-0 hidden md:block">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full bg-gradient-to-b from-[#9000ff] to-[#ff00ff]"
        />
      </div>

      <div className="container mx-auto space-y-32 md:space-y-64 relative z-10">
        <WorkflowStep
          number="1"
          title="Liitu meiega"
          description="Vali endale sobiv pakett ning alustame koostööd koheselt läbi meie mugava platvormi."
          illustration={<DashboardMockup />}
          isLeft={true}
        />
        <WorkflowStep
          number="2"
          title="Esita oma soov"
          description="Pane kirja kõik oma lennukad ideed – olgu selleks veebidisain, arendus või turundusstrateegia."
          illustration={<TaskMockup />}
          isLeft={false}
        />
        <WorkflowStep
          number="3"
          title="Sinu uhiuus koduleht"
          description="Meie tiim asub tööle ning esimesed tulemused jõuavad sinuni tavaliselt juba 48 tunni jooksul."
          illustration={<PreviewMockup />}
          isLeft={true}
        />
        <WorkflowStep
          number="4"
          title="Lansseerimine ja tugi"
          description="Lihvime viimased detailid ning toome sinu projekti turule, tagades pideva toe ja hoolduse."
          illustration={<LaunchMockup />}
          isLeft={false}
        />
      </div>

      {/* Footer Revision Section */}
      <div className="mt-64 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6 px-4">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40">
          <RefreshCcw className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold">Täiuslikkus läbi muudatuste</h3>
        <p className="text-sm opacity-40 leading-relaxed">
          Pakume piiramatult korrektuure, kuni oled lõpptulemusega 100% rahul. See on meie garantii sinu ideede täitumisele.
        </p>
      </div>
    </section>
  );
}

function WorkflowStep({ number, title, description, illustration, isLeft }: {
  number: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  isLeft: boolean;
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-4 text-center md:text-left"
      >
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-base opacity-40 leading-relaxed max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </motion.div>

      {/* Number Node */}
      <div className="relative z-20 shrink-0">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#9000ff] to-[#ff00ff] flex items-center justify-center text-xl md:text-2xl font-bold shadow-[0_0_40px_rgba(144,0,255,0.4)]">
          {number}
        </div>
      </div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        {illustration}
      </motion.div>
    </div>
  );
}

// Mockup Components
function DashboardMockup() {
  return (
    <div className="aspect-video bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
      </div>
      <div className="w-1/3 h-4 bg-white/10 rounded" />
      <div className="grid grid-cols-2 gap-3 flex-grow">
        <div className="bg-white/5 rounded-xl animate-pulse" />
        <div className="bg-white/5 rounded-xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
    </div>
  );
}

function TaskMockup() {
  return (
    <div className="aspect-video bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative">
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border border-white/5 ${i === 1 ? 'bg-white/5 translate-x-2 transition-transform' : ''}`}>
            <div className={`w-4 h-4 rounded border border-white/20 ${i === 1 ? 'bg-purple-500 border-none flex items-center justify-center' : ''}`}>
              {i === 1 && <Check className="w-3 h-3 text-white" />}
            </div>
            <div className={`h-2 bg-white/10 rounded w-${i === 1 ? '2/3' : i === 2 ? '1/2' : '3/4'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewMockup() {
  return (
    <div className="aspect-video bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="h-3 bg-white/10 rounded w-1/4" />
      </div>
      <div className="mt-12 p-6 flex flex-col gap-6">
        <div className="h-10 w-3/4 bg-white/10 rounded-lg mx-auto" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => <div key={i} className="aspect-square bg-white/5 rounded-lg" />)}
        </div>
      </div>
    </div>
  );
}

function LaunchMockup() {
  return (
    <div className="aspect-video bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-purple-500/20 rounded-full"
        />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#9000ff]/20 to-[#ff00ff]/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
          <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, delay, isFeatured = false }: {
  title: string;
  price: string;
  description: string;
  features: string[];
  delay: number;
  isFeatured?: boolean;
}) {
  return (
    <div className="relative group h-full">
      {/* Outer Glow Effect (Behind the card) */}
      <div className="absolute -inset-8 bg-[#9000ff]/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -20, transition: { duration: 0.3 } }}
        className={`relative z-10 h-full flex flex-col p-8 rounded-[40px] border border-white/10 backdrop-blur-3xl transition-all duration-500 ${isFeatured ? 'bg-white/[0.08] border-white/30' : 'bg-white/[0.03] hover:bg-white/[0.05]'
          }`}
      >
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#9000ff]/20 to-transparent rounded-[40px] pointer-events-none" />
        )}

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-xs opacity-50 mb-8 leading-relaxed">{description}</p>

          <div className="mb-10">
            <span className="text-4xl font-bold">€{price}</span>
            <span className="text-sm opacity-40 ml-2">alates</span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] opacity-70">
                <Check className="w-4 h-4 mt-0.5 text-[#9000ff]" />
                {feature}
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-3xl text-sm font-bold transition-all ${isFeatured
            ? 'bg-white text-black hover:bg-opacity-90'
            : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
            Telli Teenus
          </button>
        </div>
      </motion.div>
    </div>
  );
}
