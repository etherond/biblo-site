import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1120px] px-4 grid items-center gap-8 md:gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">La solution pour les architectes et designers d'intérieur</h1>
            <p className="mt-3 text-zinc-700 text-lg md:text-xl max-w-prose">Dites adieu aux tableaux Excel interminables, aux fichiers mal rangés, et aux moodboards chronophages.</p>
            <ul className="mt-4 space-y-2">
              {[
                "Créez facilement votre bibliothèque de mobilier et matériaux",
                "Gérez efficacement vos données d’un projet à l’autre",
                "Partagez rapidement vos propositions avec vos clients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-zinc-900">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-1"><circle cx="12" cy="12" r="10" stroke="#3D82F6" strokeWidth="2"/><path d="M7 12l3 3 7-7" stroke="#3D82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 font-semibold">Obtenir mon accès</Link>
            </div>
          </div>
          <div>
            <Image alt="Aperçu de Biblo" src="/img/hero.avif" width={1200} height={800} priority className="w-full h-auto rounded-xl border border-zinc-200 shadow-[0_12px_30px_rgba(13,15,18,0.06)]" />
          </div>
        </div>
      </section>

      {/* Before (Pains) */}
      <section className="py-12 md:py-14 bg-[#f3f4f6]" id="avant">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Vous perdez un temps fou à organiser vos projets ?</h2>
          <div className="grid gap-2 mt-12 sm:grid-cols-2 lg:grid-cols-2 justify-items-center max-w-[920px] mx-auto">
            {[
              { icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 stroke-zinc-400"><path d="M4 6h16M4 12h10M4 18h6" strokeWidth="1.8" strokeLinecap="round"/></svg>
              ), text: "Une gestion de données de plus en plus complexe" },
              { icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 stroke-zinc-400"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" strokeWidth="1.8"/></svg>
              ), text: "Des visuels éparpillés dans différents dossiers" },
              { icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 stroke-zinc-400"><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.8"/><path d="M3 8h18M7 12h3M7 16h3M13 12h4M13 16h4" strokeWidth="1.8"/></svg>
              ), text: "Des informations produits noyées dans des tableaux Excel sans fin" },
              { icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 stroke-zinc-400"><circle cx="12" cy="13" r="8" strokeWidth="1.8"/><path d="M12 13V8m0-4v2M12 13l4 2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ), text: "Des moodboards et présentations clients qui prennent un temps précieux" },
            ].map(({ icon, text }) => (
              <div key={text} className="text-center grid gap-2 p-4 rounded-xl border border-zinc-200 bg-white place-items-center max-w-[420px] w-full">
                <div>{icon}</div>
                <p className="text-[1.125rem] leading-snug text-zinc-900 m-0">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 font-semibold">Passez à une nouvelle façon de travailler</Link>
          </div>
        </div>
      </section>

      {/* After */}
      <section className="py-12" id="apres">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Imaginez vos projets fluides, organisés et inspirants.</h2>
          <div className="grid gap-3 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tout à portée de clic", desc: "Chaque inspiration et référence produit à portée de clic, sans stress.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><circle cx="11" cy="11" r="7" strokeWidth="1.8" stroke="#3D82F6"/><path d="M20 20l-4-4" strokeWidth="1.8" strokeLinecap="round" stroke="#3D82F6"/></svg>
              )},
              { title: "Moodboards élégants", desc: "Des moodboards élégants créés en quelques instants pour communiquer simplement vos idées à vos clients.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><rect x="3" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#3D82F6"/><rect x="14" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#3D82F6"/><rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#3D82F6"/><rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#3D82F6"/></svg>
              )},
              { title: "Image professionnelle", desc: "Une image claire, organisée et moderne qui valorise votre travail de professionnel.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4Z" strokeWidth="1.8" stroke="#3D82F6"/><path d="M9.5 12.5l1.8 1.8 3.2-3.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#3D82F6"/></svg>
              )},
            ].map(({ title, desc, icon }) => (
              <div key={title} className="text-center rounded-xl border border-zinc-200 bg-transparent p-4 md:p-5">
                <div className="w-[72px] h-[72px] mx-auto mb-2">{icon}</div>
                <div className="text-xl md:text-2xl font-semibold">{title}</div>
                <p className="text-zinc-700 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-zinc-600 text-[1.25em]">Biblo vous offre un espace pensé de bout en bout pour les architectes et décorateur·ice·s d’intérieur.</p>
        </div>
      </section>

      {/* Product */}
      <section className="py-12 bg-[#f3f4f6]" id="produit">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Biblo — La plateforme tout-en-un</h2>
          <p className="mt-2 mb-8 text-center text-zinc-600 text-[1.25em]">Centralisez vos références produits, vos inspirations et vos moodboards, pour un flux de travail enfin simple et efficace.</p>
          <div className="mt-12 grid gap-6">
            {[{
              title: "Collectez rapidement vos produits",
              desc: "Sélectionnez rapidement vos objets grâce au clipper web qui capture intelligemment les informations des produits trouvés sur Internet. En quelques clics, enregistrez l'objet ou le matériau dans votre bibliothèque avec toutes ses données : images, prix, dimensions et caractéristiques.",
              img: "/img/product.avif"
            }, {
              title: "Gérez efficacement votre bibliothèque",
              desc: "Constituez votre base d'objets, projet après projet. Retrouvez-les facilement grâce aux filtres. Dupliquez vos projets et moodboards simplement, sans perdre les données liées aux produits.",
              img: "/img/library.avif"
            }, {
              title: "Partagez facilement vos idées",
              desc: "Réalisez rapidement vos moodboards grâce à nos planches intelligentes reliées aux informations des produits et des projets. Partagez vos propositions avec vos clients et recueillez leurs impressions via commentaires, réactions et tags de suivi.",
              img: "/img/moodboard.avif"
            }].map(({ title, desc, img }, idx) => (
              <div key={title} className="grid gap-4 md:grid-cols-2 items-center">
                <div className={`order-2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'} max-w-[540px]`}> 
                  <div className="text-xl md:text-2xl font-semibold">{title}</div>
                  <p className="text-zinc-700 mt-2">{desc}</p>
                </div>
                <div className={`order-1 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'} justify-self-center`}>
                  <Image src={img} alt={title} width={1200} height={800} className="w-full h-auto max-w-[500px] rounded-xl border border-zinc-200 shadow-[0_12px_30px_rgba(13,15,18,0.06)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <blockquote className="max-w-[900px] mx-auto border-l-4 border-black bg-white rounded-r-xl p-5 italic text-[#0d0f12] font-serif text-xl">
            “J’ai créé Biblo après avoir vu des architectes et décorateurs passer plus de temps à organiser qu’à créer. Mon but : redonner du temps à votre créativité.”
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="pt-8 pb-24">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Rejoignez la communauté Biblo</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr,auto] bg-white border border-zinc-200 rounded-xl p-6 max-w-[560px] mx-auto min-h-[120px]">
            <input id="email" type="email" placeholder="Votre email" className="h-14 px-4 rounded-lg border border-zinc-200 text-lg outline-none focus:border-[#2f6df6] focus:ring-4 focus:ring-[#2f6df6]/20" />
            <button className="h-14 px-5 rounded-full bg-black text-white font-semibold">Obtenir mon accès</button>
          </div>
          <p id="form-message" className="mt-2 text-center text-zinc-500"></p>
        </div>
      </section>
    </main>
  );
}
