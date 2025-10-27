/* eslint-disable react/no-unescaped-entities */
export const metadata = { title: 'À propos — Laslo' };
export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">À propos de Laslo</h1>
      <p className="mt-4 text-muted-foreground text-lg">Laslo aide les architectes et designers d&#39;intérieur à organiser leurs références et inspirations.</p>
      
      <div className="mt-8 prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Pourquoi Laslo?</h2>
        
        <p className="mb-4">
          Nous sommes partis d'un constat simple : les architectes et décorateur.ice.s d'intérieur prescrivent quotidiennement des matériaux, du mobilier et des éléments décoratifs, mais aucun outil efficace n'est mis à leur disposition pour les aider dans cette mission.
        </p>
        
        <p className="mb-6">
          Les solutions actuelles sont chronophages et rébarbatives, et complexifient le travail des professionnels. Laslo propose une interface simple et intuitive pour créer et gérer sa propre bibliothèque de produits avec toutes leurs données.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Notre équipe</h2>
        
        <p className="mb-4">
          Laslo est né de la collaboration entre Delphine (architecte d'intérieur) et Éric (ingénieur logiciel).
        </p>
        
        <p className="mb-6">
          Ensemble ils ont conçu une solution facile d'utilisation et qui répond à une problématique concrète des professionnels du secteur. Ils sont accompagnés dans l'aventure par d'autres collaborateurs issus du milieu de l'architecture et de la décoration.
        </p>
      </div>
    </main>
  );
}
