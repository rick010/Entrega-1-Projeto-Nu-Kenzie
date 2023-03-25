import imgKenzie from "../../assets/img/Nu-Kenzie.svg"


export function Header() {

    return (
       <header className="header-Container">
            <div className="header-logo">
                <img src={imgKenzie} alt={"img Nu-Kenzie"} />
            </div>
       </header>
    );
};