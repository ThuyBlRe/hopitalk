import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function CardSection3() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">予期せぬお知らせ送信できる</h2>
            <p>
              緊急の場合、SMSとモバイルを直接送信するメッセージングができます。{" "}
            </p>
          </div>
          <div className="card-right">
            <img
              width="375"
              height="300"
              border-radius="20px"
              src="https://static.vecteezy.com/system/resources/previews/002/199/458/non_2x/online-doctor-consultation-concept-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}
const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
      img {
        border-radius: 20px;
        filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
      }
    }

    .card-left {
      padding: 2rem 0;
      p {
        padding: 1rem 0;
      }
    }
  }
`;
export default CardSection3;
