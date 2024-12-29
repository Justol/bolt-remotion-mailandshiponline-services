import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../constants";

const testimonials = [
  {
    text: "Mail & Ship Online saved our business time and money with their competitive rates.",
    author: "John D., Small Business Owner"
  },
  {
    text: "The staff is knowledgeable and always helps me choose the best shipping option.",
    author: "Sarah M., Online Seller"
  },
  {
    text: "Their mailbox service gives me peace of mind for my business mail.",
    author: "Michael R., Entrepreneur"
  }
];

export const Testimonials: React.FC<{
  primaryColor: string;
  secondaryColor: string;
}> = ({ primaryColor, secondaryColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const currentTestimonial = Math.floor(frame / 60) % testimonials.length;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          opacity: fadeIn,
          textAlign: "center",
          padding: 40,
          maxWidth: 800,
        }}
      >
        <h2
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: primaryColor,
            marginBottom: 40,
          }}
        >
          What Our Customers Say
        </h2>
        <p
          style={{
            fontSize: 32,
            color: "gray",
            fontStyle: "italic",
            marginBottom: 20,
          }}
        >
          "{testimonials[currentTestimonial].text}"
        </p>
        <p
          style={{
            fontSize: 24,
            color: secondaryColor,
          }}
        >
          {testimonials[currentTestimonial].author}
        </p>
      </div>
    </AbsoluteFill>
  );
};