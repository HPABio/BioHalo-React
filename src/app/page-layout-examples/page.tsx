"use client";

import { AsymmetricalLayout } from "@/components/pageLayouts/AsymmetricalLayout";
import { FooterLayout } from "@/components/pageLayouts/FooterLayout";
import { HeaderLayout } from "@/components/pageLayouts/HeaderLayout";
import { CardsLayout } from "@/components/pageLayouts/CardsLayout";
import { FeaturedImageLayout } from "@/components/pageLayouts/FeaturedImageLayout";
import { BreadcrumbsLayout } from "@/components/pageLayouts/BreadcrumbsLayout";
import { SingleColumnLayout } from "@/components/pageLayouts/SingleColumnLayout";
import { FullscreenImageLayout } from "@/components/pageLayouts/FullscreenImageLayout";
import { MagazineLayout } from "@/components/pageLayouts/MagazineLayout";
import { ContentLayout } from "@/components/pageLayouts/ContentLayout";
import { HeroLayout } from "@/components/pageLayouts/HeroLayout";
import { BrokenGridLayout } from "@/components/pageLayouts/BrokenGridLayout";
import { SplitScreenLayout } from "@/components/pageLayouts/SplitScreenLayout";
import { GridLayout } from "@/components/pageLayouts/GridLayout";
import { SidebarLayout } from "@/components/pageLayouts/SidebarLayout";

// import { CardGridLayout } from "@/components/page-layouts/CardGridLayout";

export default function PageLayoutExamples() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Page Layout Examples
      </h1>

      <div className="space-y-16 pb-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Asymmetrical Layout
          </h2>
          <AsymmetricalLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Footer Layout</h2>
          <FooterLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Header Layout</h2>
          <HeaderLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Cards Layout</h2>
          <CardsLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Featured Image Layout
          </h2>
          <FeaturedImageLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Breadcrumbs Layout
          </h2>
          <BreadcrumbsLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Single Column Layout
          </h2>
          <SingleColumnLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Fullscreen Image Layout
          </h2>
          <FullscreenImageLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Magazine Layout</h2>
          <MagazineLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Content Layout</h2>
          <ContentLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Hero Layout</h2>
          <HeroLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Broken Grid Layout
          </h2>
          <BrokenGridLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Split Screen Layout
          </h2>
          <SplitScreenLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Grid Layout</h2>
          <GridLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Sidebar Layout</h2>
          <SidebarLayout />
        </section>

{/*         <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            Navigation Layout
          </h2>
          <NavigationLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">Card Grid Layout</h2>
          <CardGridLayout />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 px-4">CTA Layout</h2>
          <CtaLayout />
        </section> */}
      </div>
    </div>
  );
}
