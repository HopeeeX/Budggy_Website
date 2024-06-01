"use client"

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        // Check if the current path is the root '/'
        if (pathname === '/') {
            // Perform the redirect to '/en' (or another default language)
            router.replace('/en/')
        }
    }, [pathname]);
  return (
    <body>
    </body>
  )
}

export default page
