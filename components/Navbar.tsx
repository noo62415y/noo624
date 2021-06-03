import Link from 'next/link'

export const Navbar = () => {
    return (
        <>
            <nav className="flex items-center flex-wrap bg-green-300 p-3">
                <Link href="/">
                    <a>Noo62415y</a>
                </Link>
            </nav>
        </>
    )
}