import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Link from 'next/link'

// Fabric data
const fabrics = [
    {
        id: 1,
        name: 'Cotton Blend',
        status: 'Available',
        imageUrl: '/api/placeholder/200/200'
    },
    {
        id: 2,
        name: 'Flannel',
        status: 'Out of Stock',
        imageUrl: '/api/placeholder/200/200'
    }
]

export default function Fabrics() {
    return (
        <div className="min-h-screen bg-stone-100">
            {/* Header */}
            <header className="bg-stone-800 shadow-lg">
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold text-stone-100 font-serif text-center">Available Fabrics</h1>
                    <nav className="mt-4 text-center">
                        <Link href="/" className="text-stone-300 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link href="/fabrics" className="text-stone-300 hover:text-white mr-4">
                            Fabrics
                        </Link>
                        <Link href="/scents" className="text-stone-300 hover:text-white">
                            Scents
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {fabrics.map(fabric => (
                        <Card key={fabric.id} className="hover:shadow-xl transition-all duration-300 bg-stone-50 border-2 border-stone-200">
                            <CardHeader>
                                <img
                                    src={fabric.imageUrl}
                                    alt={fabric.name}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <h2 className="text-lg mb-2 text-stone-800 font-serif">{fabric.name}</h2>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm ${fabric.status === 'Available'
                                        ? 'bg-green-50 text-green-800 border-2 border-green-200'
                                        : 'bg-red-50 text-red-800 border-2 border-red-200'
                                    }`}>
                                    {fabric.status}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-stone-800 shadow-lg mt-8">
                <div className="max-w-7xl mx-auto py-6 px-4 text-center text-stone-300">
                    <p className="font-serif">Made with ❤️ and care</p>
                    <p className="text-sm mt-2">Contact us for custom orders and inquiries</p>
                </div>
            </footer>
        </div>
    )
}