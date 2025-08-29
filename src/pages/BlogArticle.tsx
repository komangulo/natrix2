import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';

// This would normally come from an API or data file
import { articles } from './Blog';

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id.toString() === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Artículo no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)] p-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-gothic-gold hover:bg-gothic-gold/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
        </Button>

        <article className="max-w-4xl mx-auto bg-gradient-to-br from-gothic-black/80 to-gothic-gray/50 p-8 rounded-xl border border-gothic-gold/20 shadow-2xl shadow-black/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMDEwMTAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 -z-10"></div>
          <div className="mb-10 relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-gothic-gold via-gothic-gold/50 to-transparent rounded-full"></div>
            <span className="text-sm text-gothic-gold">{article.category}</span>
            <h1 className="text-3xl font-bold text-foreground mt-2 mb-4">{article.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime} de lectura</span>
            </div>
          </div>

          <div 
            className="prose prose-invert max-w-none text-gothic-gray-200"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.1rem',
            }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;
