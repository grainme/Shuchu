const About = () => {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("./images/noise.jpg")' }}
    >
      <div className="w-70 h-400 flex items-center justify-center text-6xl p-8">
        <h2>フォーカス WHO?</h2>
      </div>
      <div className="w-70 h-170 m-3 border border-solid border-gray-700 rounded overflow-hidden">
        <div className="w-300 h-170 flex flex-col items-start p-12">
          <span className="text-4xl font-bold">Who are</span>
          <span className="text-4xl font-bold">we?</span>
        </div>
        <div className="w-670 h-150 flex items-center p-2 pr-8 text-gray-300 font-display">
          <p>
            At フォーカス shushu, we are on a mission to provide you with a
            revolutionary timer web service that's all about efficiency and
            productivity. We're here to help you master your time and unlock
            your full potential. Get ready to level up your focus game!
          </p>
        </div>
      </div>
      {/* Repeat the above structure for the other sections */}
      <div className="container1 flex flex-col items-center h-80">
        <div className="h-0.4 w-90 bg-gray-700 mb-4"></div>
        <div className="flex items-center justify-between w-91 p-2">
          <a href="./home_page.html">
            <p className="font-display">フォーカス</p>
          </a>
          <p className="font-display font-semibold text-sm">
            Unleash your productivity potential
          </p>
          <a href="./index.html">
            <p className="font-display">Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
