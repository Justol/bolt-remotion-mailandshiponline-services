import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../constants";

export const ServiceSection: React.FC<{
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  index: number;
}> = ({ name, description, primaryColor, secondaryColor, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const fadeIn = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 200,
    },
  });

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
          transform: `translateX(${(1 - slideIn) * 1000}px)`,
          opacity: fadeIn,
          textAlign: "center",
          padding: 40,
        }}
      >
        <h2
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: primaryColor,
            marginBottom: 20,
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontSize: 32,
            color: secondaryColor,
          }}
        >
          {description}
        </p>
      </div>
    </AbsoluteFill>
  );
};