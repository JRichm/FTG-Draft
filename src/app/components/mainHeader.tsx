export default function MainHeader() {

    const navLinkStyle = "hover:bg-green-100 p-5"

    return (
        <div className="static bg-white">
            <div className="flex flex-row place-items-center justify-between w-full">
                <div className="p-5 font-bold">
                    <a href="/">Fresh Table Greens</a>
                </div>
                <div className="flex flex-row place-items-center">
                    <a className={`${navLinkStyle}`} href="/">Home</a>
                    <a className={`${navLinkStyle}`} href="/about">About</a>
                    <a className={`${navLinkStyle}`} href="/sustainability">Sustainability</a>
                    <a className={`${navLinkStyle}`} href="/products">Products</a>
                </div>
            </div>
        </div>
    )
}