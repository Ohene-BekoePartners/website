"use client";

import * as React from "react";
import Link from "next/link";
import { Nav, navItems, isNavDropdown } from "./Nav";
import { SiteLogo } from "./SiteLogo";

const SCROLL_THRESHOLD = 80;
const MENU_TRANSITION_MS = 300;

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [animatedOpen, setAnimatedOpen] = React.useState(false);
  /** At most one dropdown open at a time (accordion). Value is the parent `label` (e.g. "Our Team", "Insights"). */
  const [openMobileDropdown, setOpenMobileDropdown] = React.useState<
    string | null
  >(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement | null>(null);
  /** Guards focus restore so it only runs after a menu that was genuinely opened. */
  const hasOpenedRef = React.useRef(false);

  React.useEffect(() => {
    setIsScrolled(
      typeof window !== "undefined" ? window.scrollY > SCROLL_THRESHOLD : false,
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      setAnimatedOpen(false);
      const t = setTimeout(() => setAnimatedOpen(true), 20);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
      setAnimatedOpen(false);
      setOpenMobileDropdown(null);
    }
  }, [menuOpen]);

  const finishClose = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMenuOpen(false);
    setClosing(false);
    // Return focus to the trigger, otherwise it lands on <body> when the panel unmounts.
    if (hasOpenedRef.current) {
      hasOpenedRef.current = false;
      menuButtonRef.current?.focus();
    }
  }, []);

  const closeMenu = React.useCallback(() => {
    setClosing(true);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(finishClose, MENU_TRANSITION_MS + 80);
  }, [finishClose]);

  const handleTransitionEnd = React.useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "transform") return;
      if (closing) finishClose();
    },
    [closing, finishClose],
  );

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  /** Move focus into the dialog once it has mounted. */
  React.useEffect(() => {
    if (!menuOpen) return;
    hasOpenedRef.current = true;
    closeButtonRef.current?.focus();
  }, [menuOpen]);

  /**
   * While the dialog is open: Escape closes it, and Tab is confined to the panel.
   * `inert` on collapsed accordions keeps their links out of this list.
   */
  React.useEffect(() => {
    if (!menuOpen || closing) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      // Wrap at both ends, and pull focus back in if it has drifted outside.
      if (!active || !panel.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closing, closeMenu]);

  const isOverHero = !isScrolled;

  const menuButtonClass = isOverHero
    ? "flex h-10 w-10 items-center justify-center rounded border border-white/40 text-white hover:bg-white/10 lg:hidden"
    : "flex h-10 w-10 items-center justify-center rounded border border-border text-foreground lg:hidden";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-[background-color,border-color] duration-300 ${
        isOverHero
          ? "bg-transparent border-transparent"
          : "bg-white border-b border-border"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <SiteLogo
          variant={isOverHero ? "dark-ui" : "light-ui"}
          priority
        />

        <div className="hidden lg:block">
          <Nav light={isOverHero} />
        </div>

        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuButtonClass}
          aria-expanded={menuOpen && !closing}
          aria-controls="mobile-menu"
          aria-label={menuOpen && !closing ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">
            {menuOpen && !closing ? "Close" : "Menu"}
          </span>
          {menuOpen && !closing ? (
            <svg
              className="h-5 w-5 shrink-0 transition-opacity duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 shrink-0 transition-opacity duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu: full-screen overlay; open/close with slide + fade */}
      {(menuOpen || closing) && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-60 flex lg:hidden"
          role="dialog"
          aria-label="Mobile menu"
          aria-modal="true"
        >
          {/* Backdrop: fades in/out */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${
              animatedOpen && !closing ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onClick={closeMenu}
          />

          {/* Panel: slides in from right */}
          <div
            ref={panelRef}
            className={`relative flex flex-1 flex-col bg-navy w-full shadow-2xl transition-transform duration-300 ease-out ${
              animatedOpen && !closing ? "translate-x-0" : "-translate-x-full"
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Top bar: light grey, logo left, close (X) right */}
            <div className="flex items-center justify-between shrink-0 bg-slate-light px-6 py-5 border-b border-border">
              <SiteLogo
                variant="light-ui"
                onNavigate={closeMenu}
                imageClassName="h-10 max-h-10 w-auto sm:h-11 sm:max-h-11"
              />
                
              <button
                type="button"
                ref={closeButtonRef}
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded text-foreground hover:bg-black/10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav list: dark background; dropdowns accordion (one open at a time) */}
            <nav
              className="flex-1 overflow-auto bg-navy"
              aria-label="Main navigation"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  if (isNavDropdown(item)) {
                    const submenuId = `mobile-nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
                    const isOpen = openMobileDropdown === item.label;
                    return (
                      <li key={item.label} className="border-b border-white/20">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileDropdown((prev) =>
                              prev === item.label ? null : item.label,
                            )
                          }
                          className="flex w-full items-center justify-between py-4 px-6 text-left text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 uppercase"
                          aria-expanded={isOpen}
                          aria-controls={submenuId}
                        >
                          {item.label}
                          <svg
                            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <div
                          id={submenuId}
                          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                          role="region"
                          aria-label={`${item.label} submenu`}
                          // Collapsed rows are only 0px tall, not hidden — without
                          // `inert` their links stay tabbable and screen-reader visible.
                          inert={!isOpen}
                        >
                          <div className="min-h-0 overflow-hidden">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                className="block py-3 px-6 pl-10 text-base font-medium tracking-wide text-white/90 hover:text-gold transition-colors duration-200 capitalize border-b border-white/10"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href} className="border-b border-white/20">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-4 px-6 text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 uppercase"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
