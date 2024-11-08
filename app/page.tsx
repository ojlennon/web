"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (    
    <div>
      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        <Image
            src="/michigan.png"
            alt="Picture of the author"
            width={50}
            height={50}
            quality={100}
          />
          <p>
            <a href="">About</a>
          </p>
          <p>
            <a href="">Projects</a>
          </p>
          <p>
            <a href="">Login</a>
          </p>
          <p>
            <a href="">Sign Up</a>
          </p>
      </div>

      <div id="title">
        <h1> FindBlue.</h1>
      </div>

      <div id="aboutUs">
        <h1 id="aboutTitle">About</h1>
        <p>
          Our idea is not unique. Well, only if you think broadly. If you are
          looking for qualified people, you use LinkedIn...
        </p>
      </div>

      <div id="footnote">
        <a href="">FAQ</a>
        <a href="">Contact Us</a>
        <a href="">Founders</a>
      </div>
    </div>
  );
}
