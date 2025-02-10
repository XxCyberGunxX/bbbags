import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Link from 'next/link'

// Product data
const products = [
    {
        id: 1,
        name: 'Boo Boo Bags',
        description: 'Perfect for minor bumps and bruises. These smaller bags provide targeted comfort.',
        imageUrl: '/api/placeholder/300/200'
    },
    {
        id: 2,
        name: 'Headache Bags',
        description: 'Designed specifically to provide relief from headaches and migraines.',
        imageUrl: '/api/placeholder/300/200'
    },
    {
        id: 3,
        name: 'Medium Bags',
        description: 'Versatile size perfect for various uses and body areas.',
        imageUrl: '/api/placeholder/300/200'
    },
    {
        id: 4,
        name: 'Large Bags',
        description: 'Our biggest size, ideal for back pain and larger area coverage.',
        imageUrl: '/api/placeholder/300/200'
    },
    {
        id: 5,
        name: 'Neck Rolls',
        description: 'Ergonomically designed to provide neck and shoulder support and relief.',
        imageUrl: '/api/placeholder/300/200'
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-stone-100">
            {/* Header */}
            <header className="bg-stone-800 shadow-lg">
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold text-stone-100 font-serif text-center">Crafted Comfort</h1>
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
                    <p className="text-stone-300 text-center mt-2">Handmade with Love</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <Card key={product.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-stone-50 border-2 border-stone-200">
                            <CardHeader>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <h2 className="text-xl mb-2 text-stone-800 font-serif">{product.name}</h2>
                                <p className="text-stone-600">{product.description}</p>
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