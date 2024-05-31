## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

```bash
## TEST
yarn test
```

Console test error :
https://github.com/vercel/next.js/issues/65161


## DEPLOY
This app use the official docker image for deployment 
For more details please see: https://nextjs.org/docs/app/building-your-application/deploying
In this example github Actions use the registry of github to deploy the image in a VPS.

WorkFlow:
 1 - build and publish the docker image in ghcr.io registry
 2 - connect to the server by ssh copy the compose file and download the image from the registry
 3 - execute docker compose up -d in the vps
 4 - connect the container with a frontal nginx wiht reverse proxy 

## DEMO
The app is deployed in :
https://srv498956.hstgr.cloud/