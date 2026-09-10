"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Nav.module.css";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { NavItem, primaryNavItems } from "@/data/navItemsData";

export interface NavProps {
  items?: NavItem[];
  brandName?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** True when `href` points at the page the visitor is already on. */
function isCurrentPage(href: string, pathname: string) {
  return href === pathname;
}

/** True when the item, or any of its children, owns the current page. */
function isCurrentSection(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  if (isCurrentPage(item.href, pathname)) return true;
  return Boolean(item.links?.some((link) => isCurrentPage(link.href, pathname)));
}

export function Nav({
  items = primaryNavItems,
  brandName = "NICS International",
  ctaLabel = "Contact",
  ctaHref = "/contact",
}: NavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Any completed navigation closes whatever was open
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }

  // Close on Escape or click outside
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const handleNavigate = useCallback(
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setMobileOpen(false);
      setOpenMenu(null);

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
        return;
      }

      // "/" or current page -> return to top
      if (href === pathname) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Hash link on same page -> smooth scroll to section
      const [path, hash] = href.split("#");
      if (hash && (path === pathname || path === `${pathname}/`)) {
        const target = document.getElementById(hash);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `#${hash}`);
        }
      }
    },
    [pathname]
  );

  const isSolid = scrolled || Boolean(openMenu) || mobileOpen;

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isSolid ? styles.headerScrolled : styles.headerTransparent}`}
    >
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${brandName} — home`}
          onClick={handleNavigate("/")}
        >
          <BrandLockup
            logoClassName={styles.brandLogo}
            wordClassName={styles.brandWord}
            priority
            sizes="220px"
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {items.map((item) => {
              const current = isCurrentSection(item, pathname);
              const expanded = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={item.links ? () => { cancelClose(); setOpenMenu(item.label); } : undefined}
                  onMouseLeave={item.links ? scheduleClose : undefined}
                >
                  <div className={styles.navItemRow}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${current ? styles.navLinkActive : ""}`}
                      aria-current={isCurrentPage(item.href, pathname) ? "page" : undefined}
                      onClick={handleNavigate(item.href)}
                      onFocus={item.links ? () => setOpenMenu(item.label) : () => setOpenMenu(null)}
                    >
                      <span>{item.label}</span>
                      {item.links && (
                        <ChevronDown
                          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </div>

                  {item.links && expanded && (
                    <div className={styles.dropdown}>
                      {item.description && (
                        <p className={styles.dropdownIntro}>{item.description}</p>
                      )}
                      <ul className={styles.dropdownList}>
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={`${styles.dropdownLink} ${
                                isCurrentPage(link.href, pathname) ? styles.dropdownLinkActive : ""
                              }`}
                              aria-current={isCurrentPage(link.href, pathname) ? "page" : undefined}
                              onClick={handleNavigate(link.href)}
                            >
                              <span className={styles.dropdownLabel}>{link.label}</span>
                              {link.description && (
                                <span className={styles.dropdownDescription}>
                                  {link.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actionsGroup}>
          <Link
            href={ctaHref}
            className={styles.ctaButton}
            aria-current={isCurrentPage(ctaHref, pathname) ? "page" : undefined}
            onClick={handleNavigate(ctaHref)}
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation menu">
          <ul className={styles.mobileNavList}>
            {items.map((item) => {
              const current = isCurrentSection(item, pathname);
              const expanded = mobileExpanded === item.label;

              return (
                <li key={item.label} className={styles.mobileNavItem}>
                  <div className={styles.mobileNavRow}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileNavLink} ${current ? styles.mobileNavLinkActive : ""}`}
                      aria-current={isCurrentPage(item.href, pathname) ? "page" : undefined}
                      onClick={handleNavigate(item.href)}
                    >
                      {item.label}
                    </Link>

                    {item.links && (
                      <button
                        type="button"
                        className={styles.mobileDisclosure}
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Hide" : "Show"} ${item.label} submenu`}
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      >
                        <ChevronDown
                          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {item.links && expanded && (
                    <ul className={styles.mobileAccordion}>
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`${styles.mobileSubLink} ${
                              isCurrentPage(link.href, pathname) ? styles.mobileSubLinkActive : ""
                            }`}
                            aria-current={isCurrentPage(link.href, pathname) ? "page" : undefined}
                            onClick={handleNavigate(link.href)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileCtaWrapper}>
            <Link
              href={ctaHref}
              className={styles.mobileCtaButton}
              onClick={handleNavigate(ctaHref)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
