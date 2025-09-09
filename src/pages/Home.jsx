import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BreedCard from '../components/BreedCard'

export default function Home() {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const fetchBreeds = async () => {
      try {
        const res = await axios.get('https://dogapi.dog/api/v2/breeds')
        if (mounted) setBreeds(res.data.data)
      } catch (err) {
        if (mounted) setError('Failed to load breeds')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchBreeds()
    return () => { mounted = false }
  }, [])

  return (
    <div>
      <header className="relative">
        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1600&q=80" alt="dogs" className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/28 via-pink-300/18 to-purple-600/14" />
        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">Dogooo</h1>
          <p className="mt-3 text-white/95 max-w-2xl mx-auto">Find your best buddy !!</p>
          <div className="mt-6">
            <a href="#breeds" className="inline-block px-5 py-2 bg-white text-gray-800 rounded-full font-medium">View Breeds</a>
          </div>
        </div>
      </header>

      <main id="breeds" className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Breeds</h2>
          <p className="text-gray-600">Data sourced from a public API.</p>
        </section>

        {loading && <div className="p-6">Loading...</div>}
        {error && <div className="p-6 text-red-600">{error}</div>}

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((b) => (
            <BreedCard key={b.id} breed={b} />
          ))}
        </section>
      </main>
    </div>
  )
}
