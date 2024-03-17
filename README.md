# My portfolio

My portfolio site with details about myself and my latest projects.

Visit the [live version](https://andreacardinale.me).

## Description

I created this while looking for some interesting tutorial on Framer Motion and ended up implementing this design by [CodeBucks](https://www.youtube.com/watch?v=Yw7yWHigGKI).

To keep things interesting I made some changes to the original version:

- updated the color scheme for both light and dark mode
- used the NextJS app router instead of the page router
- used typescript
- added tech stack details to the project page, showing icons of the technologies used
- created individual pages for each project, with a description and slideshow of screenshoots
- implemented a contact form, including validation and recaptcha
- extracted data and componentes logic out of the main pages, to make it easier to edit and use this repo as a template for a new portfolio
- added Google Analytics

## Using this as a template

To use this as a template for your own portfolio:

1. Clone the repository `git clone https://github.com/Mirthis/portfolio`
2. Create an environment file `cp .env.template .env.local`
3. Populate the enviroment file with the required details
4. Update the homepage content and navbar links in `/src/data/home.ts`
5. Update the about page cotnent in `/src/app/data/about.ts`.  
   To show more than 10 skills the `skillPosition` variable in the `Skills` component need to be update to add the coordinate where the additional skills will be displayed (`/src/app/components/Skills`).
6. Update the project details in `/src/data/projects.ts` and components under '/src/data/projects'. The componented are used for the description section in each project detail page, so that the description can contain markup.
7. Additional tech icons need to be added to `/src/components/Icons.tsx` and to the `techIcons` array in the `TechIcons` compionent (`/src/components/TechIcons.tsx`).  
   [Iconify](https://icon-sets.iconify.design/) is a good place to find icons and the corresponding JSX code.
8. Update the `/public/sitemap.xml` to reflect your domain
