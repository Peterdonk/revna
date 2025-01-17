# RevnaUserManagement

A full-stack user management application built with Angular (frontend) and NestJS (backend).

## Overview

RevnaUserManagement is a modern web application that provides comprehensive user management capabilities. The project uses Angular for the frontend client application and NestJS for the backend API server.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)
- Git

## Project Structure

```
revna-user-management/
├── front-end-angular/          # Angular frontend application
└── backend-nest-js/           # NestJS backend application
```

## Frontend Setup (Angular)

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

### Development Server

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Building for Production

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
```

## Backend Setup (NestJS)

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Development Server

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### API Documentation

Once the backend server is running, you can access the Swagger API documentation at:

```
http://localhost:3000/api
```


### Previews
<img width="960" alt="image" src="https://github.com/user-attachments/assets/0b5fc854-f3b2-4810-bc1f-4eb77d4c8061" />
<img width="960" alt="image" src="https://github.com/user-attachments/assets/48e94265-b093-4af9-be80-3a492ac0c352" />
<img width="960" alt="image" src="https://github.com/user-attachments/assets/086e6442-a1a2-46fd-9013-bc8622238148" />
<img width="960" alt="image" src="https://github.com/user-attachments/assets/4c22a55f-0398-4dcc-9379-be2218c69021" />


## Deployment

### Frontend Deployment

Build the Angular application for production:

```bash
cd frontend
ng build --configuration production
```

### Backend Deployment

For NestJS deployment, you can use the official NestJS deployment platform Mau:

```bash
npm install -g mau
mau deploy
```

Alternatively, refer to the [NestJS deployment documentation](https://docs.nestjs.com/deployment) for other deployment options.

## Additional Resources

### Angular Resources
- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

### NestJS Resources
- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord Community](https://discord.gg/G7Qnnhy)
- [NestJS Courses](https://courses.nestjs.com)
- [NestJS Enterprise Support](https://enterprise.nestjs.com)

## Support

If you find this project helpful, please consider:
- Contributing to the codebase
- Reporting issues
- Suggesting new features
- Sharing the project

## License

This project is licensed under the MIT License - see the LICENSE file for details.
