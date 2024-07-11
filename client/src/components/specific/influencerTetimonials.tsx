import { IoStar } from "react-icons/io5"
import styled from "styled-components";

export const InfluencerTestimonials = () => {
    return (
        <TestimonalContainer>
            <h1>Influencer Testimonials</h1>
            <div className="top5TetimonialsForThisInfluencer">
                <div className="profile">
                    <div className="info">
                        <h1>Ethiopian Influencer 1</h1>
                        <p>CEO at Ethiopian Company 1</p>
                    </div>
                    <div className="rating">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <div className="date">
                        <p>12/7/2024</p>
                    </div>
                    <div className="text">
                        <p>
                            He is a great Ethiopian influencer, I have worked with him on multiple campaigns and he has always delivered the best results.
                        </p>
                    </div>
                </div>
                <div className="profile">
                    <div className="info">
                        <h1>Ethiopian Influencer 2</h1>
                        <p>CEO at Ethiopian Company 2</p>
                    </div>
                    <div className="rating">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <div className="date">
                        <p>12/7/2024</p>
                    </div>
                    <div className="text">
                        <p>
                            He is a great Ethiopian influencer, I have worked with him on multiple campaigns and he has always delivered the best results.
                        </p>
                    </div>
                </div>
                <div className="profile">
                    <div className="info">
                        <h1>Ethiopian Influencer 3</h1>
                        <p>CEO at Ethiopian Company 3</p>
                    </div>
                    <div className="rating">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <div className="date">
                        <p>12/7/2024</p>
                    </div>
                    <div className="text">
                        <p>
                            He is a great Ethiopian influencer, I have worked with him on multiple campaigns and he has always delivered the best results.
                        </p>
                    </div>
                </div>
                <div className="profile">
                    <div className="info">
                        <h1>Ethiopian Influencer 4</h1>
                        <p>CEO at Ethiopian Company 4</p>
                    </div>
                    <div className="rating">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <div className="date">
                        <p>12/7/2024</p>
                    </div>
                    <div className="text">
                        <p>
                            He is a great Ethiopian influencer, I have worked with him on multiple campaigns and he has always delivered the best results.
                        </p>
                    </div>
                </div>
            </div>
        </TestimonalContainer>
    );
};


export const TestimonalContainer = styled.div`
    width: 100%;
    padding: 20px;

    >h1{
        font-size: 1.6rem;
        font-weight: 600;
        padding: 2rem;
    }
    .top5TetimonialsForThisInfluencer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 20px;
        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            background-color: #fff;
            padding: 1rem;
            .info {
            h1 {
                font-size: 1.5rem;
                font-weight: 600;
            }
            p {
                font-size: 1rem;
                color: #666;
            }
            }
            .rating {
            color: #f1c40f;
            display: flex;
            gap: 5px;
            }
            .date {
            p {
                font-size: 0.8rem;
                color: #666;
            }
            }
            .text {
            p {
                font-size: 1rem;
                color: #666;
            }
            }
        }
        }
    `;