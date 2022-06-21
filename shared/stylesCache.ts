import createCache from '@emotion/cache';

export const createMuiCache = () => createCache({ key: 'mui', prepend: true });
export const createTssCache = () => createCache({ key: 'tss' });
