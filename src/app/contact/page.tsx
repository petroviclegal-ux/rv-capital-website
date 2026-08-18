import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Container, Section, Eyebrow } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — RV Capital, Dubai',
  description:
    'Contact RV Capital in Dubai Silicon Oasis for a confidential conversation about M&A, business sale or acquisition, restructuring or capital raising.',
  path: '/contact/',
  keywords: [
    'M&A advisor Dubai contact',
    'sell my business Dubai',
    'corporate finance advisory UAE',
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/contact.jpg"
        alt="Dubai skyline viewed across the water"
        eyebrow="Contact"
        title="Start a confidential conversation."
        lede="Whether you are considering a sale, an acquisition, a restructuring or a capital raise, we are glad to talk — in strict confidence and with no obligation."
      />
      <BreadcrumbBar>
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            {/* DETAILS */}
            <Reveal>
              <div className="space-y-10">
                <div>
                  <Eyebrow>Office</Eyebrow>
                  <address className="mt-4 not-italic leading-relaxed text-ink/80">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.country}
                  </address>
                  <a
                    href={site.mapLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-sans uppercase tracking-[0.14em] text-brass-dark hover:text-brass"
                  >
                    Open in Google Maps →
                  </a>
                </div>

                <div>
                  <Eyebrow>Email</Eyebrow>
                  {/* TODO(client): replace with the real inbox before launch. */}
                  <p className="mt-4">
                    <a href={`mailto:${site.contact.email}`} className="text-ink/80 hover:text-brass-dark">
                      {site.contact.email}
                    </a>
                  </p>
                </div>

                <div>
                  <Eyebrow>Telephone</Eyebrow>
                  <p className="mt-4">
                    <a href={`tel:${site.contact.phoneHref}`} className="text-ink/80 hover:text-brass-dark">
                      {site.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal delay={100}>
              <div className="border border-ink/10 bg-bone-200/50 p-8 sm:p-10">
                <h2 className="font-serif text-2xl text-ink">Send us a message</h2>
                <p className="mt-2 text-sm text-ink/60">
                  Fields marked below are required. We aim to respond within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* MAP */}
      <section aria-label="Map of our location" className="border-t border-ink/10">
        <div className="h-[380px] w-full sm:h-[440px]">
          <iframe
            title="Map showing RV Capital’s location in Dubai Silicon Oasis, Dubai, UAE"
            src={site.mapEmbedUrl}
            className="h-full w-full border-0 grayscale-[0.25]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
