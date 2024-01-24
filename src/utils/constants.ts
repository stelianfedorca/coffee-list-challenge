const BREAKPOINTS = {
  phoneMax: 640,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
};
