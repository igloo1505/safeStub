---
title: Tech Stack
---

# Tech Stack

## Rendering and Structure

### React

- An open source framework originally developed by Facebook with later contributions from other major corporations.
- Functions as a Single Page Application library to break whole web pages into many far smaller pieces. This allows for:
  - Re-painting only small parts of the UI when a piece of state changes as opposed to re-rendering the entire page.
  - Significantly increasing re-usability by maintaining state directly where it is most applicable.

### Next.js

- A structured Docker container which wraps a _React_ application.
- While _React_ is fundamentally a client side framework, _Next.js_ wraps the entire _React_ application in a server side _Node.js_ Docker container and provides many useful utility functions to significantly increase performance by:
  - Selectively rendering most of the application on the far more powerful and reliably connected server machine, yet still allowing client side rendering when access to information from a user's browser or local machine is required.
  - Loading data from databases and other APIs on the first call to the _Next.js_ server, instead of loading data consecutively over several calls to sometimes multiple servers.
  - Intelligent control of cached resources directly on the server, keeping the most frequently used resources available without another network request from the server to external databases or APIs.
  - Inline restructuring of image and Blob data, minimizing them when appropriate to significantly shrink response size for devices that won't benefit from large images.
  - Protecting access to routes directly on the server based on user's credentials. This allows secure pages to be rendered without the initial skeleton if they are authorized, and redirected on the initial request if they are not instead of redirecting on a sequential request.
  - Pre-loading pages in the background that are linked to from the current page, making subsequent loads far more performant.

### Typescript

- Typescript is a typing layer added to javascript code bases to enforce a far more strict structure and adherence in the way data is passed back and forth between functions.
- Typescript will not, and actually can not be directly interpreted by a user's machine or even the server. However this additional typing layer will stop the build process before server and client side javascript code can be compiled from the typescript code base if a mismatch between the shape of data that is expected and the shape of data that is supplied is found during the build.
  - While typescript is far from perfect at detecting bugs, it is the standard among even moderate scale projects for it's ability to significantly increase the amount of bugs that are caught before the app is ever available to anyone outside of the development team.

### Zod, Trpc, & React-hook-form

- Zod: Typescript object validator
- Trpc:[^1] A server request client that maintains typescripts type safety between server-client communication by implementing Zod validation.
- React-Hook-Form: A useful form utility that uses Zod validators to parse user input before sending the data to the server to be stored or interpreted. This not only minimizes unnecessary requests between the client and the server, making the user experience more fluid, but also ensures that that applications data isn't susceptible to potentially harmful edge cases.

---

## Hosting & Local Storage

### Vercel

- The developers of _Next.js_ also operate a very reliable and modern hosting platform with a distributed system specifically designed for _Next.js_ containers.

### Google Domains

- While domains can be purchased anywhere, Google domains enacts specific requirements that reflect the ideal structure and setup for search engines to crawl and accurately find the information they are looking for.
  - Hosting through Google domains won't inherently increase search rankings, but it is beneficial while resolving issues related to discoverability.

### Redux-Persist & PWA (Progressive Web Applications)

- Redux is a global state manager that houses application state that is required by multiple components, often in separate parts of the application.
  - Redux-Persist is a convenient wrapper that stores the Redux store in the browser's local storage database that persists between reloads and even complete reboots.
- Progressive Web Application is a term used to describe an application that uses a service worker to cache pages and media in the background.
  - The service worker will cache everything needed to render a page, load the cached data if it exists, and _then_ load, cache and refresh the data with any updated changes. This allows the app to function largely offline, be 'installed' much like a native application, and provides access to many native interfaces like offline push notifications, geolocation data, and message read status updates.

### JWTs & Cookie based sessions

- JSON Web Tokens (JWTs) are encrypted tokens stored in request headers and cookies.
  - Storing user sessions, UI settings and other immediately required pieces of data in in JWTs as opposed to individual auth tokens passed through the request body allows the user to remain authenticated even after closing the application and makes certain settings available on both the server and the client, so pages can be rendered accordingly, even on the server.

---

## Styling & UI

### Shadcn & Radix-UI

- Radix-UI functions as a utility library for commonly used UI components. The primary purpose of Radix is to build primitive components with the structure that is most useable by assistive devices like screen readers, keyboard navigation, and browser extensions designed for those that are colorblind.
- Shadcn is built directly on top of Radix-UI, and adds a consistent base layer of styling to many Radix-UI components.

### Tailwind

- A utility library for writing style sheets (`.css` & `.scss`) inline, directly in `.tsx`[^2] files. There are 2 main benefits to this approach:
  - The styling files are, in most cases, completely joined with the structural and logic files.
  - Many common `.css` variables are written in a manner that minimizes the discrepancy in the way they are handled between different browsers.

## Data

### Postgres

- A more modern alternative to _SQL_, with much of the same syntax and features.

### Prisma

- Prisma functions as both an ORM (Object relational map) and an interface between **SafeStub's** _Postgres_ database and it's typescript code base.
  - ORMs primary purpose is to create a variety of different objects (a user, transaction, ticket, event, etc.) and reflect the relationship between these objects in the database in a reliable manner without the necessity to store more data than is required.
  - An _interface_ is a term used to describe the way one code base is made accessible to another code base that is usually quite different, and often written in a different language or running in a different environment. Prisma in this case, provides a way to write _typescript_ code, which will then be evaluated to the _SQL_ queries that _Postgres_ can interpret.

---

## Privacy & Security

### Bcrypt & Next-Auth

- Next-Auth is an authentication library that uses the _OAuth 2.0_ protocol to securely authenticate users through several third party providers. (Facebook and Google in SafeStub's case)
  - Using a third party OAuth 2 authentication provider is strongly preferred by most or all third party services, especially when money or private information is being accessed.
- Bcrypt is an encryption module for encrypting data before it is stored in the _Postgres_ database through _Prisma_. When authenticating through one of the OAuth providers, manual encryption is not necessary as they internally make sure to handle all private information on their own servers, and therefor never expose user's private or vulnerable information to even **SafeStub**, but when user's prefer to authenticate with **SafeStub** directly _Bcrypt_ is used to ensure that even if our database were to be hacked all leaked data would be encrypted and unusable.

### Stripe

- The leading online payment processing service, with built-in security and privacy protocols.

---

## SEO, Analytics and Marketing

### Next-SEO

- A useful set of utility components for writing SEO in the same `.tsx` file and language that the structure of the page is written in.

### Vonage

- SMS marketing, notification and 2FA SDK.[^3]
- Allows sending SMS (text messages) directly from the server programatically.

### SMTP[^4] Email-Server integration

- Allows sending emails directly from the server using the protocol that is native to email clients.

---

## Mobile & Native

### Ionic

- A framework meant to wrap typescript code bases in an either Kotlin[^5] or Swift[^6] web-view component.
  - The web-view component allows significant parts of the typescript codebase to be used in an environment in which typescript or javascript isn't natively supported, yet yields two new secondary code bases written in Kotlin and Swift respectively.
  - This makes native features that are only accessible through these native languages easily reachable, without the need to implement future changes across three distinct projects, in three separate languages.

### Framework7

- A webview implementation of native mobile UI components, giving webview based applications an indistinguishable feel to those written from the ground up in either Kotlin or Swift.

---

## Footnotes

[^1]: Typescript Remote Procedural Call
[^2]: Typescript Xml. A filetype that allows writing html and React's Xml like syntax directly in typescript files.
[^3]: Software development kit. Similar to an interface, but focused on making a specific library or API more accessible to other technologies and environments.
[^4]: Simple Mail Transfer Protocol
[^5]: Android and Google Play's native language. A superset of `Java`.
[^6]: Apple's native language across all App Stores, regardless of device. A fork of `Objective-C` which itself is a derivative of `C++`.
