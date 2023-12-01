import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-nextjs-portfolio-site',
  title: 'Sanity Next.js Portfolio Site',

  projectId: 'ctl91umg',
  dataset: 'production',
  basePath:"/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
