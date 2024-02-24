# Portfolio
## Status: V1 Complete

This project was built using Nextjs 14, Tailwind, Frame Motion and other front-end libs.
For the bank end I used [Hygraph HEADLESS CMS](hygraph.com), as it has a good range for the free tier and I wanted to have the experience of consuming a GraphQL api
And to receive direct contact messages I integrated with discord

## How to run the project
To run the project you need a .env file with the following structure
```bash
# Hygraph
HYGRAPH_URL=""
HYGRAPH_TOKEN=""

# Discord
WEBHOOK_URL=""
```

After that, install the dependencies and run the project
```bash
  yarn install

  yarn dev
```