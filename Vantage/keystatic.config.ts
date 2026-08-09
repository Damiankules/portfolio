import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    home: singleton({
      label: 'Home page',
      path: 'src/content/home/',
      format: { data: 'json' },
      schema: {
        announcement: fields.text({
          label: 'Announcement bar text',
          defaultValue: 'START GROWING WITH VANTAGE TODAY!',
        }),
        announcementCta: fields.text({
          label: 'Announcement bar CTA',
          defaultValue: 'GET STARTED',
        }),
        badge: fields.text({
          label: 'Hero badge label',
          defaultValue: 'NEW',
        }),
        badgeText: fields.text({
          label: 'Hero badge text',
          defaultValue: 'Introducing the all-new Vantage™',
        }),
        heading: fields.text({
          label: 'Hero heading (dark line)',
          defaultValue: 'Step into the new era',
        }),
        headingMuted: fields.text({
          label: 'Hero heading (muted line)',
          defaultValue: 'of brand presence',
        }),
        description: fields.text({
          label: 'Hero description',
          multiline: true,
          defaultValue:
            'Vantage™ blends next-gen design systems with powerful flexibility — crafted to give bold brands the edge they deserve.',
        }),
        ctaLabel: fields.text({
          label: 'CTA button label',
          defaultValue: 'Buy Template',
        }),
      },
    }),
  },
});
