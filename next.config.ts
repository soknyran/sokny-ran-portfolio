import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The resume used to be published as a "CV"; keep links shared on LinkedIn/GitHub working.
        source: "/resume/sokny-ran-cv.pdf",
        destination: "/resume/sokny-ran-resume.pdf",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
