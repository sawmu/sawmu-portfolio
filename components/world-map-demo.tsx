"use client";
import WorldMap from "@/components/ui/world-map";

export default function WorldMapDemo() {
  return (
    <div className="w-full px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
     <WorldMap
        dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Fairbanks → LA
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Fairbanks → Brasília
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },  // Brasília → Lisbon
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.2090 } },    // London → New Delhi
            { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 43.1332, lng: 131.9113 } },   // New Delhi → Vladivostok
            { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: -1.2921, lng: 36.8219 } },    // New Delhi → Nairobi

            // 🇲🇲 Myanmar (Naypyidaw)
            { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 19.7633, lng: 96.0785 } },

            // 🇳🇿 New Zealand (Auckland via Wellington)
            // { start: { lat: -41.2865, lng: 174.7762 }, end: { lat: -36.8485, lng: 174.7633 } },
            { start: { lat: -36.8485, lng: 174.7633 }, end: { lat: 28.6139, lng: 77.2090 } },

            // 🇦🇺 Australia (Sydney)
            { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -36.8485, lng: 174.7633 } }, // Sydney → Auckland
            { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: -33.8688, lng: 151.2093 } },   // New Delhi → Sydney
        ]}
    />


      </div>
    </div>
  );
}
