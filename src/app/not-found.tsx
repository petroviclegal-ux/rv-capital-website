import type { Metadata } from 'next';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl py-16 text-center">
          <Eyebrow className="mx-auto">Error 404</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="mt-5 leading-relaxed text-ink/70">
            The page you are looking for may have moved or no longer exists. Return to the
            homepage, or get in touch and we’ll point you in the right direction.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTALink href="/" variant="solid">
              Back to home
            </CTALink>
            <CTALink href="/contact/" variant="outline">
              Contact us
            </CTALink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
