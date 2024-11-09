import { TopBar } from "./TopBar";

export default function Layout({ children }) {
    return (
        <>
            <TopBar />
            <main>{children}</main>
        </>
    )
}