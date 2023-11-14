"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalyticsWrapper = () => {
  return <GoogleAnalytics trackPageViews />;
};

export default GoogleAnalyticsWrapper;
