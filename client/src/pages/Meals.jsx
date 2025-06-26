import FeaturedCard from '../components/FeaturedCard'

const Meals = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">All Meals</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />

                </div>
            </div>
        </section>
    )
}

export default Meals
