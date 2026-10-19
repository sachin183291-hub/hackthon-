// Helper for smooth anchor scrolling and route navigation across SYNOHACK 2026

export function scrollToSection(sectionId: string, setLocation?: (url: string) => void) {
  const cleanId = sectionId.replace('/#', '').replace('#', '');
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '';

  if (isHomePage) {
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `/#${cleanId}`);
      return;
    }
  }

  // If on another page, navigate to home with hash
  if (setLocation) {
    setLocation(`/#${cleanId}`);
  } else {
    window.location.href = `/#${cleanId}`;
  }

  // Fallback poll to ensure scroll executes once home DOM renders
  setTimeout(() => {
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 200);
}

export function navigateToPage(path: string, setLocation?: (url: string) => void) {
  if (path.startsWith('/#') || path.startsWith('#')) {
    scrollToSection(path, setLocation);
    return;
  }

  if (setLocation) {
    setLocation(path);
  } else {
    window.location.href = path;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
