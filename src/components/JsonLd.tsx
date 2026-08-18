import * as React from 'react';

/**
 * Renders a JSON-LD <script> block. Passing the object through JSON.stringify
 * and escaping `<` guards against markup injection in string fields.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
