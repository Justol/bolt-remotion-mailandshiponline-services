// Font settings
export const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

// Animation settings
export const SPRING_CONFIG = {
  damping: 200,
};

// Common styles
export const commonStyles = {
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center" as const,
    padding: 40,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
  },
} as const;