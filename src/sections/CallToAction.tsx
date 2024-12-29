import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../constants";

export const CallToAction: React.FC<{
  companyName: string;
  website: string;
  primaryColor: string;
  secondaryColor: string;
}> = ({ companyName, website, primaryColor, secondaryColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
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
          transform: `scale(${scale})`,
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
          Visit Us Today
        </h2>
        <p
          style={{
            fontSize: 32,
            color: "gray",
            marginBottom: 40,
          }}
        >
          Experience the {companyName} difference
        </p>
        <div
          style={{
            fontSize: 48,
            color: secondaryColor,
            fontWeight: "bold",
          }}
        >
          {website}
        </div>
      </div>
    </AbsoluteFill>
  );
};