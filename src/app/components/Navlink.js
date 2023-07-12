'use client'
import Link from "next/link"

function Navlink({title, link}) {
  return (
    <li>
        <Link href={link}>
            {title}
        </Link>
    </li>
  )
}

export default Navlink
