// Configuration for Hackathon Registration via Google Form
// Paste your Google Form link here. All registration buttons across the website
// (Header, Hero CTA, Prizes, Tracks, Rules, and Banner) will open this Google Form.
export const GOOGLE_FORM_URL = 'https://forms.gle/qJHdS7TnKQJ4aeQX7';

export function openRegistrationForm(customUrl?: string) {
  const url = customUrl || GOOGLE_FORM_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
}
