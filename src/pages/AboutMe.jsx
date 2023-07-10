import { useEffect, useRef, useState } from "react";
import picOfMe from "../images/picOfMe.jpeg";

export default function AboutMe() {
  return (
    <section>
      <div className="about-me-content">
        <div>
          <img src={picOfMe} />
          {/* BFJHWOIEROIHJ */}
        </div>
        <div className="bio-text">
          <h1>About Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            ipsam at asperiores autem cumque voluptatem amet quidem voluptatum
            quam non. Tenetur sequi veritatis voluptas officiis placeat aliquam
            earum! Voluptatem quidem quaerat nisi commodi quos. Distinctio quo
            eligendi voluptatum quas voluptatem eius, ut accusantium quia esse
            quidem alias dolorem vitae sequi.
          </p>
        </div>
      </div>
    </section>
  );
}
