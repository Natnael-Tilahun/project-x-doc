# Installation Guide

### Clone Project

**Prerequisites**

- **Node.js** - `v18.0.0` or newer
- **Text editor** - We recommend Visual Studio Code with the Volar Extension
- **Terminal** - In order to run Nuxt commands

::: details Additional notes for an optimal setup:

- **Node.js:** Make sure to use an even numbered version (18, 20, etc)
- **Nuxtr:** Install the community-developed Nuxtr extension
- **Volar:** Either enable Take Over Mode (recommended) or add the TypeScript Vue Plugin

If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim for \*.vue files in your nuxt.config.ts file:

    nuxt.config.ts

    export default defineNuxtConfig({
        typescript: {
            shim: false
        }
    })

:::

Open a terminal (if you're using [Visual Studio Code](https://code.visualstudio.com/), you can open an [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)) and use the following command to create a clone the project:

```
git clone project-repository
```

Open your project folder in Visual Studio Code:
Terminal

```
code <project-name>
```

Or change directory into your new project from your terminal:

```
cd <project-name>
```

Install the dependencies:

```
yarn install
```

### Development Server

Now you'll be able to start your Nuxt app in development mode:

```
npm run dev -o
```

::: tip
Well done! A browser window should automatically open for http://localhost:3000.

For more info, explore the official documentation of nuxt.js : [https://nuxt.com/docs/getting-started/installation](https://nuxt.com/docs/getting-started/installation)
:::

### Next Steps

Now that you've cloned the project, you are ready to start contributing on this project.

##
