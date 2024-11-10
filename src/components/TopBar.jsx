import Image from "next/image";
import Link from "next/link";

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
                <Link href="/">Home</Link>
            </p>
            <p>
                {/* <a href="">About</a> */}
                <Link href='/about'>About</Link>
            </p>
            <p>
                <Link href="/projects">Projects</Link>
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
                <Link href="/login">Login</Link>
            </p>
            <p>
                <Link href="/signup">Sign Up</Link>
            </p>
        </div>
    </div>
    );
}