# PasseioApp

PasseioApp é um projeto de estudo com foco em aprimorar habilidades em estilização com Tailwind CSS, uso de guards (autorização/rota protegida) e integração com serviços da Google Cloud. A ideia é servir como um sandbox para experimentar boas práticas em frontend (Angular), segurança de rotas e backend em nuvem.

---

## 🚀 Objetivo do Projeto

- Estudo e experimentação: Esse projeto não é necessariamente um produto final, mas uma base para aprender e testar tecnologias modernas.
- Design responsivo e estilizado: Aplicar o Tailwind CSS para criar uma interface limpa, moderna e responsiva.
- Segurança de rota: Implementar guards no Angular para controlar acesso a certas áreas da aplicação com base em autenticação ou estado do usuário.
- Backend na nuvem: Integrar com Google Cloud para armazenar dados, autenticar usuários ou acionar funções serverless, dependendo do escopo.
- Deploy e arquitetura escalável: Explorar como uma aplicação de estudo pode ser hospedada e escalada usando os serviços da Google Cloud.


## 🧰 Tecnologias Utilizadas

Aqui estão as principais tecnologias e ferramentas usadas no PasseioApp:

- Angular — Framework principal do frontend, para componentes, roteamento e lógica de interface.

- TypeScript — Para garantir tipagem estável e código mais robusto.

- Tailwind CSS — Biblioteca utilitária para estilização: permite escrever estilos de forma rápida, modular e responsiva. 
GeeksforGeeks

- Guards do Angular — Para proteger rotas, garantindo que apenas usuários autenticados ou autorizados possam acessar certas páginas.

- Ferramentas de build — Angular CLI para scaffolding, desenvolvimento e build da aplicação.
  

## ✅ Entendimento sobre os casos de Uso de Guards:

Os guards são usados para proteger rotas sensíveis ou restritas, como páginas de perfil, dashboard ou outras áreas que exigem autenticação. Exemplos de uso:

- AuthGuard: verifica se o usuário está autenticado antes de permitir o acesso.

- RoleGuard: verifica se o usuário tem um papel específico (admin, usuário comum) para acessar certas rotas.

- CanDeactivateGuard: previne que o usuário saia de um componente se houver mudanças não salvas (opcional).


## 📚 Referências e Recursos de Estudo:

- Curso "Angular 19 - Curso Completo do Iniciante ao Avançado (2025)” — para entender bem a integração entre essas camadas.
- Tutoriais sobre como usar Tailwind CSS em projetos modernos.
- Documentação do Google Cloud para implementar a autenticação.
- Exemplos de uso de Angular Guards na documentação oficial do Angular.

---


## 🛠️ Como Executar Localmente:

1. Clone este repositório:
```
git clone https://github.com/Angelowh/PasseioApp.git
cd PasseioApp
```

2. Instale as dependências:
```
npm install
```

3. Inicie o servidor de desenvolvimento Angular:
```
ng serve
```
