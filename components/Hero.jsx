import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <div className="pt-24 pb-12 xl:h-[1087px] xl:py-0 bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </div>
  );
};

export default Hero;
