import Image from "next/image";

export function Loader() {
    return (
        <div className="flex h-screen justify-center bg-foreground/5">
            <div className="self-center">
                <Image src={"/clock.gif"} alt="In Time Relógios" width={150} height={150} priority={true} />
            </div>
        </div>
    )
}