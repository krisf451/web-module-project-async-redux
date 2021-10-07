import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://miro.medium.com/max/1400/0*IzgBBsyQfiV_xGIs.png",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "https://getflywheel.com/layout/wp-content/uploads/2021/07/The_Best_Java_Script_Libraries_1800x500-1-1800x500-1-1568x436.jpeg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const DisplayCarousel = () => <UncontrolledCarousel items={items} />;

export default DisplayCarousel;
