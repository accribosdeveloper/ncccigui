function Header() {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold">My React App</h1>
                <nav className="mt-2">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;