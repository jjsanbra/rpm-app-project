import { defineConfig } from 'orval';

export default defineConfig({
  rpmApi: {
    input: {
      target: './backend/openapi.json',
    },
    output: {
      mode: 'tags-split',
      target: './projects/rpm-app/src/app/core/api/endpoints',
      schemas: './projects/rpm-app/src/app/core/api/model',
      client: 'angular',
      mock: false,
      clean: true,
      prettier: false,
    },
  },
});
