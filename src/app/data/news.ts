export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'O Show de Zozo já disponível na Steam!',
    excerpt: 'Nosso mais novo título de horror e puzzles em primeira pessoa acaba de ser lançado na Steam. Prepare-se para o show mais aterrorizante de sua vida.',
    content: 'O Show de Zozo está oficialmente disponível na Steam! Este jogo de horror e puzzles em primeira pessoa vai desafiar seus nervos e testar sua capacidade de resolver enigmas sob pressão.',
    date: '21 de fevereiro de 2025',
    category: 'Lançamento',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Atualização 1.5 de O Medo Desconhecido',
    excerpt: 'Nova atualização traz melhorias de desempenho, correção de bugs e conteúdo adicional para os jogadores.',
    content: 'A atualização 1.5 de O Medo Desconhecido já está disponível! Esta atualização traz melhorias significativas de desempenho, correções de bugs reportados pela comunidade e novo conteúdo exclusivo.',
    date: '15 de janeiro de 2025',
    category: 'Atualização',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Feu Studios anuncia novo projeto',
    excerpt: 'Estamos trabalhando em algo especial. Fique atento para mais novidades em breve.',
    content: 'A Feu Studios está desenvolvendo um novo projeto que promete revolucionar a experiência de horror nos games. Mais detalhes serão revelados em breve. Acompanhe nossas redes sociais!',
    date: '10 de janeiro de 2025',
    category: 'Anúncio',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Agradecimento à comunidade',
    excerpt: 'Obrigado pelo apoio incrível que recebemos. Vocês são essenciais para o nosso sucesso.',
    content: 'Queremos agradecer a todos os jogadores que apoiaram nossos títulos. O feedback de vocês é fundamental para continuarmos criando experiências memoráveis. Muito obrigado!',
    date: '5 de janeiro de 2025',
    category: 'Comunidade',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop'
  }
];