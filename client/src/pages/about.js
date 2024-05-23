import React from 'react';

const About = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-7xl font-bold pb-10 text-gray-800 text-white">
                About Me
            </h1>
            <div className="max-w-3xl mx-auto text-lg text-gray-300">
                <p className="mb-6">
                    Hey there! I'm Timothy Itayi, a motorsport fan and the person behind <a href="https://timothyitayi.com/" className="text-blue-500">GPHistory</a>. This web app is all about celebrating the thrilling moments of Grand Prix history. 
                    I created GPHistory to share my passion for motorsport and give fans a place to dive into the rich heritage of Formula 1.
                </p>
                <p className="mb-6">
                    I've been an F1 fan for years, and I’ve put together a collection of <a href="/grandprix" className="text-blue-500">Tracks</a> and <a href="/showroom" className="text-blue-500">Iconic cars</a> that capture the essence of motorsport greatness.
                </p>
                <p className="mb-6">
                    When I'm not deep into the world of motorsport, I'm usually coding, sim racing, or working on new features for GPHistory. 
                    I love the rush of high-speed racing and connecting with fellow fans who share my enthusiasm for the sport. Through GPHistory, I hope to celebrate the legacy of motorsport and inspire future racing enthusiasts.
                </p>
                <p className="mb-6">
                    Besides motorsport, I’m also a web developer. If you want to see more of my work, check out my portfolio <a href="https://timothyitayi.com/" className="text-blue-500">here</a>.
                </p>
                <p className="mb-6">
                    Let's connect and enjoy the ride through motorsport history with GPHistory!
                </p>
                <p className="mt-10">
                    Special thanks to OpenF1 API for providing the current session data, P10 for the inspiration, HyperRace API for the current standings, and my girlfriend Gracie for helping with some of the design.
                </p>
            </div>
        </div>
    );
};

export default About;
