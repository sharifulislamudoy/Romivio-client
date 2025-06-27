import { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
    }, []); // Runs once after component mounts

    return (
        <div>
            {/* Your page content */}
        </div>
    );
}
export default MyComponent