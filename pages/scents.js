import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Flower2 } from 'lucide-react'

// Scents data
const scents = [
    {
        id: 1,
        name: 'Lavender',
        status: 'Available',
        description: 'Calming and soothing, perfect for relaxation'
    },
    {
        id: 2,
        name: 'Eucalyptus',
        status: 'Available',
        description: 'Refreshing and invigorating, helps clear the mind'
    },
    {
        id: 3,
        name: 'Chamomile',
        status: 'Available',
        description: 'Gentle and relaxing, aids in peaceful rest'
    },
    {
        id: 4,
        name: 'Peppermint',
        status: 'Out of Stock',
        description: 'Cool and energizing, great for focus'
    }
]

export default function Scents() {
    return (
        <div className="min-h-screen bg-stone-100">
            {/* Header */}
            <header className="bg-stone-800 shadow-lg">
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold text-stone-100 font-serif text-center">Available Scents</h1>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {scents.map(scent => (
                        <Card key={scent.id} className="hover:shadow-xl transition-all duration-300 bg-stone-50 border-2 border-stone-200">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Flower2 className="text-stone-700 mr-2" size={24} />
                                    <h2 className="text-xl text-stone-800 font-serif">{scent.name}</h2>
                                </div>
                                <p className="text-stone-600 mb-4">{scent.description}</p>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm ${scent.status === 'Available'
                                        ? 'bg-green-50 text-green-800 border-2 border-green-200'
                                        : 'bg-red-50 text-red-800 border-2 border-red-200'
                                    }`}>
                                    {scent.status}
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