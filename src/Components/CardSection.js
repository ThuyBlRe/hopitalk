import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';


function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                          専用メッセージングアプリ
                        </h2>
                        <p>
                          医療従事者だけ専用のメッセージングアプリ。アカウントはすべて事前承認されており、完全にプロフェッショナルです。
                        </p>
                    </div>
                    <div className="card-right">
                        <img width="450" height="300"  src="https://static.vecteezy.com/system/resources/previews/001/363/129/non_2x/female-doctor-on-computer-screen-for-online-appointment-vector.jpg" alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
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
            padding: 2rem 0;
            p{
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection
