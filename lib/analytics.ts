export function trackFAQInteraction(
  id: string,
  action: string,
  question?: string,
  category?: string
) {
  // Minimal dev-only logging so arguments are used and to make it easier to wire real analytics later.
  if (process.env.NODE_ENV !== "production") {
    console.debug("trackFAQInteraction", { id, action, question, category });
  }
}
