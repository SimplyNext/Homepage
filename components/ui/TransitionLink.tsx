"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { useTransition } from "@/components/providers/TransitionProvider";

type Props = ComponentProps<typeof Link> & { href: string };

/**
 * Verhält sich wie next/link, spielt aber vor der Navigation die
 * Cover-Transition ab. Externe/Anker-Links bleiben normal.
 */
export default function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const { navigate } = useTransition();
  const isInternal = href.startsWith("/");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!isInternal || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
