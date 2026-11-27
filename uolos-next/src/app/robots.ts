import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

/** Technical files that should not appear in search results. */
const PRIVATE = ["/contact-form.html"];

/**
 * AI crawlers listed explicitly so their access is a visible decision.
 * Search/answer bots let the studio appear in ChatGPT, Claude, Perplexity and
 * Google AI answers (they also read /llms.txt). A bot that matches its own
 * group ignores the "*" group, so each group repeats the same disallow list.
 */
const AI_BOTS = [
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "Claude-SearchBot", "Claude-User", "ClaudeBot",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_BOTS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
