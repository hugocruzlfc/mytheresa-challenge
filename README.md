# Challenge Steps

## Step 1: Project Setup

- Use as scaffolding my own Nextjs [template](https://www.npmjs.com/package/@hugo_cruz/nextjs-setup), it has everything I work with on a daily basis.

## Step 2: Create main components

- Create my main provider to fetch with [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) and the [ky](https://www.npmjs.com/package/ky) instance.
- I installed the UX components I needed and created the necessary hooks for my operations
- I modeled the landing page with the necessary components.
- In a first instance I used all the available generators and that's why I do a fetch of all the existing ones, it could have been much simpler without this since you ask for 3, but I read it after finishing all this.

## Step 3: Create the details page

- I created the details page with the necessary components. Actions and hooks and add a internal endpoint for the details movie fetch.

## Step 4: Create the custom css

- I created the utility function "getGenreStyles" to get the styles of the specific genres.

# Project Setup

- Clone the repository and create .env file with the following variables( this is a mandatory but de tmdb token is necessary for the project to work properly):

```typescript
NEXT_PUBLIC_TMDB_TOKEN = NEXT_PUBLIC_TMDB_BASE_URL =
  "https://api.themoviedb.org/3";
NEXT_PUBLIC_TMDB_IMAGES_URL = "https://image.tmdb.org/t/p/w500";
PROJECT_BASE_URL = "http://localhost:3000";
```

## Author

- Hugo Cruz de la Torres [Linkedin](https://www.linkedin.com/in/hugo-cruz-7a0630197)
