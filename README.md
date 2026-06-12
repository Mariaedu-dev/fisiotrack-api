# 🚀 FisioTrack API

Backend da aplicação **FisioTrack**, desenvolvido com **Node.js**, **Express** e **MongoDB**. A API permite realizar operações CRUD para gerenciamento de pacientes em acompanhamento fisioterapêutico.

---

# 📋 Funcionalidades

- ✅ Cadastro de pacientes
- ✅ Listagem de pacientes
- ✅ Atualização de pacientes
- ✅ Exclusão de pacientes
- ✅ Integração com MongoDB Atlas
- ✅ API RESTful
- ✅ Tratamento básico de erros

---

# 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- Nodemon

---

# 📂 Estrutura do Projeto

```text
src/
├── config/
│   └── db.js
│
├── controllers/
│   └── pacienteController.js
│
├── models/
│   └── Paciente.js
│
├── routes/
│   └── pacienteRoutes.js
│
├── app.js
│
server.js

.env
package.json
```

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/fisio-track-api.git
```

Entre na pasta:

```bash
cd fisio-track-api
```

Instale as dependências:

```bash
npm install
```

---

# ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=sua_string_de_conexao_mongodb
PORT=3000
```

Exemplo:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/fisiotrack
PORT=3000
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

Se tudo estiver correto:

```text
Banco de dados conectado com sucesso!
Servidor rodando na porta 3000!
```

---

# 🌐 URL Base

```http
http://localhost:3000
```

ou

```http
http://SEU-IP:3000
```

Exemplo:

```http
http://192.168.0.10:3000
```

---

# 📡 Endpoints

## Listar Pacientes

```http
GET /pacientes
```

### Resposta

```json
[
  {
    "_id": "685f123abc",
    "nome": "Maria Eduarda",
    "idade": 21,
    "sexo": "Feminino",
    "queixaPrincipal": "Dor lombar",
    "diagnosticoFuncional": "Limitação funcional"
  }
]
```

---

## Cadastrar Paciente

```http
POST /pacientes
```

### Body

```json
{
  "nome": "Maria Eduarda",
  "idade": 21,
  "sexo": "Feminino",
  "queixaPrincipal": "Dor lombar",
  "diagnosticoFuncional": "Limitação funcional"
}
```

### Resposta

```json
{
  "_id": "685f123abc",
  "nome": "Maria Eduarda",
  "idade": 21,
  "sexo": "Feminino",
  "queixaPrincipal": "Dor lombar",
  "diagnosticoFuncional": "Limitação funcional"
}
```

---

## Atualizar Paciente

```http
PUT /pacientes/:id
```

### Body

```json
{
  "nome": "Maria Eduarda Atualizada",
  "idade": 22,
  "sexo": "Feminino",
  "queixaPrincipal": "Dor cervical",
  "diagnosticoFuncional": "Redução de mobilidade cervical"
}
```

### Resposta

```json
{
  "_id": "685f123abc",
  "nome": "Maria Eduarda Atualizada",
  "idade": 22,
  "sexo": "Feminino",
  "queixaPrincipal": "Dor cervical",
  "diagnosticoFuncional": "Redução de mobilidade cervical"
}
```

---

## Excluir Paciente

```http
DELETE /pacientes/:id
```

### Resposta

```json
{
  "mensagem": "Paciente removido com sucesso"
}
```

---

# 🗄️ Modelo de Dados

## Paciente

```json
{
  "nome": "String",
  "idade": "Number",
  "sexo": "String",
  "queixaPrincipal": "String",
  "diagnosticoFuncional": "String"
}
```

---

# 🧪 Testando a API

Você pode testar utilizando:

- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- Thunder Client (VS Code)

Exemplo:

```http
GET http://localhost:3000/pacientes
```

---

# 🔒 Variáveis de Ambiente

| Variável | Descrição |
|-----------|-----------|
| MONGO_URI | String de conexão do MongoDB |
| PORT | Porta do servidor |

---

# 👩‍💻 Desenvolvedora

Maria Eduarda

Estudante de Fisioterapia e Análise e Desenvolvimento de Sistemas.

Projeto desenvolvido para praticar:

- Node.js
- Express.js
- MongoDB
- Mongoose
- APIs REST
- Integração Frontend + Backend
- CRUD Completo

---

# 📈 Melhorias Futuras

- 🔐 Autenticação com JWT
- 👨‍⚕️ Cadastro de fisioterapeutas
- 📅 Agenda de atendimentos
- 📄 Evolução fisioterapêutica
- 📊 Dashboard com indicadores
- ☁️ Deploy em nuvem
- 📱 Publicação do aplicativo

---

# 📄 Licença

Este projeto está sob a licença MIT.

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.
