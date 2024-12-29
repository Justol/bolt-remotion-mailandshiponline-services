import { Composition } from "remotion";
import { ShippingServices, shippingServicesSchema } from "./ShippingServices";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ShippingServices"
        component={ShippingServices}
        durationInFrames={180 * 30} // 6 minutes at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={shippingServicesSchema}
        defaultProps={{
          companyName: "Mail & Ship Online",
          primaryColor: "#0066cc",
          secondaryColor: "#ff9900",
          website: "mailandshiponline.com/services"
        }}
      />
    </>
  );
};