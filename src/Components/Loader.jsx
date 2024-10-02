const array = Array.from(Array(8).keys());

const Loader = () => {
  return (
    <div>
      <div className="bg-regal-blue w-11/12 h-96 animate-pulse mx-auto my-10 rounded-lg"></div>

      <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 animate-pulse">
        {array.map((item) => (
          <div
            key={item}
            className="box w-full h-64 bg-regal-blue rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
