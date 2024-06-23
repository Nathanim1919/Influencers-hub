// import '../../assets/custome.css'

export const Features: React.FC = () => {
    return (
        <div >
            <h1 className="text-3xl font-bold text-center py-5">Our Services</h1>
            <p className="text-center text-gray-700">We offer a wide range of services to help you grow your business.</p>
       
        <div className="features flex gap-5 justify-center items-center m-auto py-5" style={{width:"80vw"}}>
            <div className="feature position-relative">
                <div className="flex p-10 bg-white flex-col items-center justify-center">
                    <h2 className="feature-title font-bold text-2xl">Influencer Marketing</h2>
                    <p className="feature-text text-gray-700 my-5">
                        Reach your target audience by leveraging the influence of social media stars.
                    </p>
                </div>
            </div>
            <div className="flex p-10 bg-white flex-col items-center justify-center">
                <h2 className="feature-title font-bold text-2xl">Social Media Management</h2>
                <p className="feature-text text-gray-700 my-5">
                    We will manage your social media accounts and help you grow your audience.
                </p>
            </div>
            <div className="flex p-10 bg-white flex-col items-center justify-center">
                <h2 className="feature-title font-bold text-2xl">Content Creation</h2>
                <p className="feature-text text-gray-700 my-5">
                    Our team of content creators will help you create engaging content that resonates with your audience.
                </p>
            </div>
            </div>
        </div>
    )
}