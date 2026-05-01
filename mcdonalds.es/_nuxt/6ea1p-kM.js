import { y as H, K as N } from "./w36zW0QG.js";
import { d as g, m as s, q as _ } from "./CG2MQ2lF.js";
const I = "user-location-data",
  S = "user-location-timestamp",
  K = 1440 * 60 * 1e3,
  k = 0.5,
  Y = 5e3,
  J = 1e4,
  V = 3e4,
  W = 1e4,
  B = H("userLocation", () => {
    const n = g(!1),
      d = g(!1),
      f = g(!1),
      c = g(null),
      {
        coords: t,
        locatedAt: C,
        error: u,
        isSupported: T,
        resume: D,
      } = N({
        immediate: !1,
        enableHighAccuracy: !0,
        maximumAge: V,
        timeout: W,
      }),
      p = () => {
        if (v(t.value))
          try {
            const e = {
              latitude: t.value.latitude,
              longitude: t.value.longitude,
              accuracy: t.value.accuracy,
            };
            (localStorage.setItem(I, JSON.stringify(e)),
              localStorage.setItem(S, Date.now().toString()));
          } catch (e) {
            console.error("Error saving location to localStorage:", e);
          }
      },
      G = () => {
        if (d.value) return ((d.value = !1), !1);
        try {
          if (!M()) return !1;
          const e = localStorage.getItem(I),
            a = localStorage.getItem(S);
          if (!e || !a) return !1;
          const l = parseInt(a);
          if (Date.now() - l >= K) return (y(), !1);
          const o = JSON.parse(e);
          return b(o)
            ? ((c.value = o),
              A(o),
              console.log("Using cached location from localStorage"),
              !0)
            : !1;
        } catch (e) {
          return (
            console.error("Error loading location from localStorage:", e),
            !1
          );
        }
      },
      y = () => {
        try {
          M() && (localStorage.removeItem(I), localStorage.removeItem(S));
        } catch (e) {
          console.error("Error clearing location from localStorage:", e);
        }
      },
      M = () => typeof window < "u" && typeof localStorage < "u",
      v = (e) =>
        !!(
          e?.latitude !== void 0 &&
          e?.longitude !== void 0 &&
          isFinite(e.latitude) &&
          isFinite(e.longitude)
        ),
      b = (e) =>
        typeof e == "object" &&
        e !== null &&
        typeof e.latitude == "number" &&
        typeof e.longitude == "number" &&
        isFinite(e.latitude) &&
        isFinite(e.longitude),
      P = (e, a, l, i) => {
        const r = ((l - e) * Math.PI) / 180,
          E = ((i - a) * Math.PI) / 180,
          F =
            Math.sin(r / 2) * Math.sin(r / 2) +
            Math.cos((e * Math.PI) / 180) *
              Math.cos((l * Math.PI) / 180) *
              Math.sin(E / 2) *
              Math.sin(E / 2);
        return 6371 * (2 * Math.atan2(Math.sqrt(F), Math.sqrt(1 - F)));
      },
      U = async () => {
        if (!c.value) return !1;
        const e = N({ immediate: !0, enableHighAccuracy: !0 });
        return new Promise((a) => {
          const l = setTimeout(() => a(!1), Y),
            i = _(e.coords, (o) => {
              if (!v(o) || !c.value) return;
              const r = P(
                c.value.latitude,
                c.value.longitude,
                o.latitude,
                o.longitude,
              );
              (clearTimeout(l),
                i(),
                r > k
                  ? (console.log(
                      `User has moved ${r.toFixed(2)}km from cached location`,
                    ),
                    A(o),
                    p(),
                    (f.value = !0),
                    a(!0))
                  : (console.log(
                      `User is still near cached location (${r.toFixed(2)}km)`,
                    ),
                    a(!1)));
            });
        });
      },
      A = (e) => {
        t.value = {
          ...t.value,
          latitude: e.latitude,
          longitude: e.longitude,
          accuracy: e.accuracy,
        };
      },
      m = s(() => {
        const e = t.value?.latitude;
        return e !== void 0 && isFinite(e) ? e : null;
      }),
      h = s(() => {
        const e = t.value?.longitude;
        return e !== void 0 && isFinite(e) ? e : null;
      }),
      $ = s(() => {
        const e = t.value?.accuracy;
        return e !== void 0 && isFinite(e) ? e : null;
      }),
      L = s(() => T.value && !u.value && m.value !== null && h.value !== null),
      x = s(() => {
        if (!L.value) return null;
        const e = m.value,
          a = h.value;
        if (e === null || a === null) return null;
        const l = e >= 0 ? "N" : "S",
          i = a >= 0 ? "E" : "W";
        return `${Math.abs(e).toFixed(4)}° ${l}, ${Math.abs(a).toFixed(4)}° ${i}`;
      }),
      R = async (e = !1) => {
        if (((n.value = !0), (f.value = !1), e && (d.value = !0), G())) {
          (await U(), (n.value = !1));
          return;
        }
        (D(),
          setTimeout(() => {
            n.value = !1;
          }, J));
      },
      O = () => {
        ((t.value = {
          latitude: void 0,
          longitude: void 0,
          accuracy: void 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        }),
          (u.value = null),
          (n.value = !1),
          (d.value = !1),
          (f.value = !1),
          (c.value = null));
      },
      q = () => {
        (y(), O());
      },
      w = () => {
        O();
      };
    return (
      _([t, u], () => {
        (v(t.value) || u.value) && ((n.value = !1), v(t.value) && p());
      }),
      {
        coords: t,
        locatedAt: C,
        error: u,
        isSupported: T,
        isLoading: n,
        locationChanged: f,
        latitude: m,
        longitude: h,
        accuracy: $,
        isGeolocationAvailable: L,
        formattedCoordinates: x,
        requestLocation: R,
        clearCurrentLocation: w,
        $reset: q,
      }
    );
  });
export { B as u };
