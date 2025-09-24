import { useState, useEffect, useRef, useCallback } from "react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Simple hook to load the Google Maps script in plain React
function useLoadGoogleMaps(apiKey) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  console.log("ANTANA");
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If already available, mark as loaded
    if (window.google?.maps) {
      setLoaded(true);
      return;
    }

    const scriptId = "google-maps-script";
    const existing = document.getElementById(scriptId);

    if (existing) {
      // If another instance is loading/loaded, watch for availability
      const check = () => {
        if (window.google?.maps) setLoaded(true);
      };
      const interval = setInterval(check, 100);
      check();
      return () => clearInterval(interval);
    }

    // Inject the script once
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    console.log("----------------------------------->", script.src);
    script.onload = () => {
      if (window.google?.maps) {
        setLoaded(true);
      } else {
        setError(
          new Error("Google Maps loaded but window.google.maps is unavailable")
        );
      }
    };
    script.onerror = () => {
      setError(new Error("Failed to load Google Maps script"));
    };

    document.head.appendChild(script);

    return () => {
      // Generally you wouldn't remove the script to avoid reloading across mounts
      // If you need teardown, you can remove it here.
    };
  }, [apiKey]);

  return { loaded, error };
}

export function MapWithAddress() {
  const [coords, setCoords] = useState(null);
  const mapRef = useRef(null);

  const address = "Via Tiburtina Valeria, 80, 65122 Pescara";

  // Load the Google Maps JS API (no Next.js Script)
  const { loaded: mapsLoaded, error: mapsError } =
    useLoadGoogleMaps(GOOGLE_MAPS_API_KEY);

  useEffect(() => {
    async function geocodeAddress() {
      const encoded = encodeURIComponent(address);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=${GOOGLE_MAPS_API_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "OK" && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoords({ lat, lng });
        } else {
          console.error("Geocoding error: ", data.status, data.error_message);
        }
      } catch (err) {
        console.error("Fetch geocoding failed:", err);
      }
    }

    geocodeAddress();
  }, []);

  const initMap = useCallback(() => {
    if (!coords || !mapRef.current || !window.google?.maps) return;

    const { maps } = window.google;

    const style = [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#46bcec" }, { visibility: "on" }],
      },
    ];

    const mapOptions = {
      center: coords,
      zoom: 16,
      panControl: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      // mapTypeId: maps.MapTypeId.ROADMAP,
      mapTypeId: maps.MapTypeId.SATELLITE,
      scrollwheel: false,
      styles: style,
    };

    const map = new maps.Map(mapRef.current, mapOptions);

    // SVG marker as data URI
    const svgMarker = {
      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <style type="text/css">
            .st0{opacity:0.19;}
            .st1{fill:#303646;}
            .st2{fill:#ffffff;}
            .st3{fill:#913D3D;}
          </style>
          <ellipse class="st0" cx="23.5" cy="44.7" rx="10.4" ry="3.3"/>
          <path class="st1" d="M23.5,0c-9.4,0-17,7.5-17,16.8s17,28,17,28s17-18.7,17-28S32.9,0,23.5,0z"/>
          <circle class="st2" cx="23.5" cy="15.5" r="4.2"/>
          <path class="st3" d="M23.5,12.2c2.2,0,3.9,1.6,4.2,3.8c0-0.2,0.1-0.3,0.1-0.5c0-2.3-1.9-4.2-4.2-4.2s-4.2,1.9-4.2,4.2
            c0,0.2,0,0.3,0.1,0.5C19.6,13.9,21.3,12.2,23.5,12.2z"/>
        </svg>
      `)}`,
      // Use maps.Size and maps.Point (not window.maps)
      scaledSize: new maps.Size(48, 48),
      anchor: new maps.Point(24, 48),
    };

    const marker = new maps.Marker({
      position: coords,
      map,
      icon: svgMarker,
      title: "Kairos SRLS - Viale Benedetto Croce 147, Chieti",
    });
    const svgLogo =
      //{
      // url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 95" width="141" height="105" class="sc-bHCmUC bBRGgM"><path fill-rule="evenodd" d="m36.2 42.9q17.4 0 34.8 0c0.9 0 0.9 0 0.9 0.8q0 3.3 0 6.5c0 0.4-0.1 0.7-0.5 0.9-7.2 3.1-13.8 7.3-19.9 12.2-3.1 2.4-6 5.1-8.7 8-4 4.4-7.7 9.2-10.4 14.5-1.3 2.6-2.4 5.2-3.6 7.8-0.2 0.4-0.3 0.5-0.7 0.5q-3.4 0-6.9 0c-0.5 0-0.6-0.2-0.6-0.7q0-8.5 0-17.1 0-11.6 0-23.1 0-0.9 0-1.9c0-0.4-0.2-0.5-0.6-0.5q-1.4 0-2.9 0-7.8 0-15.6 0c-0.2 0-0.4 0-0.6-0.1-0.1 0-0.4-0.2-0.4-0.4q0-3.5 0-7c0-0.4 0.2-0.5 0.5-0.4q0.9 0 1.8 0 16.7 0 33.4 0zm-7.5 35.4q0.1 0.1 0.2 0.1 0.1-0.3 0.3-0.5 3.3-6.5 8.2-12c3-3.5 6.4-6.5 10.2-9.2 2.7-2 5.6-3.7 8.6-5.3 0.2-0.1 0.3-0.3 0.5-0.5-0.2 0-0.4-0.1-0.6-0.1q-13.1 0-26.2 0c-1.3 0-1.3 0-1.3 1.3q0 12.7 0 25.5c0 0.2 0.1 0.5 0.1 0.7z"></path><path d="m28.6 19.5q0 9.2 0 18.5c0 0.8 0 0.8-0.8 0.8q-3.2 0-6.4 0c-0.8 0-0.8 0-0.8-0.8q0-17.9 0-35.7 0-0.9 0-1.7c0-0.4 0.1-0.6 0.6-0.6q3.4 0 6.8 0c0.5 0 0.6 0.2 0.6 0.6q0 0.8 0 1.7 0 8.6 0 17.2z"></path><path d="m33.5 27.8c0-1.4 0-2.5-0.1-3.6h2.2l0.1 2.1h0.1c0.7-1.2 2-2.4 4.2-2.4 1.8 0 3.2 1.1 3.8 2.7 0.5-0.8 1-1.4 1.5-1.8 0.9-0.6 1.7-0.9 3-0.9 1.8 0 4.5 1.1 4.5 5.8v7.9h-2.4v-7.6c0-2.6-1-4.1-3-4.1-1.4 0-2.4 1-2.9 2.2-0.1 0.3-0.2 0.8-0.2 1.2v8.3h-2.3v-8c0-2.2-1-3.7-2.9-3.7-1.5 0-2.6 1.2-3 2.4q-0.2 0.6-0.2 1.2v8.1h-2.4z"></path><path fill-rule="evenodd" d="m56.6 37.6c0.1-0.9 0.1-2.2 0.1-3.4v-16.3h2.5v8.4c0.9-1.5 2.4-2.4 4.6-2.4 3.3 0 5.7 2.7 5.7 6.8 0 4.9-3.1 7.2-6.1 7.2-1.9 0-3.5-0.7-4.5-2.5h-0.1l-0.1 2.2zm2.6-5.4q0 0.5 0.1 0.9c0.5 1.7 1.9 2.9 3.7 2.9 2.5 0 4-2.1 4-5.2 0-2.7-1.3-5-4-5-1.6 0-3.2 1.2-3.7 3 0 0.3-0.1 0.6-0.1 1z"></path><path fill-rule="evenodd" d="m80 37.6l-0.2-1.7h-0.1c-0.7 1.1-2.2 2-4.1 2-2.7 0-4.1-1.9-4.1-3.8 0-3.3 2.9-5.1 8.1-5v-0.3c0-1.1-0.3-3.1-3.1-3.1-1.2 0-2.5 0.4-3.5 1l-0.5-1.6c1.1-0.8 2.7-1.2 4.4-1.2 4.1 0 5.1 2.8 5.1 5.5v5c0 1.2 0.1 2.3 0.2 3.2zm-0.3-6.8c-2.7-0.1-5.7 0.4-5.7 3 0 1.6 1 2.3 2.3 2.3 1.7 0 2.9-1.1 3.2-2.2q0.2-0.4 0.2-0.8z"></path><path d="m85.6 35.1c0.8 0.5 2 1 3.3 1 1.8 0 2.6-0.9 2.6-2 0-1.2-0.7-1.8-2.5-2.5-2.4-0.8-3.6-2.2-3.6-3.8 0-2.2 1.8-3.9 4.7-3.9 1.3 0 2.5 0.4 3.3 0.8l-0.6 1.8c-0.6-0.4-1.5-0.8-2.8-0.8-1.4 0-2.2 0.8-2.2 1.8 0 1.2 0.8 1.7 2.5 2.3 2.4 0.9 3.6 2.1 3.6 4.1 0 2.3-1.9 4-5.1 4-1.5 0-2.8-0.3-3.8-0.9z"></path><path d="m99.9 20.3v3.9h3.6v1.8h-3.6v7.3c0 1.7 0.5 2.6 1.9 2.6 0.6 0 1.1-0.1 1.4-0.2l0.1 1.9c-0.5 0.2-1.2 0.3-2.2 0.3-1.1 0-2-0.3-2.6-1-0.7-0.7-0.9-1.9-0.9-3.5v-7.4h-2.1v-1.8h2.1v-3.3z"></path><path fill-rule="evenodd" d="m113.7 37.6l-0.2-1.7h-0.1c-0.8 1.1-2.2 2-4.1 2-2.8 0-4.1-1.9-4.1-3.8 0-3.3 2.8-5.1 8-5v-0.3c0-1.1-0.3-3.1-3-3.1-1.3 0-2.6 0.4-3.5 1l-0.6-1.6c1.1-0.8 2.8-1.2 4.5-1.2 4.1 0 5.1 2.8 5.1 5.5v5c0 1.2 0 2.3 0.2 3.2zm-0.4-6.8c-2.6-0.1-5.7 0.4-5.7 3 0 1.6 1.1 2.3 2.3 2.3 1.8 0 2.9-1.1 3.3-2.2q0.1-0.4 0.1-0.8z"></path><path d="m119.6 28.4c0-1.6 0-3-0.1-4.2h2.2v2.6h0.1c0.7-1.8 2.1-2.9 3.8-2.9 0.3 0 0.5 0 0.7 0v2.4c-0.3-0.1-0.5-0.1-0.9-0.1-1.7 0-2.9 1.3-3.2 3.1q-0.1 0.5-0.2 1.2v7.1h-2.4z"></path><path fill-rule="evenodd" d="m140.6 30.8c0 5-3.4 7.1-6.7 7.1-3.6 0-6.4-2.6-6.4-6.9 0-4.5 2.9-7.1 6.6-7.1 3.9 0 6.5 2.8 6.5 6.9zm-10.7 0.1c0 3 1.7 5.2 4.1 5.2 2.4 0 4.1-2.2 4.1-5.2 0-2.3-1.1-5.2-4-5.2-2.9 0-4.2 2.7-4.2 5.2z"></path><path class="a" d="m34.5 15.2c0.2 0.8 0.7 1.4 1.8 1.4 1.2 0 1.7-0.6 1.7-1.3 0-0.8-0.4-1.2-1.8-1.6-1.4-0.3-2-0.8-2-1.7 0-0.9 0.7-1.7 2-1.7 1.5 0 2.1 0.9 2.2 1.7h-0.6c-0.1-0.7-0.6-1.2-1.6-1.2-0.9 0-1.4 0.4-1.4 1.2 0 0.7 0.4 1 1.6 1.3 1.8 0.4 2.1 1.1 2.1 1.9 0 1-0.7 1.8-2.2 1.8-1.6 0-2.2-1-2.3-1.8z"></path><path class="a" d="m43.1 10.9h-2.2v-0.5h4.9v0.5h-2.2v6h-0.5z"></path><path class="a" d="m49.2 10.4v4c0 1.7 0.9 2.1 1.9 2.1 1 0 1.8-0.4 1.8-2.1v-4h0.6v3.9c0 2.1-1.1 2.7-2.5 2.7-1.2 0-2.4-0.7-2.4-2.6v-4z"></path><path fill-rule="evenodd" class="a" d="m57.1 10.4h2.2c1.8 0 3 1.3 3 3.2 0 2-1.2 3.3-3 3.3h-2.2zm0.5 6h1.6c1.7 0 2.6-1.2 2.6-2.8 0-1.4-0.8-2.7-2.6-2.7h-1.6z"></path><path class="a" d="m66.1 10.4v6.5h-0.5v-6.5z"></path><path fill-rule="evenodd" class="a" d="m75.2 13.6c0 1.8-0.9 3.4-2.9 3.4-1.9 0-2.9-1.5-2.9-3.3 0-1.9 1-3.4 2.9-3.4 1.8 0 2.9 1.4 2.9 3.3zm-5.3 0c0 1.5 0.8 3 2.4 3 1.7 0 2.4-1.4 2.4-3 0-1.5-0.8-2.8-2.4-2.8-1.7 0-2.4 1.4-2.4 2.8z"></path></svg>
      `;
    // )}`,
    //};
    const contentString = `<div>
        ${svgLogo}
        <p>P.Iva 02132540689<p>
        <p>
          Via Tiburtina Valeria, 80<br />
          65122 Pescara (PE) - Italia<br /><br />
          Email: <a style="color:#333" href="mailto:info@studioimbastaro.it" title="Email - STUDIO TECNICO IMBASTARO">info@studioimbastaro.it</a><br />
          Tel: <a style="color:#333" href="tel:00390852044410">(+39) 085 2044410</a><br />
          Mobile: <a style="color:#333" href="tel:00393343724858">(+39) 334 3724858</a><br />
        </p>
      </div>`;

    const infowindow = new maps.InfoWindow({ content: contentString });

    // Smooth zoom helper
    const smoothZoom = (mapInstance, max, cnt) => {
      if (cnt >= max) return;
      const listener = maps.event.addListener(
        mapInstance,
        "zoom_changed",
        () => {
          maps.event.removeListener(listener);
          smoothZoom(mapInstance, max, cnt + 1);
        }
      );
      setTimeout(() => mapInstance.setZoom(cnt), 80);
    };

    // Ensure marker clickable & debug
    marker.setClickable?.(true);
    console.log("Map & marker created", { coords });

    const clickListener = marker.addListener("click", () => {
      console.log("marker clicked (marker.addListener)");
      infowindow.open({ anchor: marker, map });
      map.panTo(marker.getPosition());
      smoothZoom(map, 20, map.getZoom() ?? 15);
    });

    const centerListener = map.addListener("center_changed", () => {
      window.setTimeout(() => {
        const pos = marker.getPosition();
        if (pos) map.panTo(pos);
      }, 500);
    });

    // Return cleanup function so our effect can unsubscribe listeners
    return () => {
      if (clickListener) maps.event.removeListener(clickListener);
      if (centerListener) maps.event.removeListener(centerListener);
      maps.event.clearListeners(marker, "click");
      maps.event.clearListeners(map, "center_changed");
      // marker.setMap(null); // optional teardown
    };
  }, [coords]);

  // Initialize the map once the script is loaded and we have coordinates
  useEffect(() => {
    if (!mapsLoaded || !coords) return;
    const cleanup = initMap();
    return cleanup;
  }, [mapsLoaded, coords, initMap]);

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        marginTop: "100px",
        position: "relative",
      }}
    >
      <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
        {!coords && <p>Loading map...</p>}
        {coords && !mapsLoaded && <p>Loading Google Maps...</p>}
        {mapsError && <p>Failed to load Google Maps.</p>}
      </div>
    </div>
  );
}
