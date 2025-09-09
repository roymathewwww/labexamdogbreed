import React from 'react'

export default function BreedCard({ breed }) {
  const { attributes = {} } = breed || {}
  const { name, description, life = {}, male_weight = {}, female_weight = {}, hypoallergenic } = attributes

  const weightMin = Math.min(male_weight.min ?? Infinity, female_weight.min ?? Infinity)
  const weightMax = Math.max(male_weight.max ?? -Infinity, female_weight.max ?? -Infinity)

  const displayWeight = Number.isFinite(weightMin) && Number.isFinite(weightMax) ? `${weightMin} - ${weightMax} kg` : 'N/A'
  const lifeSpan = life.min && life.max ? `${life.min} - ${life.max} years` : 'N/A'

  return (
    <article className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${hypoallergenic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{hypoallergenic ? 'Hypoallergenic' : 'Not hypoallergenic'}</span>
      </div>

      <p className="mt-3 text-sm text-gray-600 line-clamp-3">{description || 'No description available.'}</p>

      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        <li><strong>Life span:</strong> {lifeSpan}</li>
        <li><strong>Weight:</strong> {displayWeight}</li>
      </ul>
    </article>
  )
}
