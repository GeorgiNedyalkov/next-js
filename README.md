# Learning Next js

- Follow tutorial from the docs
- Go through docs
- Create a project

## API routes

- Introduction
- Dynamic Routes
  - Index routes and Dynamic API routes: [dynamicID]
  - Catching all API routes: slug
  - Optional catch all API routes
  - Caveats:
    - Predefiden API routes taka precedence over dynamic API routes,
- API Routes Request Helpers
  API routes provide built-in request helpers which parse the incoming request (req)

```javascript
req.cookies = "An object containing the cookies sent by the request";
req.query = "An object containing the query string";
req.body =
  "An object containing the body parsed by content-type, or null if no body was sent";
```
