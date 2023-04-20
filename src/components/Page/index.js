import {useState} from "react";

const Page = ({active,setActive}) => {

    return (
        <div style={{
            padding: "30px 0",
            display: "flex",
            justifyContent: "center"
        }}>

            <button onClick={() => {
                setActive(1)
            }
            }> Начало
            </button>
            <button onClick={() => {
                setActive(active === 1 ? 1 : active - 1 )
            }
            }>Назад
            </button>
            <h1>{active}</h1>
            <button onClick={() => {
                setActive(active + 1)
            }}>Далее
            </button>
        </div>
    );
};

export default Page;