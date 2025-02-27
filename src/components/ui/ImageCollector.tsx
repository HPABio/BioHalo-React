"use client";

import { useState } from "react";
import Image1 from "@/assets/images/PFAS_product_images/textile-teaser.jpg";

// Get all image paths from the assets directory
const images = [
  {
    path: "PFAS_product_images/textile-teaser.jpg",
    size: "185 KB",
    type: "jpg",
  },
  {
    path: "PFAS_product_images/refinery-teaser.jpg",
    size: "185 KB",
    type: "jpg",
  },
  {
    path: "PFAS_product_images/packaging-teaser.jpg",
    size: "185 KB",
    type: "jpg",
  },
  {
    path: "PFAS_product_images/oil-gas-teaser.jpg",
    size: "185 KB",
    type: "jpg",
  },
  {
    path: "PFAS_product_images/mining-teaser.jpg",
    size: "185 KB",
    type: "jpg",
  },
  { path: "BioHaloDark.svg", size: "3.9 KB", type: "svg" },
  { path: "BioHaloLight.svg", size: "3.9 KB", type: "svg" },
  { path: "Fluorite-removebg-preview.png", size: "191 KB", type: "png" },
  { path: "BioHalo-background-compressed.jpeg", size: "2.2 MB", type: "jpeg" },
  { path: "droplets-dark.jpg", size: "185 KB", type: "jpg" },
  { path: "Droplets1.jpg", size: "75 KB", type: "jpg" },
  { path: "PFAS light.png", size: "961 KB", type: "png" },
  { path: "PFAS black2.png", size: "473 KB", type: "png" },
  { path: "PFAS black.png", size: "477 KB", type: "png" },
  { path: "PFAS black.jpg", size: "1.2 MB", type: "jpg" },
  { path: "PFAS light.jpg", size: "1.7 MB", type: "jpg" },
  { path: "3dEnzyme.jpg", size: "21 KB", type: "jpg" },
  { path: "logo.png", size: "144 KB", type: "png" },
];

interface ImageInfo {
  path: string;
  size: string;
  type: string;
}

export function ImageCollector() {
  const [filter, setFilter] = useState("");
  const [showCopyFormat, setShowCopyFormat] = useState<"import" | "path">(
    "path"
  );

  // Filter images based on search term
  const filteredImages = images.filter((img) =>
    img.path.toLowerCase().includes(filter.toLowerCase())
  );

  const copyToClipboard = (format: "import" | "path") => {
    const text = filteredImages
      .map((img) => {
        if (format === "import") {
          const varName = img.path
            .replace(/[^a-zA-Z0-9]/g, "")
            .replace(/^[0-9]/, "img$&");
          return `import ${varName} from "@/assets/images/${img.path}";`;
        }
        return `"@/assets/images/${img.path}"`;
      })
      .join("\n");

    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Filter images..."
          className="px-3 py-2 border rounded-lg flex-grow"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          className="px-3 py-2 border rounded-lg"
          value={showCopyFormat}
          onChange={(e) =>
            setShowCopyFormat(e.target.value as "import" | "path")
          }
        >
          <option value="path">Paths</option>
          <option value="import">Import Statements</option>
        </select>
        <button
          onClick={() => copyToClipboard(showCopyFormat)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Copy All
        </button>
      </div>

      <div className="space-y-2">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
          >
            <div>
              <p className="font-mono text-sm">{img.path}</p>
              <p className="text-xs text-gray-500">
                {img.size} • .{img.type}
              </p>
            </div>
            <button
              onClick={() => {
                const text =
                  showCopyFormat === "import"
                    ? `import ${img.path
                        .replace(/[^a-zA-Z0-9]/g, "")
                        .replace(/^[0-9]/, "img$&")} from "@/assets/images/${
                        img.path
                      }";`
                    : `"@/assets/images/${img.path}"`;
                navigator.clipboard.writeText(text);
              }}
              className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
