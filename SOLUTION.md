## File Structure Overview

### Common Files:

- `App.tsx`: Defines the application's routes.
- `App.css`: Contains common styles.
- `service`: Manages API calls, with an Axios instance created within.
- `utils`: Contains two files for constants and functions.
- `components`: Contains all the components of the app.
- `pages`: Stores all the pages of the app. Each page includes four files:
  - `index.tsx` for UI rendering.
  - A custom hook file for page-specific logic.
  - `index.css` for page-specific styles.
  - `types.ts` to declare TypeScript types utilized on that page.

### Area of Improvement:

- Minimize style repetition for cleaner code
- Define color codes in App.css for consistent usage
- Display a clear "No Data Matched" message when filter search returns no results
