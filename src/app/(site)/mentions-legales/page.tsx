export const metadata = { title: 'Mentions légales — Biblo' };
export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Mentions légales</h1>
     
      <div className="mt-8 prose prose-lg max-w-none">
        <p className="mb-4">
          Le site <strong>biblo.app</strong> est édité et géré par l'entreprise Biblo
        </p>
        
        <div className="space-y-3">
          <p><strong>Adresse :</strong> 179 bd Voltaire 75011 Paris</p>
          <p><strong>Mail :</strong> <a href="mailto:hello@biblo.app" className="text-blue-600 hover:underline">hello@biblo.app</a></p>
          <p><strong>Directrice de la publication :</strong> Delphine David</p>
          <p><strong>Hébergeur :</strong> GANDI SAS - 63-65 boulevard Masséna Paris 75013 FRANCE</p>
        </div>
      </div>
    </main>
  );
}
