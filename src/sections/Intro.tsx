import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY, SPRING_CONFIG, commonStyles } from "../constants";

export const Intro: React.FC<{
  companyName: string;
  primaryColor: string;
  secondaryColor: string;
}> = ({ companyName, primaryColor, secondaryColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: SPRING_CONFIG,
  });

  const opacity = spring({
    frame: frame - 30,
    fps,
    config: SPRING_CONFIG,
  });

  return (
    <AbsoluteFill style={commonStyles.container}>
      <div
        style={{
          ...commonStyles.text,
          fontFamily: FONT_FAMILY,
          transform: `scale(${scale})`,
        }}
      >
        <h1
          style={{
            ...commonStyles.heading,
            fontSize: 80,
            color: primaryColor,
          }}
        >
          {companyName}
        </h1>
        <h2
          style={{
            fontSize: 48,
            color: secondaryColor,
            opacity,
          }}
        >
          Your One-Stop Shipping Solution
        </h2>
      </div>
    </AbsoluteFill>
  );
};