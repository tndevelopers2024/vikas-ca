"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
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
  const [scrollStage, setScrollStage] = useState<0 | 1 | 2>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollStage(y === 0 ? 0 : y <= 100 ? 1 : 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Any completed navigation closes whatever was open — including a back/forward
  // step, which no click handler would catch. Adjusted during render rather than
  // in an effect so the drawer never paints over the new page.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  /**
   * Same-page links are the ones the client reported as broken: pressing "Home"
   * from the bottom of the homepage did nothing, because navigating to the route
   * you are already on is a no-op. Handle those two cases explicitly.
   */
  const handleNavigate = useCallback(
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setMobileOpen(false);
      setOpenMenu(null);

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
        return;
      }

      // "/" or "/accounting" while already on that page → return to the top.
      if (href === pathname) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // "/#services" while already on the homepage → scroll to that section.
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

  const containerClass = [
    styles.navContainer,
    scrollStage === 0 ? styles.stage0 : scrollStage === 1 ? styles.stage1 : styles.stage2,
  ].join(" ");

  return (
    <div className={styles.navRoot}>
      <header className={styles.headerWrapper}>
        <div className={containerClass}>
          <nav className={styles.navInner} aria-label="Primary">
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
                sizes="260px"
              />
            </Link>

            <ul className={styles.desktopNavList}>
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
                        className={`${styles.navButton} ${current ? styles.navButtonActive : ""}`}
                        aria-current={isCurrentPage(item.href, pathname) ? "page" : undefined}
                        onClick={handleNavigate(item.href)}
                        onFocus={item.links ? () => setOpenMenu(item.label) : () => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>

                      {item.links && (
                        <button
                          type="button"
                          className={styles.navDisclosure}
                          aria-expanded={expanded}
                          aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                          onClick={() => setOpenMenu(expanded ? null : item.label)}
                        >
                          <ChevronDown
                            className={`${styles.navChevron} ${expanded ? styles.navChevronOpen : ""}`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    {item.links && (
                      <div
                        className={`${styles.dropdown} ${expanded ? styles.dropdownOpen : ""}`}
                        hidden={!expanded}
                      >
                        {item.description && (
                          <p className={styles.dropdownIntro}>{item.description}</p>
                        )}
                        <ul className={styles.linksList}>
                          {item.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className={`${styles.subLinkItem} ${
                                  isCurrentPage(link.href, pathname) ? styles.subLinkItemActive : ""
                                }`}
                                aria-current={isCurrentPage(link.href, pathname) ? "page" : undefined}
                                onClick={handleNavigate(link.href)}
                              >
                                <span className={styles.subLinkLabel}>{link.label}</span>
                                {link.description && (
                                  <span className={styles.subLinkDescription}>{link.description}</span>
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

            <div className={styles.actionsGroup}>
              <Link
                href={ctaHref}
                className={styles.ctaButton}
                aria-current={isCurrentPage(ctaHref, pathname) ? "page" : undefined}
                onClick={handleNavigate(ctaHref)}
              >
                <span>{ctaLabel}</span>
              </Link>
              <button
                type="button"
                className={styles.mobileMenuToggle}
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className={styles.burgerIcon} aria-hidden="true">
                  <span className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarTopOpen : ""}`} />
                  <span className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarBottomOpen : ""}`} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Site menu"
      >
        <ul className={styles.mobileNavList}>
          {items.map((item, index) => {
            const current = isCurrentSection(item, pathname);
            const expanded = mobileExpanded === item.label;

            return (
              <li
                key={item.label}
                className={styles.mobileNavItem}
                style={{ transitionDelay: mobileOpen ? `${0.06 * index + 0.1}s` : "0s" }}
              >
                <div className={styles.mobileNavRow}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavButton} ${current ? styles.mobileNavButtonActive : ""}`}
                    aria-current={isCurrentPage(item.href, pathname) ? "page" : undefined}
                    onClick={handleNavigate(item.href)}
                  >
                    {item.label}
                  </Link>

                  {item.links && (
                    <button
                      type="button"
                      className={styles.navDisclosure}
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    >
                      <ChevronDown
                        className={`${styles.mobileAccordionChevron} ${
                          expanded ? styles.mobileAccordionChevronOpen : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>

                {item.links && (
                  <div
                    className={`${styles.mobileAccordionContent} ${
                      expanded ? styles.mobileAccordionContentOpen : ""
                    }`}
                    hidden={!expanded}
                  >
                    <ul className={styles.mobileSubLinks}>
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
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.mobileFooterActions}>
          <Link
            href={ctaHref}
            className={styles.ctaButton}
            style={{ width: "100%", justifyContent: "center", padding: "12px" }}
            onClick={handleNavigate(ctaHref)}
          >
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
