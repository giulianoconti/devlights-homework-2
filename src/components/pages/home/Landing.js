export const Landing = () => {
  return (
    <div className="h-screen flex text-center bg-gray-900">
      <div className="max-w-xl m-auto pb-12">
        <div className="bg-white shadow-md rounded">
          <img
            className="object-contain w-full rounded-t"
            src={`/img/landingImg.png`}
            alt="imgHome"
          />
          <h1 className="text-4xl p-8">Pokemon Finder</h1>
          <p className="mb-12 p-8">
            By logging in you will be able to access the list of pokemons and
            their details
          </p>
        </div>
      </div>
    </div>
  );
};
