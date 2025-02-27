import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = ({
    className="w-full h-full",
    ...props
  }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    opacity={0.87}
    {...props}
  >
    <defs>
      <filter
        id="a"
        width="140%"
        height="140%"
        x="-20%"
        y="-20%"
        colorInterpolationFilters="linearRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feTurbulence
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          baseFrequency={0.17}
          numOctaves={4}
          result="turbulence"
          seed={15}
          stitchTiles="stitch"
          type="fractalNoise"
        />
        <feSpecularLighting
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="turbulence"
          lightingColor="#50e3c2"
          result="specularLighting"
          specularConstant={0.6}
          specularExponent={20}
          surfaceScale={20}
        >
          <feDistantLight azimuth={3} elevation={114} />
        </feSpecularLighting>
        <feColorMatrix
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="specularLighting"
          result="colormatrix"
          type="saturate"
          values="0"
        />
      </filter>
    </defs>
    <path fill="transparent" d="M0 0h700v700H0z" />
    <path fill="#50e3c2" d="M0 0h700v700H0z" filter="url(#a)" />
  </svg>
)
export default SvgComponent
