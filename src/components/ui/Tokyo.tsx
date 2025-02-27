import React from "react";
import "../customCSS/tokyo.css";
import Image from "next/image";
import Image1 from "@/assets/images/3dEnzyme.jpg";
import Image2 from "@/assets/images/3dEnzyme.jpg";
import Image3 from "@/assets/images/3dEnzyme.jpg";

export default function Tokyo() {
  return (
    <main className="tokyo-main">
      <div className="tokyo-container">
        <div className="tokyo-column">
          <div className="tokyo-item tokyo-item-1-1">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-1-2">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-1-3">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
        </div>

        <div className="tokyo-column">
          <div className="tokyo-item tokyo-item-2-1">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-2-2">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-2-3">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
        </div>

        <div className="tokyo-column">
          <div className="tokyo-item tokyo-item-3-1">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-3-2">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
          <div className="tokyo-item tokyo-item-3-3">
            <Image
              src={Image1}
              alt="Image 1"
              className="tokyo-image tokyo-image-1"
              fill
            />
            <Image
              src={Image2}
              alt="Image 2"
              className="tokyo-image tokyo-image-2"
              fill
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="tokyo-image tokyo-image-3"
              fill
            />
          </div>
        </div>
      </div>
    </main>
  );
}
