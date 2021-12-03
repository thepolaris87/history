import { Route, Routes } from 'react-router';

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/test' element={<div>TEST</div>} />
            </Routes>
        </>
    );
}
