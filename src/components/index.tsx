import AlternatingSection from '../components/AlternatingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AlternatingSection
        title="Innovative Solutions"
        subtitle="Transforming Ideas into Reality"
        text="We specialize in turning complex concepts into user-friendly applications. Our team of experts works tirelessly to bring your vision to life, ensuring that every project we undertake is a testament to innovation and quality."
        imageUrl="/placeholder.svg?height=300&width=500"
        imageAlt="Innovative Solutions Illustration"
        isReversed={false}
      />
      <AlternatingSection
        title="Cutting-edge Technology"
        subtitle="Staying Ahead in a Digital World"
        text="Our commitment to utilizing the latest technologies ensures that our clients always stay ahead of the curve. From AI-driven solutions to blockchain applications, we're at the forefront of technological advancements."
        imageUrl="/placeholder.svg?height=300&width=500"
        imageAlt="Cutting-edge Technology Illustration"
        isReversed={true}
      />
      <AlternatingSection
        title="Customer-Centric Approach"
        subtitle="Your Success is Our Priority"
        text="We believe in building lasting relationships with our clients. Our customer-centric approach means that we're not just service providers, but partners in your success. We're dedicated to understanding your needs and delivering solutions that exceed expectations."
        imageUrl="/placeholder.svg?height=300&width=500"
        imageAlt="Customer-Centric Approach Illustration"
        isReversed={false}
      />
    </main>
  );
}

