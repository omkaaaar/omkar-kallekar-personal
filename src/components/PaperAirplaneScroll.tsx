"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";

interface Point {
  x: number;
  y: number;
}

/**
 * Converts an array of 2D waypoints into a C1-continuous cubic Bezier SVG path (Catmull-Rom spline).
 */
function catmullRom2bezier(points: Point[], tension: number = 1): string {
  const n = points.length;
  if (n < 2) return "";

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 =
      i > 0
        ? points[i - 1]
        : {
            x: 2 * points[0].x - points[1].x,
            y: 2 * points[0].y - points[1].y,
          };
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 =
      i < n - 2
        ? points[i + 2]
        : {
            x: 2 * points[n - 1].x - points[n - 2].x,
            y: 2 * points[n - 1].y - points[n - 2].y,
          };

    const cp1x = p1.x + (p2.x - p0.x) / (6 * tension);
    const cp1y = p1.y + (p2.y - p0.y) / (6 * tension);
    const cp2x = p2.x - (p3.x - p1.x) / (6 * tension);
    const cp2y = p2.y - (p3.y - p1.y) / (6 * tension);

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function PaperAirplaneScroll() {
  const planeRef = useRef<HTMLDivElement>(null);
  const innerPlaneRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const trailGlowRef = useRef<SVGPathElement>(null);

  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Viewport dimensions
    let vWidth = window.innerWidth || 1200;
    let vHeight = window.innerHeight || 800;

    // Default cursor orientation: -135deg points nose to top-left, wings trailing down-right
    let targetX = vWidth * 0.72;
    let targetY = vHeight * 0.28;
    let currentX = targetX;
    let currentY = targetY;
    let currentAngle = -135;
    let loopAngleOffset = 0;
    let currentBank = 0;
    let targetBank = 0;
    let idleCounter = 0;
    let isStuntActive = false;
    let boostOffset = 0;

    // Trail breadcrumbs
    const trailPoints: Point[] = [];
    const maxTrailLength = 34;

    // Scroll tracking for airflow & contrail when pointer is idle
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocityY = 0;

    // Position airplane initially with nose tip (0, 0) directly at target
    if (planeRef.current) {
      planeRef.current.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0px) rotate(${currentAngle}deg)`;
    }

    // Pointer move listener (mouse + touch)
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      targetX = clientX;
      targetY = clientY;

      // Detect hover over interactive elements (buttons, links, inputs)
      const element = document.elementFromPoint(clientX, clientY);
      const isClickable = !!element?.closest(
        "a, button, [role='button'], input, textarea, select, .clickable"
      );

      if (!isStuntActive) {
        const targets = [
          innerPlaneRef.current,
          trailRef.current,
          trailGlowRef.current,
        ].filter(Boolean);

        gsap.to(targets, {
          scale: isClickable ? 0 : 1,
          opacity: isClickable ? 0 : 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    // Window mouse enter/leave visibility
    const handleMouseEnter = () => {
      if (planeRef.current) {
        gsap.to(planeRef.current, { opacity: 1, duration: 0.15 });
      }
    };

    const handleMouseLeave = () => {
      if (planeRef.current) {
        gsap.to(planeRef.current, { opacity: 0, duration: 0.2 });
      }
    };

    // ==========================================
    // 1. LEFT CLICK ANIMATION: Turbo Barrel Roll
    // ==========================================
    const triggerLeftClickAnimation = () => {
      if (!innerPlaneRef.current || isStuntActive) return;

      // Snappy forward tap
      gsap.to({ val: 12 }, {
        val: 0,
        duration: 0.35,
        ease: "power3.out",
        onUpdate: function () {
          boostOffset = this.targets()[0].val;
        },
      });

      // 360 Fast Barrel Roll around flight axis
      gsap.timeline()
        .to(innerPlaneRef.current, {
          rotateX: "+=360",
          scale: 1.25,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(innerPlaneRef.current, {
          scale: 1,
          duration: 0.18,
          ease: "back.out(2)",
        });
    };

    // ==========================================
    // 2. RIGHT CLICK ANIMATION: Aerial 360° Loop-de-Loop Stunt
    // ==========================================
    const triggerRightClickAnimation = () => {
      if (isStuntActive) return;
      isStuntActive = true;

      const stuntObj = { angle: 0, scale: 1 };

      gsap.timeline({
        onComplete: () => {
          loopAngleOffset = 0;
          isStuntActive = false;
        },
      })
        .to(stuntObj, {
          angle: -360,
          scale: 1.35,
          duration: 0.75,
          ease: "power2.inOut",
          onUpdate: () => {
            loopAngleOffset = stuntObj.angle;
            if (innerPlaneRef.current) {
              gsap.set(innerPlaneRef.current, { scale: stuntObj.scale });
            }
          },
        })
        .to(stuntObj, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          onUpdate: () => {
            if (innerPlaneRef.current) {
              gsap.set(innerPlaneRef.current, { scale: stuntObj.scale });
            }
          },
        });
    };

    // Mouse button click feedback & dispatcher
    const handleMouseDown = (e: MouseEvent) => {
      if (innerPlaneRef.current && !isStuntActive) {
        gsap.to(innerPlaneRef.current, { scale: 0.9, duration: 0.08 });
      }

      if (e.button === 0) {
        triggerLeftClickAnimation();
      } else if (e.button === 2) {
        if (!e.shiftKey && !e.ctrlKey) {
          triggerRightClickAnimation();
        }
      }
    };

    const handleMouseUp = () => {
      if (innerPlaneRef.current && !isStuntActive) {
        gsap.to(innerPlaneRef.current, { scale: 1, duration: 0.15, ease: "back.out(2)" });
      }
    };

    // Right click context menu interception (allows stunt unless holding Shift/Ctrl)
    const handleContextMenu = (e: MouseEvent) => {
      if (!e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        triggerRightClickAnimation();
      }
    };

    // Resize handler
    const handleResize = () => {
      vWidth = window.innerWidth || 1200;
      vHeight = window.innerHeight || 800;
    };

    // High performance ticker loop running at 60-120fps with direct DOM updates (0 React re-renders)
    const updateFlight = () => {
      // 0. Track page scroll velocity for realistic airflow and trail when idle
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop || 0;
      const rawScrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Dampened scroll velocity decay
      scrollVelocityY = scrollVelocityY * 0.75 + rawScrollDelta * 0.25;

      // Drift existing trail points with page scroll so the trail feels anchored to the world
      if (Math.abs(rawScrollDelta) > 0.1) {
        for (let i = 0; i < trailPoints.length; i++) {
          trailPoints[i].y -= rawScrollDelta;
        }
      }

      // 1. Calculate delta to mouse target (Nose tip locked directly to cursor)
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // High-precision tracking: cursor responsiveness with zero drag lag
      const followFactor = prefersReducedMotion ? 0.7 : 0.48;
      currentX += dx * followFactor;
      currentY += dy * followFactor;

      if (Math.abs(dx) < 0.15) currentX = targetX;
      if (Math.abs(dy) < 0.15) currentY = targetY;

      const vx = dx * followFactor;
      const vy = dy * followFactor;

      // Combine cursor movement with scroll airflow velocity
      const effectiveVy = vy + scrollVelocityY * 0.45;
      const effectiveSpeed = Math.hypot(vx, effectiveVy);

      // 2. Heading and Banking
      if (effectiveSpeed > 0.35 && !prefersReducedMotion && !isStuntActive) {
        const targetAngle = (Math.atan2(effectiveVy, vx) * 180) / Math.PI;

        let diff = targetAngle - currentAngle;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;

        currentAngle += diff * 0.25;
        targetBank = Math.max(-35, Math.min(35, diff * 2.2));
        idleCounter = 0;
      } else if (!isStuntActive) {
        targetBank = 0;
        idleCounter += 0.03;

        // When stationary, gracefully ease back toward the classic top-left cursor angle (-135deg)
        let idleDiff = -135 - currentAngle;
        while (idleDiff < -180) idleDiff += 360;
        while (idleDiff > 180) idleDiff -= 360;
        currentAngle += idleDiff * 0.05;
      }

      currentBank += (targetBank - currentBank) * 0.15;

      // 3. Compute final airplane position: nose tip (0, 0) is placed EXACTLY at (boostedX, boostedY)
      const totalAngle = currentAngle + loopAngleOffset;
      const totalRad = (totalAngle * Math.PI) / 180;
      const boostedX = currentX + boostOffset * Math.cos(totalRad);
      const boostedY = currentY + boostOffset * Math.sin(totalRad);

      if (planeRef.current) {
        // With transformOrigin at 0px 0px, translating to (boostedX, boostedY) guarantees
        // the sharp nose tip is pixel-for-pixel at the exact click point at EVERY rotation angle!
        planeRef.current.style.transform = `translate3d(${boostedX.toFixed(1)}px, ${boostedY.toFixed(1)}px, 0px) rotate(${totalAngle.toFixed(1)}deg) rotateX(${currentBank.toFixed(1)}deg)`;
      }

      // 4. Update Contrail Trail (emitting directly from the tail, 48px behind the nose tip)
      if (!prefersReducedMotion) {
        const tailX = boostedX - 48 * Math.cos(totalRad);
        const tailY = boostedY - 48 * Math.sin(totalRad);

        if (
          effectiveSpeed > 0.35 ||
          Math.abs(scrollVelocityY) > 0.6 ||
          isStuntActive ||
          boostOffset > 2
        ) {
          trailPoints.unshift({ x: tailX, y: tailY });
          if (trailPoints.length > maxTrailLength) {
            trailPoints.pop();
          }
        } else if (trailPoints.length > 0) {
          trailPoints.pop();
        }

        // Trim points that drifted far off-screen
        while (
          trailPoints.length > 0 &&
          (trailPoints[trailPoints.length - 1].y < -250 ||
            trailPoints[trailPoints.length - 1].y > vHeight + 250)
        ) {
          trailPoints.pop();
        }

        const pathString = catmullRom2bezier(trailPoints, 1.2);

        if (trailRef.current) {
          trailRef.current.setAttribute("d", pathString);
        }
        if (trailGlowRef.current) {
          trailGlowRef.current.setAttribute("d", pathString);
        }
      }
    };

    // Register ticker with GSAP
    gsap.ticker.add(updateFlight);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(updateFlight);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted) return null;

  const dropShadowStyle = isDark
    ? "drop-shadow(0px 8px 16px rgba(99, 102, 241, 0.45)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6))"
    : "drop-shadow(0px 6px 14px rgba(30, 27, 75, 0.16)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08))";

  return (
    <>
      {/* Global CSS for Hybrid Cursor: hide cursor on general page, restore pointer on interactive elements */}
      <style>{`
        @media (pointer: fine) {
          html, body, * {
            cursor: none !important;
          }
          a, button, input, textarea, select, [role="button"], .clickable,
          a *, button *, input *, textarea *, select *, [role="button"] *, .clickable * {
            cursor: pointer !important;
          }
        }
      `}</style>

      <div
        className="pointer-events-none fixed inset-0 z-[9999] h-full w-full overflow-hidden"
        aria-hidden="true"
        style={{ perspective: 1000 }}
      >
        {/* 1. Full-screen Contrail Ribbon Trail */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="mouse-trail-glow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
            </filter>

            {/* Dynamic Contrail Main Gradient */}
            <linearGradient id="plane-trail-grad" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                stopColor={isDark ? "#818cf8" : "#6366f1"}
                stopOpacity="0.9"
              />
              <stop
                offset="50%"
                stopColor={isDark ? "#c084fc" : "#8b5cf6"}
                stopOpacity="0.75"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#38bdf8" : "#38bdf8"}
                stopOpacity="0"
              />
            </linearGradient>

            {/* Contrail Soft Atmospheric Glow */}
            <linearGradient id="plane-trail-glow-grad" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                stopColor={isDark ? "#818cf8" : "#6366f1"}
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#c084fc" : "#a855f7"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Soft glowing trail halo */}
          <path
            ref={trailGlowRef}
            d=""
            stroke="url(#plane-trail-glow-grad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#mouse-trail-glow)"
            fill="none"
          />

          {/* Crisp core contrail */}
          <path
            ref={trailRef}
            d=""
            stroke="url(#plane-trail-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* 2. Floating 3D Origami Airplane (Nose tip is at exactly 0,0) */}
        <div
          ref={planeRef}
          className="pointer-events-none absolute left-0 top-0 will-change-transform"
          style={{
            transformOrigin: "0px 0px",
            filter: dropShadowStyle,
          }}
        >
          <svg
            ref={innerPlaneRef}
            width="1"
            height="1"
            viewBox="0 0 1 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none overflow-visible"
            style={{ transformOrigin: "0px 0px" }}
          >
            <defs>
              {/* Top Wing Gradient */}
              <linearGradient id="mouse-wing-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor={isDark ? "#e2e8f0" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#cbd5e1" : "#e0e7ff"} />
              </linearGradient>

              {/* Crease / Spine Highlight */}
              <linearGradient id="mouse-crease" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={isDark ? "#cbd5e1" : "#f1f5f9"} />
                <stop offset="100%" stopColor={isDark ? "#94a3b8" : "#cbd5e1"} />
              </linearGradient>

              {/* Keel / Underside Color Accent */}
              <linearGradient id="mouse-keel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={isDark ? "#818cf8" : "#6366f1"} />
                <stop offset="100%" stopColor={isDark ? "#4f46e5" : "#4338ca"} />
              </linearGradient>

              {/* Bottom Wing Shaded Facet */}
              <linearGradient id="mouse-wing-bottom" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={isDark ? "#4f46e5" : "#c7d2fe"} />
                <stop offset="100%" stopColor={isDark ? "#312e81" : "#a5b4fc"} />
              </linearGradient>
            </defs>

            {/* 1. Main Top Wing (nose tip is precisely at 0, 0) */}
            <path
              d="M 0 0 L -44 -18 L -36 -3 Z"
              fill="url(#mouse-wing-top)"
              stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(99,102,241,0.35)"}
              strokeWidth="0.6"
            />

            {/* 2. Top Fold Crease */}
            <path
              d="M 0 0 L -36 -3 L -48 0 Z"
              fill="url(#mouse-crease)"
              stroke={isDark ? "rgba(255,255,255,0.25)" : "rgba(99,102,241,0.25)"}
              strokeWidth="0.6"
            />

            {/* 3. Underside Purple Keel Accent */}
            <path
              d="M 0 0 L -48 0 L -34 5 Z"
              fill="url(#mouse-keel)"
              stroke={isDark ? "rgba(165,180,252,0.6)" : "rgba(67,56,202,0.5)"}
              strokeWidth="0.6"
            />

            {/* 4. Bottom Shaded Wing */}
            <path
              d="M 0 0 L -34 5 L -42 16 L -22 5 Z"
              fill="url(#mouse-wing-bottom)"
              stroke={isDark ? "rgba(129,140,248,0.5)" : "rgba(99,102,241,0.4)"}
              strokeWidth="0.6"
            />

            {/* 5. Center Crisp Hairline Spine */}
            <line
              x1="0"
              y1="0"
              x2="-48"
              y2="0"
              stroke={isDark ? "#c7d2fe" : "#4338ca"}
              strokeWidth="1"
              strokeOpacity={isDark ? 0.9 : 0.7}
            />
          </svg>
        </div>
      </div>
    </>
  );
}
