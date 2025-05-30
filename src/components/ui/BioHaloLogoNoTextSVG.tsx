import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({
  className="w-full h-full",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 175.61 147.47"
    {...props}
  >
    <path
      d="M43.64 28.54C19.48 28.92 0 48.59 0 72.84s18.76 43.15 42.28 44.23C33.39 104.89 28.13 89.9 28.13 73.7c0-17.01 5.8-32.68 15.51-45.17Z"
      style={{
        fill: "#ca3072",
      }}
    />
    <path
      d="M85.46 72.77c0-16.25-9.54-30.23-23.3-36.77-9.34 9.83-15.09 23.11-15.09 37.71s5.26 26.72 13.89 36.41c14.42-6.27 24.51-20.62 24.51-37.35Z"
      style={{
        fill: "#c2dee0",
      }}
    />
    <path
      d="M28.13 73.74C28.13 33.08 61.21 0 101.87 0s73.74 33.08 73.74 73.74-33.08 73.74-73.74 73.74-73.74-33.08-73.74-73.74m128.55 0c0-30.22-24.59-54.81-54.81-54.81S47.06 43.52 47.06 73.74s24.58 54.81 54.81 54.81 54.81-24.59 54.81-54.81"
      style={{
        fill: "#305464",
      }}
    />
  </svg>
)
export default SvgComponent
