# RST Element Prototype Workflow

## Introduction
In my latest project I am using a combination of Rails, Stimulus JS, and Tailwind CSS. I decided I would rather not do all of the new element prototyping in my Rails dev environment.
Instead, I created a separate environment for rapid HTML / TailwindCSS / Stimulus JS prototyping.

## Directory Structure
```
├── /dist                    # Webpack and Tailwind output directory
│   ├── index.html              # Combined HTML including partials
│   ├── main.js                 # Main output for Webpack/Stimulus
│   └── tailwind.css            # Main output for Tailwind
├── /src                     # Source folder
│   ├── /controllers            # Stimulus Controllers Folder
│   ├── /partials               # HTML Partials Folder
│   ├── /templates              # HTML Templates Folder
│   ├── index.js                # Webpack Entry Point
│   └── tailwind.css            # Tailwind CSS Entry Point
├── package.json             # Yarn package.json
├── postcss.config.js        # PostCSS config
├── tailwind.config.js       # Tailwind Config
├── webpack.config.js        # Webpack Config
└── yarn.lock                # Yarn Lockfile
```

## Installation
1. Clone this repository
2.     yarn install
3.     npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css
4.     yarn run start

### Notes
* The main view will be available at [localhost:3000](http://localhost:3000)

* You will have to run #3 every time you make changes to the tailwind.css file, including for condensing tailwind classes.



## Configuration

### Add JS Package for Stimulus
Works just like it does when using Stimulus with Rails
1.     yarn add [package-name]
2.     include [package-object] from '[package-name]'

### Add Partial to Index

1. Create partial in `/src/partials`
2. Add partial element to template
3. Declare partial in `webpack.config.js`


    new HtmlWebpackPartialsPlugin({
        path: path.join(__dirname, './src/partials/[new-partial].html'),
        location: '[partial-element]',
        template_filename: "index.html",
    }),

### Add New Template

1. Create template in `/src/templates`
2. Declare template in `webpack.config.js`


    new HtmlWebpackPartialsPlugin({
        path: path.join(__dirname, './src/partials/[new-partial].html'),
        location: '[partial-element]',
        template_filename: "index.html",
    }),
