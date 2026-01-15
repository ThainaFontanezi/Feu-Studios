export interface News {
  id: number
  title: string
  description: string
  date: string
}

export const news: News[] = [
  {
    id: 1,
    title: "Novo jogo da franquia Zelda anunciado",
    description: "A Nintendo anunciou um novo jogo da franquia Zelda para o próximo ano.",
    date: "2025-03-10"
  },
  {
    id: 2,
    title: "PlayStation anuncia novo console",
    description: "A Sony revelou detalhes do seu próximo console de nova geração.",
    date: "2025-02-25"
  },
  {
    id: 3,
    title: "Minecraft recebe grande atualização",
    description: "A nova atualização do Minecraft traz novos biomas e criaturas.",
    date: "2025-01-30"
  }
]