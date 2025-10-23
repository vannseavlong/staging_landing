export function trackFAQInteraction(
  id: string,
  action: string,
  question?: string,
  category?: string
) {
  // No-op during UI dev. Replace with real analytics wiring when ready.
  return;
}
