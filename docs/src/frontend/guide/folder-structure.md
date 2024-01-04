# Folder Structure

### We use Feature-Based Structure:
In the feature-based structure, each feature or functionality of the application gets its own dedicated folder. This approach is useful for larger projects with multiple distinct features, as it keeps related code and assets together.

### Some of folder structure and there use:

## Pages Folder

This is where your application's pages (i.e., the individual views that make up). Folders inside page folder considerd as a nested route.


```
.
├── pages/
│   ├── index.vue (Dashboard page)index.vue (Dashboard page)
│   ├── customers-[group]/ (Customer Management Group)
│   │   ├── customerDetails-[group]/ (Customer Details Group)
│   │   │   ├── [id].vue (Customer Details dynamic page ) customer/customerDetails/:id route
│   │   │   └── enroll.vue (Customer Enroll page) customer/customerDetails/enroll route
│   │   └── index.vue (Customers page) /customers route
│   │ 
└── components/

```

## Components Folder
Each pages components placed inside folders same as page names, which can then be imported into
any other file using `import Component from '~/components/Component'` syntax.

##### UI Folder
All the reusable component should be placed in this folder, which can then be used across different pages.

```
.
├── components/
│   ├── customers-[group]/ (Customers Page Components Group)
│   │   ├── DataTableRowActions.vue (Single Component used only in Customers Page)
│   │   ├── DataTableSearchbar.vue (Single Component used only in Customers Page)
│   │   └── columns.ts (Single Component used only in Customers Page)
│   │ 
│   ├── ui/ (UI Elements Group that can be used on multiple pages)
│   │   ├── button.vue (General reusable component that can be used accross multiple pages)
│   │   ├── card.vue (General reusable component that can be used accross multiple pages) 
│   │
└── composables/

```

## Validations
Validation rules are defined in `/validations/` directory. Each file has its own schema definition.

```
.
├── validations/
│   ├── customerLoginFormSchema.ts (Customer login validation Schema)
│   └── forgotPasswordFormSchema/ (Forgot password validation Schema)
│   
└── stores/
```

## Stores
Global States of an application is managed by stores. 
1. **AuthStore** - Contains user information and authentication related states. 
2. **AlertStore** - Alert message store to show alert messages globally.

```
.
├── stores/
│   ├── auth.ts (user information and authentication related states)
│   └── alert.ts/ (Alert feature states)
│   
└── validations/
```


::: tip
We use common Nuxt.js directory strucure.

For more info, explore the official documentation of nuxt.js :[https://nuxt.com/docs/guide/directory-structure/nuxt](https://nuxt.com/docs/guide/directory-structure/nuxt)
:::