import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    hero: singleton({
      label: 'Hero',
      path: 'src/data/hero/index',
      format: 'json',
      schema: {
        eyebrow: fields.text({
          label: 'Eyebrow / badge',
          defaultValue: 'NOWA GENERACJA PLATFORMY',
        }),
        headingTop: fields.text({
          label: 'Nagłówek — linia 1 (mocna)',
          defaultValue: 'Zbuduj swój produkt',
        }),
        headingBottom: fields.text({
          label: 'Nagłówek — linia 2 (przygaszona)',
          defaultValue: 'na przewadze technologicznej.',
        }),
        subheading: fields.text({
          label: 'Podnagłówek',
          multiline: true,
          defaultValue:
            'Vantage łączy infrastrukturę, automatyzację i analitykę w jednym panelu — abyś mógł skalować szybciej niż konkurencja.',
        }),
        primaryCtaLabel: fields.text({ label: 'CTA główne — tekst', defaultValue: 'Rozpocznij za darmo' }),
        primaryCtaHref: fields.text({ label: 'CTA główne — link', defaultValue: '#start' }),
        secondaryCtaLabel: fields.text({ label: 'CTA drugorzędne — tekst', defaultValue: 'Zobacz możliwości' }),
        secondaryCtaHref: fields.text({ label: 'CTA drugorzędne — link', defaultValue: '#features' }),
        statLabel: fields.text({ label: 'Karta boczna — etykieta', defaultValue: 'Aktywność systemu' }),
        statValue: fields.text({ label: 'Karta boczna — wartość', defaultValue: '99.98%' }),
        statCaption: fields.text({ label: 'Karta boczna — podpis', defaultValue: 'uptime w ostatnich 90 dniach' }),
      },
    }),
  },
  collections: {
    features: collection({
      label: 'Karty funkcji',
      path: 'src/data/features/*',
      slugField: 'title',
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Tytuł' } }),
        description: fields.text({ label: 'Opis', multiline: true }),
        icon: fields.select({
          label: 'Ikona',
          options: [
            { label: 'Pulse', value: 'pulse' },
            { label: 'Shield', value: 'shield' },
            { label: 'Layers', value: 'layers' },
            { label: 'Bolt', value: 'bolt' },
            { label: 'Globe', value: 'globe' },
            { label: 'Terminal', value: 'terminal' },
          ],
          defaultValue: 'pulse',
        }),
        order: fields.integer({ label: 'Kolejność', defaultValue: 0 }),
      },
    }),
  },
});
