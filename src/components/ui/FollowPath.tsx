import React from 'react';

interface FollowPathProps {
  width?: number | string; // number or string
  height?: number | string;
  classNamesContainer?: string;
  classNamesSvg?: string;
  classNamesPath?: string;
}

const FollowPath: React.FC<FollowPathProps> = ({
  width = 300,
  height = 300,
  classNamesContainer = "absolute top-0 left-0",
  classNamesPath = "stroke-white stroke-solid stroke-12",
  classNamesSvg = "w-1/2 h-auto absolute top-0 left-0 rotate-180",
}) => {
  return (
    <div  className={"w-screen h-auto " + classNamesContainer}>
      {/* Component content goes here */}
{/*       <svg id="Ebene_2" className={classNamesSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.74 511.87">
        <path className={classNamesPath} d="M33.17,548.97c38.99,97.35,142.21,157.21,249.42,137.8,123.58-22.37,205.27-141.52,181.1-265.19-23.34-119.38-138.27-199.08-258.26-179.08C81.14,263.21-1.81,381.49,20.56,505.07c.34,2.08.94,4.11,1.81,6.03,71.22,156.34,246.56,243.56,418.46,198.67,184.91-48.29,298.53-231.88,262.45-416.89C662.29,82.66,446.15-46.08,241.8,18.04,48.8,78.6-.28,323.52,1.55,452.42c3.89,274.47,270.14,555.15,534.82,614.53,102.19,22.93,233.42,19.21,384,118,56.41,37.01,102.52,68.12,125,125,43.91,111.1-45.21,212.14-143,418-75.88,159.75-147.77,311.1-157,492-4.3,84.24-.34,279.64,143,511"/>
      </svg> */}
      <svg id="Ebene_2" width={width} height={height} className={classNamesSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1058.37 2731.74">
      <path style={{

        fill: "none",
        opacity: 0.43,
        stroke: "#006837",
        strokeMiterlimit: 10,
        strokeWidth: "13px"
        }} d="M33.17,548.97c38.99,97.35,142.21,157.21,249.42,137.8,123.58-22.37,205.27-141.52,181.1-265.19-23.34-119.38-138.27-199.08-258.26-179.08C81.14,263.21-1.81,381.49,20.56,505.07c.34,2.08.94,4.11,1.81,6.03,71.22,156.34,246.56,243.56,418.46,198.67,184.91-48.29,298.53-231.88,262.45-416.89C662.29,82.66,446.15-46.08,241.8,18.04,48.8,78.6-.28,323.52,1.55,452.42c3.89,274.47,270.14,555.15,534.82,614.53,102.19,22.93,233.42,19.21,384,118,56.41,37.01,102.52,68.12,125,125,43.91,111.1-45.21,212.14-143,418-75.88,159.75-147.77,311.1-157,492-4.3,84.24-.34,279.64,143,511"/></svg>

    </div>
  );
};

export default FollowPath;

