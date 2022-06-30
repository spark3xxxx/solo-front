import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Noodle() {
  const [noodles, setNoodle] = useState([]);

  useEffect(() => {
    noodle();
  }, []);

  const noodle = async () => {
    const db = await fetch("http://127.0.0.1:8000/foods", {
      credentials: "include", // ここを追加。
    });

    const data = await db.json();
    setNoodle(data);
  };
  return (
    <div>
      <Wrapper>
        <h3>Noodle</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {noodles.map((recipe) => {
            return (
              <SplideSlide key={recipe._id}>
                <Card>
                  <p>{recipe.name}</p>

                  <img src={recipe.img} alt={recipe.img} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    fot-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Noodle;
