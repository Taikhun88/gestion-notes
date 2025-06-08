"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    return (
        <header>
            <div id="logo">
                <Link href="/">
                    <span>Loc'Event</span>
                </Link>
            </div>
            <div>
                <Link href="/notes">Mes notes</Link>
                <Link href="/notes/new">Créer une note</Link>
                <ThemeToggle />
            </div>
        </header>
    )
}