import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { Intro } from "./sections/Intro";
import { ServiceSection } from "./sections/ServiceSection";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";

export const shippingServicesSchema = z.object({
  companyName: z.string(),
  primaryColor: zColor(),
  secondaryColor: zColor(),
  website: z.string()
});

export const ShippingServices: React.FC<z.infer<typeof shippingServicesSchema>> = ({
  companyName,
  primaryColor,
  secondaryColor,
  website
}) => {
  const services = [
    {
      name: "USPS Services",
      description: "Priority Mail, First-Class, International Shipping",
      duration: 60, // 2 seconds
      startFrame: 450 // 15 seconds
    },
    {
      name: "FedEx Solutions",
      description: "Express, Ground, International Options",
      duration: 60,
      startFrame: 900 // 30 seconds
    },
    {
      name: "DHL Global Shipping",
      description: "Worldwide Express and Economy Services",
      duration: 60,
      startFrame: 1350 // 45 seconds
    },
    {
      name: "Freight Shipping",
      description: "LTL and Full Truckload Solutions",
      duration: 60,
      startFrame: 1800 // 60 seconds
    },
    {
      name: "Mailbox Rentals",
      description: "Secure, 24/7 Access to Your Mail",
      duration: 60,
      startFrame: 2250 // 75 seconds
    }
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <Sequence from={0} durationInFrames={450}>
        <Intro 
          companyName={companyName}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </Sequence>

      {services.map((service, index) => (
        <Sequence 
          key={service.name}
          from={service.startFrame}
          durationInFrames={service.duration * 30}
        >
          <ServiceSection
            name={service.name}
            description={service.description}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            index={index}
          />
        </Sequence>
      ))}

      <Sequence from={3600} durationInFrames={900}>
        <Testimonials
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </Sequence>

      <Sequence from={4500} durationInFrames={900}>
        <CallToAction
          companyName={companyName}
          website={website}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </Sequence>
    </AbsoluteFill>
  );
};