# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Travello is a full-stack travel booking and rental platform built with Next.js 13 (Pages Router), featuring tours, hotel bookings, and activity rentals with integrated Stripe payments. The application supports admin and user roles with separate dashboard panels.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Framework & Routing
- **Next.js 13 Pages Router** (not App Router) - all routes in `/pages` directory
- API routes follow pattern: `/pages/api/{resource}/[id].js` or `index.js`
- Dynamic routes use bracket notation: `/pages/tours/[id].js`

### State Management Architecture
The application uses **Redux Toolkit (RTK)** with **RTK Query** for API state management:

1. **Central API Service**: `services/travello.js` defines the base RTK Query API with:
   - Base URL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`
   - Tag types: `User`, `Cart`, `Rent`, `Favorite`, `Purchase`, `Review`
   - All feature-specific APIs inject endpoints into this base

2. **Feature Services**: Located in `/services/{feature}/{feature}Api.js`:
   - Use `travelloApi.injectEndpoints()` to extend base API
   - Export auto-generated hooks (e.g., `useGetRentsQuery`, `useAddRentMutation`)
   - Handle cache invalidation via RTK Query tags

3. **Redux Slices**: Located in `/features/{feature}/{feature}Slice.js`:
   - Manage local UI state (filters, selections, etc.)
   - Combined in `app/store.js` with RTK Query middleware

4. **Store Configuration**: `app/store.js` combines:
   - RTK Query API reducer
   - Feature slices (auth, user, rent, booking, filter)
   - RTK Query middleware for caching/refetching

### Backend Architecture (Serverless)

The backend runs entirely within Next.js API routes (serverless functions):

1. **API Routes** (`/pages/api/{resource}/`):
   - Handle HTTP methods via switch statements
   - Apply middleware chain: `verify` → `authorization` → `upload` (if needed)
   - Call controller functions for business logic

2. **Middleware** (`/middleware/`):
   - `verify.middleware.js`: JWT authentication (checks Bearer token)
   - `authorization.middleware.js`: Role-based access control (`admin`, `user`)
   - `upload.middleware.js`: Multer integration for Cloudinary uploads

3. **Controllers** (`/controllers/`):
   - Contain business logic for each resource
   - Interact with Mongoose models
   - Return standardized responses: `{ success: boolean, message: string, data?: any }`

4. **Models** (`/models/`):
   - Mongoose schemas: `user.model.js`, `rent.model.js`, `cart.model.js`, `favorite.model.js`, `purchase.model.js`, `review.model.js`
   - Define relationships and validation

5. **Libs** (`/libs/`):
   - `db.js`: MongoDB connection handler
   - `geocode.js`: Location utilities

### Authentication Flow

1. JWT tokens stored in `localStorage` as `accessToken`
2. RTK Query services include token in headers: `Authorization: Bearer ${localStorage.getItem("accessToken")}`
3. API routes use `verify` middleware to decode token and attach `req.user`
4. `authorization` middleware checks `req.user.role` against allowed roles

### File Upload Pattern

For endpoints accepting files (e.g., rent gallery):
```javascript
export const config = {
  api: {
    bodyParser: false,  // Required for multipart/form-data
    externalResolver: true,
  },
};
```
Then use `upload.array('gallery', 5)` or `upload.single('avatar')` middleware.

### Frontend Organization

- **Components**: `/components/{section}/` - organized by page section (home, dashboard, shared, tours, detail, checkout)
- **Layouts**: `/layouts/` - `Main.js` (public pages), `Panel.js` (dashboard), `Sidebar.js`
- **Hooks**: `/hooks/` - custom hooks for countries and geocoding
- **Utils**: `/utils/` - JWT utilities and file removal helpers
- **Data**: `/data/` - static data files

## Environment Variables

Required variables (see README.md for full list):
```bash
NEXT_PUBLIC_BASE_URL=         # API base URL
TOKEN_SECRET=                  # JWT signing secret
DB_NAME=                       # MongoDB database name
ATLAS_URI=                     # MongoDB connection string
CLOUD_NAME=                    # Cloudinary credentials
API_KEY=
API_SECRET=
STRIPE_SECRET_KEY=             # Stripe backend key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=  # Stripe frontend key
```

## Key Patterns

### Adding New API Endpoints
1. Create controller function in `/controllers/{resource}.controller.js`
2. Create API route in `/pages/api/{resource}/index.js` or `[id].js`
3. Apply middleware chain: `verify → authorization → (upload)`
4. Create RTK Query service in `/services/{resource}/{resource}Api.js`
5. Add tag types to `services/travello.js` if new resource
6. Use auto-generated hooks in components

### Middleware Chain Pattern
All authenticated endpoints follow this pattern:
```javascript
verify(req, res, (err) => {
  authorization("admin", "user")(req, res, (err) => {
    // Your handler logic
  });
});
```

### RTK Query Cache Invalidation
When mutating data, invalidate related tags to trigger refetches:
```javascript
invalidatesTags: ["Rent", "User", "Cart", "Favorite", "Purchase", "Review"]
```

## Testing

No test framework configured. To add testing:
- Install Jest and React Testing Library
- Add test scripts to `package.json`
- Create `__tests__` directories alongside components

## Common Issues

1. **Multer/Upload Errors**: Ensure `api.bodyParser: false` in route config
2. **JWT Errors**: Verify `TOKEN_SECRET` matches between token generation and verification
3. **CORS Issues**: Check `next.config.js` headers configuration for API routes
4. **MongoDB Connection**: Connection pooling handled by Mongoose, imported via `libs/db.js`
