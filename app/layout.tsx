import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import React from 'react'
import ReduxProvider from '@/redux/provider'

const inter = Inter({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Guardian news',
	description: 'App-worker with official Guardian API'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
