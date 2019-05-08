export const scrollToMyRef = (offsetTop: number) => {
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
};

export const handleItemClick = (target: string) => {
  // @ts-ignore
  var offset = document.getElementById(target).offsetTop;
  scrollToMyRef(offset);
};

/**
 * This functions will return true if
 * Element is in viewport (visible to the user)
 *
 * @param {Element|Window} el Target Element
 *
 */
export const isAnyPartOfElementInViewport = (el:any) => {
  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
};

