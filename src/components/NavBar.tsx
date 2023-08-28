import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href='/'>main</Link>
            <Link href='/events'>events</Link>
            <Link href='/reservations'>reservation</Link>
            <Link href='/'>menu</Link>
        </nav>
    )
}