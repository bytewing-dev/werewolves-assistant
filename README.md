# Werewolves Game Master Assistant

A web application to assist game masters in running games of "Werewolves of Millers Hollow" (Les Loups-Garous de Thiercelieux).

## 🎯 Overview

Streamline the game mastering experience by providing:
- Village composition management
- Interactive role distribution
- Day/Night phase timer
- Game events tracking
- Intuitive game master interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the project
git clone https://github.com/bytewing-dev/werewolves-assistant.git
cd werewolves-assistant

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start the database (if needed)
docker-compose up -d

# Run Prisma migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## 🚀 Project Status

🚧 **Active Development** 🚧

Development plan phases:
1. ⏳ Project setup and environment
2. 📋 Composition management
3. 🎭 Role distribution system
4. 🎮 Core gameplay
5. 🎯 Game master interface
6. ✨ Polish and deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Contact

Benjamin Diard - [benjamin.diard.pro@gmail.com]

Project Link: [https://github.com/bytewing-dev/werewolves-assistant](https://github.com/bytewing-dev/werewolves-assistant)