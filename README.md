# Habeshagram

## Overview
Habeshagram is a modern Instagram clone built using Next.js 14, Prisma, and PostgreSQL. It features user authentication via Google and allows for seamless image uploads with UploadThing.

## Features
- **User Authentication**: Secure login and registration using Google OAuth.
- **Photo Uploads**: Easily upload photos using UploadThing.
- **Modern UI**: Responsive and sleek design with Next.js 14.
- **Database Management**: Prisma as the ORM and PostgreSQL for data storage.

## Technologies Used
- **Frontend**: Next.js 14
- **Backend**: Node.js, Next.js API routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Google OAuth
- **File Uploads**: UploadThing

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- Google Cloud Project for OAuth
- Uploadthing secret id

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/oaksas/habeshagram.git
    cd habeshagram
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=postgresql://username:password@localhost:5432/habeshagram
    NEXTAUTH_URL=http://localhost:3000
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

4. **Migrate the database**
    ```bash
    npx prisma migrate dev --name init
    ```

5. **Start the development server**
    ```bash
    npm run dev
    ```

6. **Open your browser**
    Navigate to `http://localhost:3000`


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

---
