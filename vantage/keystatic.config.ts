import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    features: collection({
      label: 'Feature cards',
      slugField: 'title',
      path: 'src/content/features/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Pulse', value: 'pulse' },
            { label: 'Orbit', value: 'orbit' },
            { label: 'Shield', value: 'shield' },
            { label: 'Bolt', value: 'bolt' },
            { label: 'Layers', value: 'layers' },
            { label: 'Grid', value: 'grid' },
          ],
          defaultValue: 'pulse',
        }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
      },
    }),
  },
});
