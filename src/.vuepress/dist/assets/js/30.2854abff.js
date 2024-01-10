(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{314:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"folder-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[e._v("#")]),e._v(" Folder Structure")]),e._v(" "),t("h3",{attrs:{id:"we-use-feature-based-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#we-use-feature-based-structure"}},[e._v("#")]),e._v(" We use Feature-Based Structure:")]),e._v(" "),t("p",[e._v("In the feature-based structure, each feature or functionality of the application gets its own dedicated folder. This approach is useful for larger projects with multiple distinct features, as it keeps related code and assets together.")]),e._v(" "),t("h3",{attrs:{id:"some-of-folder-structure-and-there-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some-of-folder-structure-and-there-use"}},[e._v("#")]),e._v(" Some of folder structure and there use:")]),e._v(" "),t("h2",{attrs:{id:"pages-folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pages-folder"}},[e._v("#")]),e._v(" Pages Folder")]),e._v(" "),t("p",[e._v("This is where your application's pages (i.e., the individual views that make up). Folders inside page folder considerd as a nested route.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── pages/\n│   ├── index.vue (Dashboard page)index.vue (Dashboard page)\n│   ├── customers-[group]/ (Customer Management Group)\n│   │   ├── customerDetails-[group]/ (Customer Details Group)\n│   │   │   ├── [id].vue (Customer Details dynamic page ) customer/customerDetails/:id route\n│   │   │   └── enroll.vue (Customer Enroll page) customer/customerDetails/enroll route\n│   │   └── index.vue (Customers page) /customers route\n│   │ \n└── components/\n\n")])])]),t("h2",{attrs:{id:"components-folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#components-folder"}},[e._v("#")]),e._v(" Components Folder")]),e._v(" "),t("p",[e._v("Each pages components placed inside folders same as page names, which can then be imported into\nany other file using "),t("code",[e._v("import Component from '~/components/Component'")]),e._v(" syntax.")]),e._v(" "),t("h5",{attrs:{id:"ui-folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-folder"}},[e._v("#")]),e._v(" UI Folder")]),e._v(" "),t("p",[e._v("All the reusable component should be placed in this folder, which can then be used across different pages.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── components/\n│   ├── customers-[group]/ (Customers Page Components Group)\n│   │   ├── DataTableRowActions.vue (Single Component used only in Customers Page)\n│   │   ├── DataTableSearchbar.vue (Single Component used only in Customers Page)\n│   │   └── columns.ts (Single Component used only in Customers Page)\n│   │ \n│   ├── ui/ (UI Elements Group that can be used on multiple pages)\n│   │   ├── button.vue (General reusable component that can be used accross multiple pages)\n│   │   ├── card.vue (General reusable component that can be used accross multiple pages) \n│   │\n└── composables/\n\n")])])]),t("h2",{attrs:{id:"validations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validations"}},[e._v("#")]),e._v(" Validations")]),e._v(" "),t("p",[e._v("Validation rules are defined in "),t("code",[e._v("/validations/")]),e._v(" directory. Each file has its own schema definition.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── validations/\n│   ├── customerLoginFormSchema.ts (Customer login validation Schema)\n│   └── forgotPasswordFormSchema/ (Forgot password validation Schema)\n│   \n└── stores/\n")])])]),t("h2",{attrs:{id:"stores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[e._v("#")]),e._v(" Stores")]),e._v(" "),t("p",[e._v("Global States of an application is managed by stores.")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("AuthStore")]),e._v(" - Contains user information and authentication related states.")]),e._v(" "),t("li",[t("strong",[e._v("AlertStore")]),e._v(" - Alert message store to show alert messages globally.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── stores/\n│   ├── auth.ts (user information and authentication related states)\n│   └── alert.ts/ (Alert feature states)\n│   \n└── validations/\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("We use common Nuxt.js directory strucure.")]),e._v(" "),t("p",[e._v("For more info, explore the official documentation of nuxt.js :"),t("a",{attrs:{href:"https://nuxt.com/docs/guide/directory-structure/nuxt",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nuxt.com/docs/guide/directory-structure/nuxt"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);