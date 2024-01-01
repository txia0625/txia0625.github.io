# Basic Authentication 

## 1. Cookie
Pros
- HTTP Support

Cons:
- Mobile App can't use
- Not Safe, cookie is stored in browser.
- Cookie cannot cross origin resource sharing. Think about when we deploy frontend and backend on two different servers(quite popular approach).



## 2. Session
Pros
- Saved on the server side

Cons
- All the cons for Cookie, because its implemented upon Cookie

## 3. JWT

