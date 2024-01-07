
<h1 align="center"> URL Shorten System<h1>

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</div>

## Overview

This project aim to practice courses Software System Design and Web Application Development altogether.

The developing version has been deployed on <https://u.dongli.ca>, please expect  occasional instability.

## Current File Structure

```
└── .
    └── 📁client
        └── 📁src
            └── App.css
            └── App.jsx
            └── main.jsx
            └── index.css
            └── 📁assets
            └── 📁components
            └── 📁config
            └── 📁contexts
            └── 📁layout
            └── 📁pages
            └── 📁services
            └── 📁utils
        └── .env
        └── .eslintrc.cjs
        └── index.html
        └── package.json
        └── postcss.config.js
        └── tailwind.config.js
        └── vite.config.js
    └── 📁server
        └── 📁config
        └── 📁controllers
        └── 📁models
        └── 📁routes
        └── 📁services
        └── server.js
        └── package-lock.json
        └── package.json
    └── .env
    └── .gitignore
    └── LICENSE
    └── package.json
    └── README.md
```

## Web Pages

| Page | Process |
|:-----|:-------|
| Home/Shorten | ![](https://geps.dev/progress/100) |
| LogIn | ![](https://geps.dev/progress/100) |
| SignUp | ![](https://geps.dev/progress/100) |
| /\<alias\> | ![](https://geps.dev/progress/100) |
| aliasnotfound | ![](https://geps.dev/progress/100) |
| forgot password | ![](https://geps.dev/progress/60) |
| MyURL/dashboard | ![](https://geps.dev/progress/10) |
| Profile | ![](https://geps.dev/progress/0) |
| About | ![](https://geps.dev/progress/0) |

## Function Map

```mermaid
    mindmap
        root(Functions)
            users
                register
                sign in
                sign out
                id))update info((
                    id))reset pwd((              
            URL pairs
                generation
                    auto alias
                        encoder
                        count model
                    customize alias
                    id))copy((
                    id))share((
                redirection
                expiration
                id))list all((
                id))update alias((
                id))delete pairs(( 
            clicks
                click info
                    geolocation
                    device
                id))analytics((
                    id))charts((
                        id))time trend((
                        id))by geolocation((
                        id))by device((
```

```mermaid
    mindmap
        root(annotation)
            id))Developing((
            Developed
```

## Usage

### Generate Short URL

```mermaid
flowchart LR
    A["u.dongli.ca"] -->
    B["signup"] --> C["login"] --> D["shorten"] --> E{"customize?"}
    E --> F["customized alias"]
    E --> G["auto-gen alias"]
    style B stroke-dasharray: 5 5
    style C stroke-dasharray: 5 5
```

### Redirect Short URL

```mermaid
flowchart LR
    A["u.dongli.ca/#60;alias#62;"] -- "record click" --> C["redirect to origin"]
```

### Analyze Clicks

==🚧===🚧==
