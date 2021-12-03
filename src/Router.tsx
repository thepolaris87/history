import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

export default function Router() {
    return (
        <>
            <Routes>
                <Route
                    path=''
                    element={
                        <div>
                            <Link to='/test'>TEST로</Link>
                        </div>
                    }
                />
                <Route path='/test' element={<div>TEST</div>} />
            </Routes>
        </>
    );
}
