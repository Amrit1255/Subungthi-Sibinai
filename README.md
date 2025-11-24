# Subungthi-Sibinai — PocketBase integration notes

This project is a Vite + React + TypeScript site. I added a minimal PocketBase integration.

What I changed

- Installed the `pocketbase` JS client (`bun add pocketbase`).
- Added `src/lib/pocketbase.ts` which exports a configured client and helper functions.
- Wrapped the app with React Query (`QueryClientProvider`) in `src/main.tsx`.
- Updated `src/pages/Gallery.tsx` to fetch records from a `gallery` collection using PocketBase and React Query, with a static fallback.

Environment

- Create a `.env` file in project root and add your PocketBase URL:

```env
VITE_POCKETBASE_URL="http://127.0.0.1:8090"
```

If you host PocketBase somewhere else, set that URL instead.

Run the project

Install dependencies (if you haven't already):

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

PocketBase Setup

**Collection Configuration:**

The Gallery page expects a collection named `gallery` with the following fields:

- `title` (text)
- `category` (text)
- `image` (file - single)

**Important: Access Rules**

If you see "Only superusers can perform this action" error, you need to configure your PocketBase collection access rules:

1. Open PocketBase Admin UI (usually `http://127.0.0.1:8090/_/`)
2. Go to Collections → `gallery`
3. Click on "API Rules"
4. Set the **List/Search rule** to allow public access:
   - Use `@request.auth.id != ""` for authenticated users only
   - Use empty field or `""` (empty string) for public access
   - Or use `@request.auth.id != "" || @collection.gallery.public = true` for conditional access

**Example: Public Read Access**

For public gallery viewing without authentication, set:

- List/Search rule: leave empty (or use `""`)
- View rule: leave empty (or use `""`)

The app will gracefully fall back to static images if PocketBase is unavailable or returns errors.

Notes

- Adjust the collection or field names in `src/pages/Gallery.tsx` to match your PocketBase schema.
- If you want authentication flows, use the helpers in `src/lib/pocketbase.ts` (`signInWithEmail`, `signOut`, `getCurrentUser`).
