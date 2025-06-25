import { Star } from 'lucide-react'

const FeaturedCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dal Bati Churma" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dal Bati Churma</h3>
                <p className="text-gray-600 mb-4">Traditional Indori special with lentils, wheat balls, and sweet crumbs</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">₹180</span>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-600 ml-1">4.8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
