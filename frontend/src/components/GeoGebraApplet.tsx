import { useEffect, useRef } from "react";

interface GeoGebraAppletProps {
  appletId: string;
  xmlFilePath: string;
}

export default function GeoGebraApplet({ appletId, xmlFilePath }: GeoGebraAppletProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadApplet() {
      if (containerRef.current) {
        // Wait for the GeoGebra API to load
        if (!(window as any).GGBApplet) {
          console.error("GeoGebra API is not loaded. Ensure the deployggb.js script is included.");
          return;
        }

        const response = await fetch(xmlFilePath);
        const xml = await response.text();

        const params = {
          id: appletId,
          appName: "notes",
          width: 950,
          height: 600,
          showToolBar: true,
          showAlgebraInput: true,
          showMenuBar: false,
        };

        const applet = new (window as any).GGBApplet(params, true);

        // Wait for the applet to fully load before calling setXML
        applet.inject(containerRef.current, "preferHTML5");
        applet.setXML = applet.setXML || (() => console.warn("setXML is not available"));

        applet.setXML(xml);
      }
    }

    loadApplet();
  }, [appletId, xmlFilePath]);

  return <div ref={containerRef}></div>;
}