import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export default function emotionAndTssCache() {
  let emotionInsertionPoint;
  let tssInsertionPoint;

  if (isBrowser) {
    const emotionInsertion = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    ) as HTMLElement;
    const tssInsertion = document.querySelector('meta[name="tss-insertion-point"]') as HTMLElement;
    emotionInsertionPoint = emotionInsertion ?? undefined;
    tssInsertionPoint = tssInsertion ?? undefined;
  }

  const emotionCache = createCache({ key: 'mui', insertionPoint: emotionInsertionPoint });
  const tssCache = createCache({ key: 'tss', insertionPoint: tssInsertionPoint });

  return { emotionCache, tssCache };
}
