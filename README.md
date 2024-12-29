# MySocials

MySocials is a modern, full-featured profile and link management platform that enables users to create elegant, customizable profiles to showcase their online presence. Think of it as your digital business card that brings together all your social media profiles, websites, and content in one beautiful, easy-to-share location.

## ✨ Features

### Core Features

- **Customizable Profiles**
  - Unique username for easy sharing
  - Personalized profile pictures
  - Custom bio and description
  - Responsive background designs
  - Light/dark mode support
  - Custom color schemes

### Link Management

- **Social Media Integration**
  - YouTube channel links
  - Instagram profile integration
  - Facebook profile connections
  - GitHub repository showcasing
  - Support for additional platform links

### User Experience

- **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimization
  - Cross-browser compatibility
  - Fast loading times
  - Smooth animations

### Security Features

- **Authentication & Authorization**
  - Secure user authentication via Clerk
  - Protected routes and API endpoints
  - Email verification
  - Password protection
  - Rate limiting for API calls

### Coming Soon

- **Analytics Dashboard**
  - Link click tracking
  - Visitor statistics
  - Geographic data
  - Traffic sources
  - Peak usage times

## 🛠️ Technical Stack

### Frontend

- **Framework**

  - Next.js 14 (App Router)
  - React 18
  - TypeScript

- **Styling**
  - Tailwind CSS
  - Shadcn/UI
  - Lucide Icons
  - CSS Modules

### Backend

- **API**

  - Next.js API Routes
  - RESTful architecture
  - MongoDB integration
  - Mongoose ODM

- **Database**
  - MongoDB Atlas
  - Mongoose schemas
  - Indexed queries
  - Data validation

### Authentication

- **Clerk Integration**
  - OAuth 2.0
  - JWT handling
  - Session management
  - User roles

### Development Tools

- **Developer Experience**
  - ESLint
  - Prettier
  - Husky
  - Git hooks
  - TypeScript

## 📦 Installation

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- MongoDB account
- Clerk account

### Local Development Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shubhamkanskar/MySocials.git
   cd MySocials
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**:
   Create a `.env.local` file in the root directory:

   ```env
   # MongoDB Configuration
   NEXT_MONGO_URI=your_mongodb_connection_string

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key

   # Application Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Database Setup**:

   ```bash
   # Make sure MongoDB is running locally or use MongoDB Atlas
   npm run setup-db
   ```

5. **Start Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Deployment Platforms

- **Vercel** (Recommended)

  - Connect GitHub repository
  - Configure environment variables
  - Auto-deploy enabled

- **Railway**
  - Push to deploy
  - Environment variable configuration
  - Automatic SSL

## 💻 Development

### Project Structure

```
mysocials/
├── app/
│   ├── (auth)/
│   ├── (user)/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── utils/
│   └── config/
├── models/
│   └── user.js
└── public/
    └── assets/
```

### API Routes

- `POST /api/create` - Create new profile
- `GET /api/get` - Fetch user profile
- `POST /api/update` - Update profile
- `DELETE /api/delete` - Delete profile

### Database Schema

```javascript
const userSchema = {
  email: String,
  username: String,
  name: String,
  bio: String,
  image: String,
  social: {
    youtube: String,
    instagram: String,
    facebook: String,
    github: String,
  },
  theme: {
    background: String,
    color: String,
  },
};
```

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

### Development Guidelines

- Follow ESLint rules
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Follow code style guide

### Code Style

- Use TypeScript
- Follow Airbnb style guide
- Use meaningful variable names
- Comment complex logic
- Keep functions small

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Shadcn for UI components
- Clerk for authentication
- MongoDB for database
- Next.js team
- Open source community

## 📧 Contact

- GitHub: [@Shubhamkanskar](https://github.com/Shubhamkanskar)
- Email: [shubhamkanaskar75@gmail.com]

## 🔄 Version History

- v1.0.0 - Initial release
- v1.1.0 - Added theme customization
- v1.2.0 - Improved mobile responsiveness
