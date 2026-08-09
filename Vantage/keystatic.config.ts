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
          label: 'Hero badge text',
          defaultValue: 'Astro Template',
        }),
        heading: fields.text({
          label: 'Hero heading (white line)',
          defaultValue: 'Your ally in efficient',
        }),
        headingMuted: fields.text({
          label: 'Hero heading (muted line)',
          defaultValue: '& intelligent brand.',
        }),
        description: fields.text({
          label: 'Hero description',
          multiline: true,
          defaultValue:
            'Discover a new standard of innovation and design, where technology and creativity work hand in hand to elevate your brand.',
        }),
        ctaLabel: fields.text({
          label: 'Primary CTA label',
          defaultValue: 'Buy Template',
        }),
        secondaryCtaLabel: fields.text({
          label: 'Secondary CTA label',
          defaultValue: 'Explore benefits',
        }),
        testimonialQuote: fields.text({
          label: 'Testimonial quote',
          multiline: true,
          defaultValue: 'With Vantage™ we’ve really made a mark in the market.',
        }),
        testimonialName: fields.text({
          label: 'Testimonial name',
          defaultValue: 'Jordan Avery',
        }),
        testimonialTitle: fields.text({
          label: 'Testimonial title',
          defaultValue: 'Founder of Northline Goods',
        }),
      },
    }),
  },
});
