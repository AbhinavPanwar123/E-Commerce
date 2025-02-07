import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlayInterval={2000}
          infinite
          responsive={responsive}
        />
        <Button variant="contained" className="z-50" sx={{position:'absolute',top:'8rem',right:'0rem',
            transform:''}} color="white" aria-label="next">
            <KeyboardArrowLeftIcon/>
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
