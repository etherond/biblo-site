import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main id="top">
      {/* Big Title */}
      <section className="pt-20 px-4 md:pt-14">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-center">La solution pour les architectes et designers d&#39;intérieur</p>
          <p className="text-sm md:text-base mt-4 block w-fit mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Disponible fin 2025
        </p>
        </div>
      </section>
      {/* Hero */}
      <section className="pt-12 md:pt-14 pb-20 md:pb-24 px-4">
        <div className="mx-auto w-full max-w-[1120px] px-4 grid items-center gap-8 md:gap-10 md:grid-cols-2">
          <div>
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
            <div className="mt-5 flex items-center gap-3 justify-center md:justify-start">
              <Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 font-semibold mt-4 mb-12">Obtenir mon accès</Link>
            </div>
          </div>
          <div>
            <Image alt="Aperçu de Laslo" src="/img/hero.avif" width={1200} height={800} priority className="w-full h-auto rounded-xl border border-zinc-200 shadow-[0_12px_30px_rgba(13,15,18,0.06)]" />
          </div>
        </div>
      </section>

      {/* Before (Pains) */}
      <section className="py-16 md:py-20 bg-[#f3f4f6]" id="avant">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-center">Vous perdez un temps fou à organiser vos projets ?</h2>
          <ul className="mt-10 max-w-[900px] mx-auto space-y-4">
            {[
              "Une gestion de données de plus en plus complexe",
              "Des visuels éparpillés dans différents dossiers",
              "Des informations produits noyées dans des tableaux Excel sans fin",
              "Des moodboards et présentations clients qui prennent un temps précieux",
            ].map((text) => (
            <li key={text} className="flex items-start justify-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mt-1 flex-none" width="20" height="20" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
                <span className="text-[1.25rem] leading-snug text-center text-zinc-900">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 font-semibold">Passez à une nouvelle façon de travailler</Link>
          </div>
        </div>
      </section>

      {/* After */}
      <section className="py-16 md:py-20" id="apres">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Imaginez vos projets fluides, organisés et inspirants.</h2>
          <div className="grid gap-3 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tout à portée de clic", desc: "Chaque inspiration et référence produit à portée de clic, sans stress.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><circle cx="11" cy="11" r="7" strokeWidth="1.8" stroke="#0d0f12"/><path d="M20 20l-4-4" strokeWidth="1.8" strokeLinecap="round" stroke="#0d0f12"/></svg>
              )},
              { title: "Moodboards élégants", desc: "Des moodboards élégants créés en quelques instants pour communiquer simplement vos idées à vos clients.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><rect x="3" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#0d0f12"/><rect x="14" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#0d0f12"/><rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#0d0f12"/><rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#0d0f12"/></svg>
              )},
              { title: "Image professionnelle", desc: "Une image claire, organisée et moderne qui valorise votre travail de professionnel·le.", icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-[72px] h-[72px] mx-auto"><path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4Z" strokeWidth="1.8" stroke="#0d0f12"/><path d="M9.5 12.5l1.8 1.8 3.2-3.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#0d0f12"/></svg>
              )},
            ].map(({ title, desc, icon }) => (
              <div key={title} className="text-center rounded-xl bg-transparent p-4 md:p-5">
                <div className="w-[72px] h-[72px] mx-auto mb-2">{icon}</div>
                <div className="text-xl md:text-2xl font-semibold">{title}</div>
                <p className="text-zinc-700 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-zinc-600 text-[1.25em]">Laslo vous offre un espace pensé de bout en bout pour les architectes et décorateur·ice·s d’intérieur.</p>
        </div>
      </section>

      {/* Product */}
      <section className="py-16 md:py-20 bg-[#f3f4f6]" id="produit">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Laslo — La plateforme tout-en-un</h2>
          <p className="mt-2 mb-8 text-center text-zinc-600 text-[1.25em]">Centralisez vos références produits, vos inspirations et vos moodboards, pour un flux de travail enfin simple et efficace.</p>
          <div className="mt-12 grid gap-12 md:gap-16">
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
      <section className="py-18 md:py-24">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <blockquote className="max-w-[900px] mx-auto border-l-4 border-black bg-white rounded-r-xl p-5 italic text-[#0d0f12] font-serif text-xl">
            “J’ai créé Laslo après avoir vu des architectes et décorateurs passer plus de temps à organiser qu’à créer. Mon but : redonner du temps à votre créativité.”
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="pb-18 md:pb-24">
        <div className="mx-auto w-full max-w-[1120px] px-4">
          <h2 className="text-3xl md:text-4xl mb-8 font-semibold text-center">Rejoignez la communauté Laslo</h2>
          <ContactForm />
          <div className="mt-8 text-center">
            <p className="text-zinc-700">Suivez-nous ou contactez-nous sur Instagram</p>
            <a
              href="https://instagram.com/laslo_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-black hover:underline"
              aria-label="Notre compte Instagram @laslo_app"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path fill="currentColor" d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6.1-8.4a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 1.8c-2.6 0-2.9 0-3.9.06-1 .06-1.7.22-2.3.47-.6.24-1.1.57-1.6 1.03-.46.46-.8 1-.99 1.6-.26.6-.41 1.3-.47 2.3C2.7 8.2 2.7 8.5 2.7 11.1c0 2.6 0 2.9.06 3.9.06 1 .22 1.7.47 2.3.24.6.57 1.1 1.03 1.6.46.46 1 .8 1.6.99.6.26 1.3.41 2.3.47 1 .06 1.3.06 3.9.06 2.6 0 2.9 0 3.9-.06 1-.06 1.7-.22 2.3-.47.6-.24 1.1-.57 1.6-1.03.46-.46.8-1 .99-1.6.26-.6.41-1.3.47-2.3.06-1 .06-1.3.06-3.9 0-2.6 0-2.9-.06-3.9-.06-1-.22-1.7-.47-2.3a4.54 4.54 0 0 0-.99-1.6 4.54 4.54 0 0 0-1.6-.99c-.6-.26-1.3-.41-2.3-.47-1-.06-1.3-.06-3.9-.06Zm0 1.8c2.5 0 2.8 0 3.8.06.9.05 1.4.2 1.8.33.45.17.77.36 1.1.68.32.32.5.64.68 1.1.13.38.28.9.33 1.8.06 1 .06 1.3.06 3.8 0 2.5 0 2.8-.06 3.8-.05.9-.2 1.4-.33 1.8-.17.45-.36.77-.68 1.1-.32.32-.64.5-1.1.68-.38.13-.9.28-1.8.33-1 .06-1.3.06-3.8.06-2.5 0-2.8 0-3.8-.06-.9-.05-1.4-.2-1.8-.33-.45-.17-.77-.36-1.1-.68-.32-.32-.5-.64-.68-1.1-.13-.38-.28-.9-.33-1.8C4.8 13.9 4.8 13.6 4.8 11.1c0-2.5 0-2.8.06-3.8.05-.9.2-1.4.33-1.8.17-.45.36-.77.68-1.1.32-.32.64-.5 1.1-.68.38-.13.9-.28 1.8-.33 1-.06 1.3-.06 3.8-.06Z"/>
              </svg>
              <span>@laslo_app</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
