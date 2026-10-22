
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://portfolio-zeropoints.vercel.app";

export default function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ZeroPoint Labs`;
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = fullTitle;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, location.pathname]);

  return null;
}
