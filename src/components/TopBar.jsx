import Image from "next/image";

export function TopBar() {
    return (<div
        style={{
            display: "flex",
            gap: "10px",
            background: "#255",
            alignContent: "center",
            justifyContent: "space-between"
        }}
    >
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                background: "#b4d",
                gap: "20px",
            }}
        >
            <Image
                src="/michigan.png"
                alt="Michigan Logo"
                width={50}
                height={50}
                quality={100}
            />
            <p>
                <a href="/">Home</a>
            </p>
            <p>
                <a href="">About</a>
            </p>
            <p>
                <a href="/projects">Projects</a>
            </p>
        </div>
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                background: "#cab",
                gap: "10px",
                alignItems: "center",
            }}
        >
            <p>
                <a href="/login">Login</a>
            </p>
            <p>
                <a href="">Sign Up</a>
            </p>
        </div>
    </div>
    );
}