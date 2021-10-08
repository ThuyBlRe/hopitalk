import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function CardSection2() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
        <div className="card-left">
          <h2 className="secondary-heading">部門と学科に分かれる</h2>
            <p>
            情報の管理と、送信する必要の情報の選択が簡単になります。
            </p>
          </div>
          <div className="card-right">
          <img
              width="450"
              height="300"
              
              src="https://static.vecteezy.com/system/resources/previews/003/177/442/large_2x/online-doctor-service-technology-for-consultations-free-vector.jpg"
              alt=""
            />
            
          </div>
          
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`

    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px){
          grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{
              border-radius: 20px;
              filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}

        }

        .card-left{
          padding: 2rem 1rem 0 0 ;
            p{
                padding: 1rem 0;
            }
        }
    }
`;
export default CardSection2;
